'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { cn } from '@/lib/utils';

export interface InfiniteParallaxGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of image URLs to load in the gallery */
  images: string[];
  /** Number of depth layers for the parallax effect. Default: 5 */
  depthLayers?: number;
  /** Number of images to instantiate per layer. Default: 10 */
  imagesPerLayer?: number;
  /** Max width of an image sprite. Default: 160 */
  maxImageWidth?: number;
  /** Max height of an image sprite. Default: 160 */
  maxImageHeight?: number;
  /** Optional overlay to display on top of the gallery (e.g., attribution text) */
  overlayText?: React.ReactNode;
  /** Whether to show the loading indicator. Default: true */
  showLoading?: boolean;
}

const LAYER_CONFIG = [
  { scale: 1.5, speed: 80, opacity: 1.0 },
  { scale: 1.0, speed: 40, opacity: 0.85 },
  { scale: 0.8, speed: 30, opacity: 0.7 },
  { scale: 0.6, speed: 20, opacity: 0.55 },
  { scale: 0.5, speed: 15, opacity: 0.4 },
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createFallbackTexture(
  layer: number,
  maxWidth: number,
  maxHeight: number
) {
  const c = document.createElement('canvas');
  c.width = maxWidth;
  c.height = maxHeight;
  const ctx = c.getContext('2d');
  if (ctx) {
    ctx.fillStyle = ['#4a6572', '#344955', '#232f34', '#1c2529', '#0f1518'][
      Math.min(layer, 4)
    ];
    ctx.fillRect(0, 0, c.width, c.height);
  }
  return new THREE.CanvasTexture(c);
}

export const InfiniteParallaxGallery = React.forwardRef<
  HTMLDivElement,
  InfiniteParallaxGalleryProps
>(
  (
    {
      images,
      depthLayers = 5,
      imagesPerLayer = 10,
      maxImageWidth = 160,
      maxImageHeight = 160,
      overlayText,
      showLoading = true,
      className,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      let camera: THREE.OrthographicCamera;
      let layers: THREE.Sprite[][] = [];
      const textures: THREE.Texture[] = [];

      let dragActive = false;
      let lastX = 0;
      let dragVelocity = 0;
      let speedFactor = 1;
      let lastTime = 0;
      let animationFrameId: number;

      let shuffledImages: string[] = [];
      let currentImageIndex = 0;

      const TOTAL = depthLayers * imagesPerLayer;

      function getNextRandomImage() {
        if (currentImageIndex >= shuffledImages.length) {
          shuffledImages = shuffleArray(images);
          currentImageIndex = 0;
        }
        const image = shuffledImages[currentImageIndex];
        currentImageIndex++;
        return image;
      }

      function resize() {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        renderer.setSize(w, h);

        if (!camera) {
          camera = new THREE.OrthographicCamera(0, w, h, 0, -1000, 1000);
          camera.position.z = 10;
        } else {
          camera.right = w;
          camera.top = h;
          camera.updateProjectionMatrix();
        }

        for (const layer of layers) {
          if (!layer) continue;
          for (const s of layer) {
            scene.remove(s);
            if (s.material.map) s.material.map.dispose();
            s.material.dispose();
            s.geometry.dispose();
          }
        }

        layers = [];
        for (let l = 0; l < depthLayers; l++) layers[l] = [];
        if (textures.length === TOTAL) fillViewport();
      }

      const handleResize = () => resize();
      window.addEventListener('resize', handleResize);

      // Initialize
      for (let l = 0; l < depthLayers; l++) layers[l] = [];
      resize();

      const loader = new THREE.TextureLoader();
      loader.crossOrigin = 'anonymous';

      let loadedCount = 0;

      function onLoaded(tex: THREE.Texture) {
        textures.push(tex);
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / TOTAL) * 100));

        if (loadedCount === TOTAL) {
          initSprites();
        }
      }

      function loadAll() {
        shuffledImages = shuffleArray(images);
        currentImageIndex = 0;
        for (let l = 0; l < depthLayers; l++) {
          for (let i = 0; i < imagesPerLayer; i++) {
            const path = getNextRandomImage();
            loader.load(
              path,
              (tex) => onLoaded(tex),
              undefined,
              () =>
                onLoaded(
                  createFallbackTexture(l, maxImageWidth, maxImageHeight)
                )
            );
          }
        }
      }

      function initSprites() {
        fillViewport();
        setIsLoaded(true);
        lastTime = performance.now();
        animate();
      }

      function addSprite(layerIndex: number, startX: number) {
        if (!container) return;
        const cfg = LAYER_CONFIG[layerIndex % LAYER_CONFIG.length];
        const texIndex = Math.floor(Math.random() * textures.length);
        const texture =
          textures[texIndex] ||
          createFallbackTexture(layerIndex, maxImageWidth, maxImageHeight);

        const mat = new THREE.SpriteMaterial({
          map: texture,
          transparent: true,
          opacity: cfg.opacity,
        });

        const sprite = new THREE.Sprite(mat);
        const imageObj = texture.image as
          { width?: number; height?: number } | undefined;
        let width = maxImageWidth;
        let height = maxImageHeight;

        if (imageObj && imageObj.width && imageObj.height) {
          const ratio = imageObj.width / imageObj.height;
          if (ratio > 1) {
            width = maxImageWidth;
            height = maxImageWidth / ratio;
          } else {
            height = maxImageHeight;
            width = maxImageHeight * ratio;
          }
        }

        const sizeVar = rand(0.85, 1.15);
        const w = width * cfg.scale * sizeVar;
        const h = height * cfg.scale * sizeVar;
        const spacing = w * rand(0.5, 0.9);

        sprite.scale.set(w, h, 1);
        sprite.position.set(
          startX + w / 2 + spacing,
          rand(h / 2, container.clientHeight - h / 2),
          -layerIndex * 50
        );

        const speedVariation = rand(0.45, 1.15);
        sprite.userData = {
          speed: cfg.speed * speedVariation,
          width: w,
          height: h,
          seed: rand(0, 1000),
          baseY: sprite.position.y,
          opacity: cfg.opacity,
        };

        layers[layerIndex].push(sprite);
        scene.add(sprite);
        return sprite;
      }

      function cleanupSprites() {
        if (!container) return;
        const w = container.clientWidth;
        const bufferZone = w * 0.5;

        for (let l = 0; l < depthLayers; l++) {
          if (!layers[l] || layers[l].length === 0) continue;
          const sprites = layers[l];
          const maxSprites = imagesPerLayer + 3;

          if (sprites.length > maxSprites) {
            for (let i = sprites.length - 1; i >= 0; i--) {
              const s = sprites[i];
              const ud = s.userData;
              let shouldRemove = false;

              if (speedFactor > 0) {
                shouldRemove = s.position.x - ud.width / 2 > w + bufferZone;
              } else if (speedFactor < 0) {
                shouldRemove = s.position.x + ud.width / 2 < -bufferZone;
              }

              if (shouldRemove) {
                scene.remove(s);
                if (s.material.map) s.material.map.dispose();
                s.material.dispose();
                sprites.splice(i, 1);
                if (sprites.length <= maxSprites) break;
              }
            }
          }
        }
      }

      function fillViewport() {
        if (!container) return;
        const w = container.clientWidth;
        for (let l = 0; l < depthLayers; l++) {
          let sprites = layers[l];
          if (!sprites) continue;

          let rightMost =
            sprites.length > 0
              ? Math.max(
                  ...sprites.map((s) => s.position.x + s.userData.width / 2)
                )
              : -container.clientWidth * 1.2;

          while (rightMost < w) {
            addSprite(l, rightMost);
            sprites = layers[l];
            rightMost = Math.max(
              ...sprites.map((s) => s.position.x + s.userData.width / 2)
            );
          }
        }
      }

      function animate() {
        const now = performance.now();
        const dt = Math.min(40, now - lastTime) / 1000;
        lastTime = now;
        if (!container) return;
        const w = container.clientWidth;

        dragVelocity *= 0.92;
        speedFactor =
          dragVelocity !== 0 ? Math.sign(dragVelocity) : speedFactor;

        if (Math.random() < 0.01) {
          cleanupSprites();
        }

        for (const sprites of layers) {
          if (!sprites || !sprites.length) continue;
          for (const s of sprites) {
            const ud = s.userData;
            s.position.x += ud.speed * speedFactor * dt;

            if (speedFactor > 0 && s.position.x - ud.width / 2 > w) {
              s.position.x = -ud.width / 2 - rand(0, ud.width);
            } else if (speedFactor < 0 && s.position.x + ud.width / 2 < 0) {
              s.position.x = w + ud.width / 2 + rand(0, ud.width);
            }

            const pulse = 1 + Math.sin(now * 0.001 + ud.seed) * 0.015;
            s.scale.x = ud.width * pulse;
            s.scale.y = ud.height * pulse;
            s.position.y = ud.baseY + Math.sin(now * 0.001 + ud.seed) * 5;
            s.material.opacity = ud.opacity;
          }
        }

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      }

      loadAll();

      // Event Listeners
      function getX(e: MouseEvent | TouchEvent) {
        return 'touches' in e
          ? e.touches[0].clientX
          : (e as MouseEvent).clientX;
      }

      const onMouseDown = (e: MouseEvent | TouchEvent) => {
        dragActive = true;
        lastX = getX(e);
      };

      const onMouseMove = (e: MouseEvent | TouchEvent) => {
        if (!dragActive) return;
        const x = getX(e);
        const dx = x - lastX;
        lastX = x;
        dragVelocity = dx * 0.02;
      };

      const onMouseUp = () => {
        dragActive = false;
      };

      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        const wheelDelta = Math.sign(e.deltaY);
        const direction = wheelDelta > 0 ? 1 : -1;
        const acceleration = 0.8;

        speedFactor = direction * (Math.abs(speedFactor) + acceleration);
        const maxSpeed = 5;
        const sign = Math.sign(speedFactor);
        const absSpeed = Math.min(maxSpeed, Math.abs(speedFactor));

        speedFactor = sign * absSpeed;
        dragVelocity = 0;
        cleanupSprites();
      };

      container.addEventListener('mousedown', onMouseDown);
      container.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      container.addEventListener('touchstart', onMouseDown, { passive: true });
      container.addEventListener('touchmove', onMouseMove, { passive: true });
      window.addEventListener('touchend', onMouseUp);
      container.addEventListener('wheel', onWheel, { passive: false });

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('touchend', onMouseUp);

        if (container) {
          container.removeEventListener('mousedown', onMouseDown);
          container.removeEventListener('mousemove', onMouseMove);
          container.removeEventListener('touchstart', onMouseDown);
          container.removeEventListener('touchmove', onMouseMove);
          container.removeEventListener('wheel', onWheel);

          if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        }

        textures.forEach((t) => t.dispose());
        for (const layer of layers) {
          for (const s of layer) {
            if (s.material.map) s.material.map.dispose();
            s.material.dispose();
            s.geometry.dispose();
          }
        }
        renderer.dispose();
        renderer.forceContextLoss();
      };
    }, [images, depthLayers, imagesPerLayer, maxImageWidth, maxImageHeight]);

    return (
      <div
        className={cn(
          'relative h-full w-full overflow-hidden bg-[#111] text-white',
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          ref={containerRef}
          className='absolute inset-0 cursor-grab select-none active:cursor-grabbing'
        />

        {showLoading && !isLoaded && (
          <div className='pointer-events-none absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2'>
            <div className='rounded-lg border border-white/10 bg-black/50 px-4 py-2 font-mono text-sm text-white shadow-xl backdrop-blur-sm'>
              Loading {loadingProgress}%
            </div>
          </div>
        )}

        {isLoaded && overlayText && (
          <div className='absolute bottom-3 left-3 z-10 rounded-lg bg-black/35 px-2 py-2 text-[13px] opacity-85 transition-opacity hover:opacity-100'>
            {overlayText}
          </div>
        )}
      </div>
    );
  }
);

InfiniteParallaxGallery.displayName = 'InfiniteParallaxGallery';

'use client';

import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import './enlarge-gallery.css';

export interface EnlargeGalleryItem {
  id: string | number;
  src: string;
  alt?: string;
  title: string;
  description?: string;
}

export interface EnlargeGalleryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items: EnlargeGalleryItem[];
}

export const EnlargeGallery = React.forwardRef<
  HTMLDivElement,
  EnlargeGalleryProps
>(({ className, items, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // The thumbnail strip as a queue of item ids, left to right; the active
  // item is excluded. Every change removes the incoming item from the queue
  // and pushes the outgoing item onto the end.
  const [thumbOrder, setThumbOrder] = useState<(string | number)[]>(() =>
    items.slice(1).map((item) => item.id)
  );

  const goToIndex = useCallback(
    (newIndex: number) => {
      setActiveIndex((oldIndex) => {
        if (oldIndex === newIndex) return oldIndex;

        setThumbOrder((order) => [
          ...order.filter((id) => id !== items[newIndex].id),
          items[oldIndex].id,
        ]);

        return newIndex;
      });
    },
    [items]
  );

  if (!items || items.length === 0) return null;

  const activeItem = items[activeIndex];
  const total = items.length;

  const indexOfId = (id: string | number) =>
    items.findIndex((i) => i.id === id);

  return (
    <div
      ref={ref}
      className={cn('enlarge-gallery-root font-sans', className)}
      {...props}
    >
      <div className="enlarge-gallery-gallery relative w-full h-full">
        {/* Slides / Track */}
        <div className="enlarge-gallery-track absolute inset-0 w-full h-full">
          {items.map((item, index) => {
            const active = index === activeIndex;
            const offset = active
              ? 0
              : thumbOrder.indexOf(item.id) - (thumbOrder.length - 1) / 2;

            return (
              <div
                key={item.id}
                className="enlarge-gallery-item"
                data-active={String(active)}
              >
                <div
                  className="enlarge-gallery-slide"
                  style={{ '--offset': offset } as React.CSSProperties}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt || item.title}
                    className="enlarge-gallery-image"
                  />
                  {!active && (
                    <button
                      type="button"
                      className="enlarge-gallery-thumbButton"
                      tabIndex={-1}
                      onClick={() => goToIndex(index)}
                    >
                      <span className="enlarge-gallery-visuallyHidden">
                        Show {item.title}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Content & Navigation */}
        <div className="enlarge-gallery-rail">
          <div className="enlarge-gallery-content" key={activeItem.id}>
            <p className="enlarge-gallery-kicker">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(total).padStart(2, '0')}
            </p>
            <h2 className="enlarge-gallery-title">{activeItem.title}</h2>
            {activeItem.description && (
              <p className="enlarge-gallery-description">
                {activeItem.description}
              </p>
            )}
          </div>

          <div className="enlarge-gallery-controls">
            <button
              type="button"
              className="enlarge-gallery-navBtn"
              onClick={() =>
                goToIndex(indexOfId(thumbOrder[thumbOrder.length - 1]))
              }
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="enlarge-gallery-visuallyHidden">Previous</span>
            </button>
            <button
              type="button"
              className="enlarge-gallery-navBtn"
              onClick={() => goToIndex(indexOfId(thumbOrder[0]))}
            >
              <ChevronRight className="w-5 h-5" />
              <span className="enlarge-gallery-visuallyHidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
EnlargeGallery.displayName = 'EnlargeGallery';

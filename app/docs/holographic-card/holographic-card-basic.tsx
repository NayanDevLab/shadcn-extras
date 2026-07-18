import {
  HolographicCard,
  GlitchText,
} from '@/components/core/holographic-card';

export function HolographicCardBasic() {
  return (
    <div className='holographic-container flex h-[600px] w-full flex-col items-center justify-center'>
      <div className='holographic-grain-overlay' />
      <GlitchText
        text='CSS FUTURE'
        className='mb-8 text-4xl text-white md:text-6xl'
      />
      <HolographicCard
        title='Holographic Interface'
        description='Pure CSS art combining glitch typography, grain textures, floating holograms and 3D depth.'
        buttonText='EXPLORE'
        buttonHref='#'
      />
    </div>
  );
}

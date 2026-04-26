'use client';

import dynamic from 'next/dynamic';

const HeroScene = dynamic(
  () => import('@/components/site/HeroScene').then((m) => m.HeroScene),
  { ssr: false },
);

type Variant = 'globe' | 'network' | 'duo';

export function HeroSceneLoader({ variant = 'duo' }: { variant?: Variant }) {
  return <HeroScene variant={variant} />;
}

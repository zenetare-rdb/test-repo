import React from 'react';
import { registerRoot, Composition } from 'remotion';
import { MotionComposition } from './Scene';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MotionComposition"
      component={MotionComposition}
      durationInFrames={1800}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

registerRoot(RemotionRoot);

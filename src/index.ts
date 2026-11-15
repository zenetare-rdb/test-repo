import { registerRoot, Composition } from 'remotion';
import { HelloMotion } from './HelloMotion';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="HelloMotion"
      component={HelloMotion}
      durationInFrames={90}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

registerRoot(RemotionRoot);

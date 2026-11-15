import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const HelloMotion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 12 } });
  const subtitleOpacity = interpolate(frame, [15, 45], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const barWidth = interpolate(frame, [0, durationInFrames], [0, 100]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0B1120',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h1
        style={{
          color: '#3B82F6',
          fontSize: 90,
          transform: `scale(${titleScale})`,
          margin: 0,
        }}
      >
        Motion Engine
      </h1>
      <p
        style={{
          color: '#10B981',
          fontSize: 36,
          opacity: subtitleOpacity,
          marginTop: 24,
        }}
      >
        تم إنشاء الفيديو بنجاح ✦ Remotion + GitHub Actions
      </p>
      <div
        style={{
          marginTop: 48,
          height: 8,
          width: `${barWidth}%`,
          backgroundColor: '#3B82F6',
          borderRadius: 4,
        }}
      />
    </AbsoluteFill>
  );
};

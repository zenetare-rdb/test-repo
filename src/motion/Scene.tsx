import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const SCENE_CONFIG = {
  "id": "scene_mwhyzq76_92ka",
  "title": "تطور وكلاء الذكاء الاصطناعي",
  "subtitle": "من نموذج لغوي بسيط إلى وكيل ذاتي التشغيل يخطط وينفّذ ويتعلّم",
  "kicker": "وثائقي تعليمي — AI Agents Evolution",
  "template": "architecture-flow",
  "visualStyle": "tech-blueprint",
  "durationInFrames": 1800,
  "fps": 30,
  "width": 1280,
  "height": 720,
  "palette": {
    "background": "#071324",
    "surface": "#0D1F38",
    "primary": "#38BDF8",
    "accent": "#F59E0B",
    "text": "#F0F9FF",
    "muted": "#7DD3FC"
  },
  "metrics": [
    {
      "label": "Test Coverage",
      "value": "99.4%",
      "delta": "+4.2%"
    },
    {
      "label": "Build Latency",
      "value": "1.8s",
      "delta": "-38%"
    },
    {
      "label": "PR Automation",
      "value": "100%",
      "delta": "MCP v1"
    }
  ],
  "captions": [],
  "audioFileName": null
} as const;

export const MotionComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
  const titleY = interpolate(titleProgress, [0, 1], [36, 0]);
  const subtitleOpacity = interpolate(frame, [12, 30], [0, 1], { extrapolateRight: 'clamp' });
  const barWidth = interpolate(frame, [20, 60], [0, 100], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#071324',
        color: '#F0F9FF',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        padding: 80,
        justifyContent: 'center',
      }}
    >
      <div style={{ color: '#F59E0B', fontSize: 18, letterSpacing: 3, fontWeight: 600 }}>
        وثائقي تعليمي — AI Agents Evolution
      </div>
      <h1
        style={{
          fontSize: 64,
          fontWeight: 700,
          marginTop: 16,
          transform: `translateY(${titleY}px)`,
          opacity: titleProgress,
        }}
      >
        تطور وكلاء الذكاء الاصطناعي
      </h1>
      <p style={{ fontSize: 28, color: '#7DD3FC', opacity: subtitleOpacity, maxWidth: 880 }}>
        من نموذج لغوي بسيط إلى وكيل ذاتي التشغيل يخطط وينفّذ ويتعلّم
      </p>
      <div style={{ marginTop: 40, width: `${barWidth}%`, height: 4, backgroundColor: '#38BDF8' }} />
    </AbsoluteFill>
  );
};

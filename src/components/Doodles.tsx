import React from 'react';

interface DoodleProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
}

/**
 * Hand-drawn wavy double underline scribble per svg-drawing skill.
 * Uses smooth cubic beziers with slight organic human asymmetry.
 */
export function DoodleUnderline({
  color = '#0078E0',
  className = 'w-full h-auto',
  ...props
}: DoodleProps) {
  return (
    <svg
      viewBox="0 0 160 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M4 14 C42 6, 88 18, 156 10"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M12 19 C52 14, 96 21, 148 16"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

/**
 * Hand-drawn curved directional arrow pointing to primary action buttons.
 */
export function DoodleArrow({
  color = '#00C4F0',
  className = 'w-16 h-12',
  ...props
}: DoodleProps) {
  return (
    <svg
      viewBox="0 0 72 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Shaft with natural arc */}
      <path
        d="M8 8 C18 36, 42 46, 62 42"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Arrowhead wings */}
      <path
        d="M48 38 L63 43 L56 28"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Hand-drawn imperfect focus loop/lasso around key metrics or badges.
 */
export function DoodleCircle({
  color = '#0078E0',
  className = 'w-full h-full',
  ...props
}: DoodleProps) {
  return (
    <svg
      viewBox="0 0 140 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M70 7 C28 7, 7 24, 7 38 C7 54, 32 65, 70 65 C108 65, 133 52, 133 38 C133 22, 106 9, 63 9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="300"
        strokeDashoffset="0"
      />
    </svg>
  );
}

/**
 * Soft 4-point organic sparkle for milestone badges.
 */
export function DoodleSparkle({
  color = '#00C4F0',
  className = 'w-5 h-5',
  ...props
}: DoodleProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M16 2 Q16 16, 2 16 Q16 16, 16 30 Q16 16, 30 16 Q16 16, 16 2 Z"
        fill={color}
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

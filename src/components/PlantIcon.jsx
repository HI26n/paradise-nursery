// PlantIcon renders a small hand-drawn-style botanical illustration used as
// the thumbnail for each plant. Keeping thumbnails as inline SVG (instead of
// external photos) means the app has no external image dependencies and
// every plant gets a distinct silhouette tied to its real growth habit.

const pots = {
  terracotta: '#C77B4A',
  stone: '#8C8375',
  clay: '#B9603F',
};

function Pot({ color = 'terracotta' }) {
  return (
    <path
      d="M34 78 L40 118 Q60 124 80 118 L86 78 Z"
      fill={pots[color]}
      stroke="#3A2A20"
      strokeWidth="2"
    />
  );
}

const leafSets = {
  rosette: (c) => (
    <g stroke="#2B3B2A" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M60 78 L60 28 L70 50 Z" fill={c[0]} />
      <path d="M60 78 L30 45 L52 58 Z" fill={c[1]} />
      <path d="M60 78 L90 45 L68 58 Z" fill={c[1]} />
      <path d="M60 78 L40 20 L58 55 Z" fill={c[2]} />
      <path d="M60 78 L80 20 L62 55 Z" fill={c[2]} />
    </g>
  ),
  spiky: (c) => (
    <g stroke="#2B3B2A" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M60 78 L52 15 L60 50 Z" fill={c[0]} />
      <path d="M60 78 L68 15 L60 50 Z" fill={c[0]} />
      <path d="M60 78 L32 30 L58 55 Z" fill={c[1]} />
      <path d="M60 78 L88 30 L62 55 Z" fill={c[1]} />
      <path d="M60 78 L38 60 L58 62 Z" fill={c[2]} />
      <path d="M60 78 L82 60 L62 62 Z" fill={c[2]} />
    </g>
  ),
  blades: (c) => (
    <g stroke="#2B3B2A" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M52 78 Q40 40 50 12 Q58 42 56 78 Z" fill={c[0]} />
      <path d="M60 78 Q60 32 60 10 Q66 34 64 78 Z" fill={c[1]} />
      <path d="M68 78 Q78 42 70 14 Q64 44 66 78 Z" fill={c[0]} />
      <path d="M44 78 Q34 50 40 26 Q46 52 48 78 Z" fill={c[2]} />
      <path d="M76 78 Q86 50 80 26 Q74 52 72 78 Z" fill={c[2]} />
    </g>
  ),
  broadleaf: (c) => (
    <g stroke="#2B3B2A" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M60 78 C40 70 28 45 44 20 C56 34 60 50 60 78 Z" fill={c[0]} />
      <path d="M60 78 C80 70 92 45 76 20 C64 34 60 50 60 78 Z" fill={c[1]} />
      <path d="M60 78 C56 55 60 34 60 18 C64 34 64 55 60 78 Z" fill={c[2]} />
    </g>
  ),
  palm: (c) => (
    <g stroke="#2B3B2A" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M60 78 Q30 60 20 30 Q46 42 60 78 Z" fill={c[0]} />
      <path d="M60 78 Q90 60 100 30 Q74 42 60 78 Z" fill={c[0]} />
      <path d="M60 78 Q38 50 34 18 Q54 36 60 78 Z" fill={c[1]} />
      <path d="M60 78 Q82 50 86 18 Q66 36 60 78 Z" fill={c[1]} />
      <path d="M60 78 Q58 40 60 12 Q64 40 60 78 Z" fill={c[2]} />
    </g>
  ),
  bloom: (c) => (
    <g stroke="#2B3B2A" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M60 78 C46 68 40 52 50 40 C56 50 58 64 60 78 Z" fill={c[0]} />
      <path d="M60 78 C74 68 80 52 70 40 C64 50 62 64 60 78 Z" fill={c[0]} />
      <circle cx="60" cy="34" r="10" fill={c[2]} stroke="#2B3B2A" strokeWidth="1.5" />
      <path d="M60 24 L64 34 L60 44 L56 34 Z" fill={c[1]} />
      <path d="M50 34 L60 30 L70 34 L60 38 Z" fill={c[1]} />
    </g>
  ),
};

export default function PlantIcon({ variant = 'rosette', colors, pot = 'terracotta', size = 120 }) {
  const c = colors || ['#5F8B5A', '#4A7248', '#3B5C3A'];
  return (
    <svg viewBox="0 0 120 130" width={size} height={size} role="img" aria-hidden="true">
      <ellipse cx="60" cy="120" rx="34" ry="6" fill="#000" opacity="0.08" />
      {leafSets[variant](c)}
      <Pot color={pot} />
      <path d="M34 78 L86 78" stroke="#3A2A20" strokeWidth="2" />
    </svg>
  );
}

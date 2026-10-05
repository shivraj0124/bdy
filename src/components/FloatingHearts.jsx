import { useMemo } from 'react'
export default function FloatingHearts({ count = 16 }) {
  const hearts = useMemo(() => Array.from({ length: count }, (_, i) => ({
    id: i, left: Math.random() * 100, size: 12 + Math.random() * 22,
    dur: 10 + Math.random() * 12, delay: Math.random() * 12, ch: Math.random() > 0.3 ? '❤' : '♡',
  })), [count])
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {hearts.map(h => (
        <span key={h.id} className="heart-float absolute bottom-[-40px] text-rose-400/70"
          style={{ left: `${h.left}%`, fontSize: h.size, animation: `floatUp ${h.dur}s linear ${h.delay}s infinite` }}>{h.ch}</span>
      ))}
    </div>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'
import { burst } from '../confetti'
import Section from './Section'
export default function Cake() {
  const n = config.candles
  const [lit, setLit] = useState(Array(n).fill(false))
  const [blown, setBlown] = useState(false)
  const allLit = lit.every(Boolean)
  const light = i => !blown && setLit(l => l.map((v, j) => (j === i ? true : v)))
  const blow = () => { setLit(Array(n).fill(false)); setBlown(true); burst() }
  const reset = () => { setLit(Array(n).fill(false)); setBlown(false) }
  const xs = Array.from({ length: n }, (_, i) => 90 + (i * 120) / Math.max(n - 1, 1))
  return (
    <Section id="cake" title="Make a wish">
      <svg viewBox="0 0 300 260" className="w-full max-w-sm" role="img" aria-label="Birthday cake">
        <ellipse cx="150" cy="238" rx="130" ry="14" fill="#350919" />
        <rect x="40" y="170" width="220" height="62" rx="14" fill="#D4607A" />
        <path d="M40 184 q18 18 36 0 t36 0 t36 0 t36 0 t36 0 t36 0 v-14 h-220z" fill="#FFE4EA" />
        <rect x="75" y="108" width="150" height="62" rx="12" fill="#E8869A" />
        <path d="M75 122 q15 16 30 0 t30 0 t30 0 t30 0 t30 0 v-14 h-150z" fill="#FFE4EA" />
        {xs.map((x, i) => (
          <g key={i} onClick={() => light(i)} className="cursor-pointer" role="button" aria-label={`Light candle ${i + 1}`}>
            <rect x={x - 5} y="72" width="10" height="36" rx="3" fill="#EBCFA6" />
            <rect x={x - 14} y="50" width="28" height="60" fill="transparent" />
            {lit[i] && <g className="flame"><ellipse cx={x} cy="62" rx="6" ry="11" fill="#FFB347" /><ellipse cx={x} cy="64" rx="3" ry="6" fill="#FFF3C4" /></g>}
          </g>
        ))}
      </svg>
      <div className="mt-8 min-h-[7rem] text-center">
        {blown ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="font-display text-3xl italic text-champagne">{config.cakeWish}</p>
            <button onClick={reset} className="mt-4 text-sm text-rose-300 underline underline-offset-4">Light them again</button>
          </motion.div>
        ) : allLit ? (
          <button onClick={blow} className="glass rounded-full px-8 py-3 font-semibold text-blush transition hover:bg-rose-400/20">Blow out the candles</button>
        ) : (
          <p className="text-rose-300">Tap each candle to light it ({lit.filter(Boolean).length}/{n})</p>
        )}
      </div>
    </Section>
  )
}

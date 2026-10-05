import { motion } from 'framer-motion'
import { config } from '../config'
export default function Hero() {
  const letters = `Happy Birthday, ${config.name}`.split('')
  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-5xl font-semibold leading-tight text-blush sm:text-7xl md:text-8xl" aria-label={letters.join('')}>
        {letters.map((c, i) => (
          <motion.span key={i} aria-hidden initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.4 + i * 0.05, duration: 0.7 }}
            className="inline-block">{c === ' ' ? '\u00A0' : c}</motion.span>
        ))}
      </h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="mt-6 max-w-md font-display text-xl italic text-rose-300 sm:text-2xl">{config.tagline}</motion.p>
      <motion.a href="#memories" initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2.4, y: { repeat: Infinity, duration: 2 } }} className="absolute bottom-10 text-rose-300">Scroll down ↓</motion.a>
    </section>
  )
}

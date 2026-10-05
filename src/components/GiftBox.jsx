import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { config } from '../config'
import { burst } from '../confetti'
import Section from './Section'
export default function GiftBox() {
  const [open, setOpen] = useState(false)
  const toggle = () => { if (!open) { setOpen(true); burst() } }
  return (
    <Section id="gift" title={config.giftTitle}>
      <button onClick={toggle} aria-label="Open the gift box" className="relative h-56 w-56 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 rounded-xl">
        <motion.div animate={open ? { y: -70, rotate: -14, x: -30 } : { rotate: [0, -2, 2, 0] }}
          transition={open ? { type: 'spring' } : { repeat: Infinity, duration: 2.5 }}
          className="absolute left-[-8px] top-4 z-10 h-14 w-[15rem] rounded-lg bg-rose-400 shadow-lg">
          <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 bg-champagne" />
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">🎀</div>
        </motion.div>
        <div className="absolute bottom-0 left-0 h-40 w-56 rounded-b-xl bg-rose-500 shadow-xl">
          <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 bg-champagne/90" />
        </div>
      </button>
      <div className="mt-10 min-h-[8rem] max-w-md text-center">
        <AnimatePresence>
          {open ? (
            <motion.p initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              className="glass rounded-2xl p-6 font-display text-2xl text-blush">{config.giftMessage}</motion.p>
          ) : <p className="text-rose-300">Tap the box</p>}
        </AnimatePresence>
      </div>
    </Section>
  )
}

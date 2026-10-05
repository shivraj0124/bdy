import { motion } from 'framer-motion'
import { config } from '../config'
export default function Intro({ onOpen }) {
  return (
    <motion.div exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-wine-950 px-6 text-center">
      <motion.div animate={{ scale: [1, 1.12, 1] }} transition={{ repeat: Infinity, duration: 1.4 }} className="text-7xl text-rose-400">❤</motion.div>
      <p className="font-display text-3xl italic text-blush/90">For {config.name}</p>
      <button onClick={onOpen} className="glass rounded-full px-8 py-3 text-sm font-semibold tracking-wide text-blush transition hover:bg-rose-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300">
        Open your surprise
      </button>
    </motion.div>
  )
}

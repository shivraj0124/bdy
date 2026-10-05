import { motion } from 'framer-motion'
import { config } from '../config'
import Section from './Section'
export default function Memories() {
  return (
    <Section id="memories" title="Our little memories">
      <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
        {config.photos.map((p, i) => (
          <motion.figure key={i} initial={{ opacity: 0, y: 40, rotate: i % 2 ? 3 : -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }} viewport={{ once: true, margin: '-60px' }}
            whileHover={{ rotate: 0, scale: 1.04 }} transition={{ type: 'spring', stiffness: 120, delay: i * 0.1 }}
            className="glass overflow-hidden rounded-2xl p-2">
            <img src={p.src} alt={p.caption} loading="lazy" className="aspect-[3/4] w-full rounded-xl object-cover" />
            <figcaption className="px-1 pb-1 pt-2 text-center font-display text-lg italic text-blush/90">{p.caption}</figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import { config } from '../config'
import Section from './Section'
export default function Message() {
  return (
    <Section id="message" title={config.messageTitle}>
      <div className="glass max-w-2xl rounded-3xl p-7 sm:p-12">
        {config.message.map((t, i) => (
          <motion.p key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.25, duration: 1 }}
            className="mb-5 font-display text-xl leading-relaxed text-blush/95 sm:text-2xl">{t}</motion.p>
        ))}
        <p className="mt-8 text-right font-display text-2xl italic text-champagne">{config.signature}, {config.from} ❤</p>
      </div>
    </Section>
  )
}

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="relative z-10 mx-auto flex min-h-[90svh] max-w-5xl flex-col items-center justify-center px-5 py-20">
      <h2 className="mb-10 text-center font-display text-4xl font-semibold text-blush sm:text-5xl">{title}</h2>
      {children}
    </section>
  )
}

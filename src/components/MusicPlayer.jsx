export default function MusicPlayer({ playing, onToggle }) {
  return (
    <button onClick={onToggle} aria-label={playing ? 'Pause music' : 'Play music'}
      className="glass fixed right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full text-lg text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
      style={{ marginTop: 'env(safe-area-inset-top, 0px)' }}>{playing ? '♪' : '✕'}</button>
  )
}

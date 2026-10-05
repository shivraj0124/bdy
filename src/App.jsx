import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { config } from "./config";
import { burst } from "./confetti";
import FloatingHearts from "./components/FloatingHearts";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Memories from "./components/Memories";
import Message from "./components/Message";
import GiftBox from "./components/GiftBox";
import Cake from "./components/Cake";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audio = useRef(null);
  const start = () => {
    setStarted(true);
    setTimeout(burst, 500);
    audio.current
      ?.play()
      .then(() => setPlaying(true))
      .catch(() => {});
  };
  const toggle = () => {
    if (!audio.current) return;
    if (playing) {
      audio.current.pause();
      setPlaying(false);
    } else
      audio.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
  };
  return (
    <>
      <audio ref={audio} src={config.music} loop preload="auto" />
      <FloatingHearts />
      <AnimatePresence>{!started && <Intro onOpen={start} />}</AnimatePresence>
      {started && (
        <main>
          <MusicPlayer playing={playing} onToggle={toggle} />
          <Hero />
          <Memories />
          <Message />
          {/* <GiftBox /> */}
          <Cake />
          <footer className="relative z-10 pb-16 pt-4 text-center font-display text-xl italic text-rose-300">
            Love You Tanvi ❤
          </footer>
        </main>
      )}
    </>
  );
}

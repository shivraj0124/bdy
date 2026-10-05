import confetti from 'canvas-confetti'
const colors = ['#F4A6B7', '#E8869A', '#EBCFA6', '#FFE4EA', '#D4607A']
export const burst = () => {
  confetti({ particleCount: 120, spread: 80, origin: { y: 0.65 }, colors })
  setTimeout(() => confetti({ particleCount: 70, angle: 60, spread: 60, origin: { x: 0 }, colors }), 200)
  setTimeout(() => confetti({ particleCount: 70, angle: 120, spread: 60, origin: { x: 1 }, colors }), 350)
}

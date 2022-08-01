export default function animate({ userNeedle, pcNeedle, ball }) {
  requestAnimationFrame(() => {
    animate({ userNeedle, pcNeedle, ball })
  })
  userNeedle.update()
  pcNeedle.update()
  ball.update()
}

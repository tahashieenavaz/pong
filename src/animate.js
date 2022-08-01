export default function animate(ctx, { userNeedle, pcNeedle, ball }) {
  ctx.clearRect(0, 0, innerWidth, innerHeight)

  requestAnimationFrame(() => {
    animate(ctx, { userNeedle, pcNeedle, ball })
  })

  userNeedle.update()
  pcNeedle.update()
  ball.update()
}

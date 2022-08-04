export default function animate(ctx, { userNeedle, pcNeedle, ball }) {
  ctx.clearRect(0, 0, innerWidth, innerHeight)

  requestAnimationFrame(() => {
    animate(ctx, { userNeedle, pcNeedle, ball })
  })

  userNeedle.update()
  pcNeedle.update()

  pcNeedle.y = ball.y

  if (pcNeedle.y > innerHeight - pcNeedle.height) {
    pcNeedle.y = innerHeight - pcNeedle.height
  }

  ball.update()

  if (
    ball.isCollidingSide('left') &&
    !userNeedle.isInRange(ball.y - ball.radius, ball.y + ball.radius)
  ) {
    userNeedle.lost()
  } else if (
    ball.isCollidingSide('right') &&
    !pcNeedle.isInRange(ball.y - ball.radius, ball.y + ball.radius)
  ) {
    pcNeedle.lost()
  }

  if (pcNeedle.isInRange(ball.y - ball.radius, ball.y + ball.radius)) {
    console.log('Something')
  }

  // Checking for the winner
}

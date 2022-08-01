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
  }

  if (
    ball.isCollidingSide('right') &&
    !pcNeedle.isInRange(ball.y - ball.radius, ball.y + ball.radius)
  ) {
    pcNeedle.lost()
  }

  // Checking for the winner

  if (pcNeedle.calculateHeight() <= 0) {
    alert('The user has won')
  }

  if (userNeedle.calculateHeight() <= 0) {
    alert('The pc has won')
  }
}

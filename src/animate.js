import Canvas from '@/classes/Canvas'
import { rand } from '@/functions'

export default function animate(
  ctx,
  { userNeedle, pcNeedle, ball, userScore, pcScore, canvas }
) {
  ctx.clearRect(0, 0, innerWidth, innerHeight)

  requestAnimationFrame(() => {
    animate(ctx, { userScore, pcScore, userNeedle, pcNeedle, ball, canvas })
  })

  userNeedle.update()
  pcNeedle.update()

  // Artificial Intelligence !!!
  pcNeedle.y = (ball.y - pcNeedle.calculateHeight() / 2) * Canvas.errorCoef

  if (pcNeedle.y > innerHeight - pcNeedle.calculateHeight()) {
    pcNeedle.y = innerHeight - pcNeedle.calculateHeight()
  }

  ball.update()

  if (ball.isCollidingSide('left') && !userNeedle.isTouchingBall(ball)) {
    userNeedle.lost()
    pcScore.inc()
  } else if (ball.isCollidingSide('right') && !pcNeedle.isTouchingBall(ball)) {
    pcNeedle.lost()
    userScore.inc()
  }

  userScore.update()
  pcScore.update()

  if (Canvas.counter++ % 777 === 213) {
    Canvas.errorCoef = (Math.random() * 15 + 80) / 100
  }
}

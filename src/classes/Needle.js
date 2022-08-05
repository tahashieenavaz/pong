import Animatable from '@/classes/Animatable'
import Settings from '@/settings'
import { listen, after } from '@/functions'

export default class Needle extends Animatable {
  constructor(ctx, side = 'right', syncWithMouse = false) {
    super(ctx)
    this.score = 0
    this.width = Settings.needleWidth
    this.height = 200
    this.color = 'white'
    this.side = side
    this.y = innerHeight / 2
    if (syncWithMouse) listen('canvas', 'mousemove', this.mouseMoveHandler)
  }

  calculateHeight() {
    return this.height + this.score
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color
    let x = Settings.padding

    if (this.side == 'right') {
      x = innerWidth - Settings.padding - Settings.needleWidth
    }

    this.ctx.fillRect(x, this.y, this.width, this.calculateHeight())
    this.ctx.closePath()
  }

  update() {
    if (this.y < 0) {
      this.y = 0
    }

    if (this.y > innerHeight - this.calculateHeight()) {
      this.y = innerHeight - this.calculateHeight()
    }

    this.draw()
  }

  isInRange(topY, bottomY) {
    return topY > this.y && bottomY < this.y + this.calculateHeight()
  }

  isTouchingBall(ball) {
    const ballBottomPoint = ball.y + ball.radius
    const ballTopPoint = ball.y - ball.radius

    const firstCondition =
      ballBottomPoint > this.y &&
      ballBottomPoint < this.y + this.calculateHeight()
    const secondCondition =
      ballTopPoint < this.y + this.calculateHeight() && ballTopPoint > this.y

    return firstCondition || secondCondition
  }

  lost() {
    this.score = this.score - Settings.needleSizeDecreaseForALoss
    this.color = 'rgba(135, 0, 0, .8)'

    after(2000, () => {
      this.color = 'white'
    })
  }

  mouseMoveHandler = (e) => {
    this.y = e.y - this.calculateHeight() / 2
  }
}

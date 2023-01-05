import Animatable from '@/classes/Animatable'

export default class BackgroundPiece extends Animatable {
  constructor(ctx, x, color) {
    super(ctx)
    this.color = color
    this.x = x
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, 0, 1, innerHeight)
    this.ctx.closePath()
  }
}

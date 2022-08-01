import Animatable from '@/classes/Animatable'

export default class Needle extends Animatable {
  constructor(ctx) {
    super(ctx)
    this.width = 20
    this.color = 'white'
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(20, 20, 20, 20)
    this.ctx.closePath()
  }

  update() {
    this.draw()
  }
}

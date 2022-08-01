import Animatable from '@/classes/Animatable'
import Settings from '@/settings'

export default class Ball extends Animatable {
  constructor(ctx) {
    super(ctx)
    this.radius = 10
    this.x = innerWidth / 2
    this.y = innerHeight / 2

    this.direction = new Direction()
  }

  draw() {
    const { PI } = Math
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, PI * 2, false)
    this.ctx.fillStyle = 'rgba(255,255,255, .8)'
    this.ctx.fill()
    this.ctx.beginPath()
  }

  update() {
    this.draw()
  }
}

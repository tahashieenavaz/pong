import Animatable from '@/classes/Animatable'
import Direction from '@/classes/Direction'
import Settings from '@/settings'
import { randomElement } from '@/functions'

export default class Ball extends Animatable {
  constructor(ctx) {
    super(ctx)
    this.radius = 10
    this.x = innerWidth / 2
    this.y = innerHeight / 2
    this.speed = 10

    const availableDirections = [-1, 1]

    this.direction = new Direction(
      randomElement(availableDirections),
      randomElement(availableDirections)
    )
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
    if (this.x < this.radius + Settings.padding + Settings.needleWidth) {
      this.direction.x *= -1
    }

    if (this.y < this.radius) {
      this.direction.y *= -1
    }

    if (this.y > innerHeight) {
      this.direction.y *= -1
    }

    if (
      this.x >
      innerWidth - this.radius - Settings.padding - Settings.needleWidth
    ) {
      this.direction.x *= -1
    }

    this.x += this.direction.x * this.speed
    this.y += this.direction.y * this.speed
  }
}

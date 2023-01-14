import Animatable from '@/classes/Animatable'
import Direction from '@/classes/Direction'
import Settings from '@/settings'

import { oneOf } from '@/functions'

export default class Ball extends Animatable {
  constructor(ctx) {
    super(ctx)
    this.radius = 10
    this.x = innerWidth / 2
    this.y = innerHeight / 2
    this.speed = 10

    const availableDirections = [-1, 1]

    this.direction = new Direction(
      oneOf(availableDirections),
      oneOf(availableDirections)
    )
  }

  draw() {
    const { PI } = Math
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, PI * 2, false)
    this.ctx.fillStyle = 'rgba(255,255,255, .7)'
    this.ctx.fill()
    this.ctx.closePath()
  }

  update() {
    this.draw()

    if (this.y < this.radius) {
      this.direction.reverse('y')
    }

    if (this.y > innerHeight) {
      this.direction.reverse('y')
    }

    if (this.isCollidingSide('right') || this.isCollidingSide('left')) {
      this.direction.reverse('x')
    }

    this.x += this.direction.x * this.speed
    this.y += this.direction.y * this.speed
  }

  isCollidingSide(sideName = 'left') {
    if (sideName === 'right') {
      return this.isCollidingRight()
    }

    if (sideName === 'left') {
      return this.isCollidingLeft()
    }

    return false
  }

  isCollidingLeft() {
    return this.x < this.radius + Settings.padding + Settings.needleWidth
  }

  isCollidingRight() {
    return (
      this.x >
      innerWidth - this.radius - Settings.padding - Settings.needleWidth
    )
  }
}

import Animatable from '@/classes/Animatable'
import Settings from '@/settings'

export default class Score extends Animatable {
  constructor(ctx, defaultValue = 0, location = 'left') {
    super(ctx)
    this.value = defaultValue
    if (location === 'left') this.location = Settings.scoreLocation
    else if (location === 'right')
      this.location = innerWidth - Settings.scoreLocation - 10
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.font = '40px Arial'
    this.ctx.fillStyle = 'rgba(255,255,255, .3)'
    this.ctx.fillText(this.value, this.location, 60)
    this.ctx.closePath()
  }

  update() {
    this.draw()
  }

  increment() {
    this.value++
  }

  decrement() {
    this.value--
  }

  inc() {
    this.increment()
  }

  dec() {
    this.decrement()
  }
}

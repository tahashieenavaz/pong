import { path } from '@/functions'
import Animatable from '@/classes/Animatable'

export default class Ball extends Animatable {
  constructor(ctx) {
    super(ctx)
  }

  draw() {
    path(
      this.ctx,
      (c) => {
        const { PI } = Math
        c.arc(20, 20, 10, 0, 2 * PI, false)
      },
      { fill: 'red' }
    )
  }

  update() {
    this.draw()
  }
}

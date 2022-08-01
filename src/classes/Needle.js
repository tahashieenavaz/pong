import Animatable from '@/classes/Animatable'
import Settings from '@/settings'
import { listen } from '@/functions'

export default class Needle extends Animatable {
  constructor(ctx, side = 'right', syncWithMouse = false) {
    super(ctx)
    this.width = 10
    this.height = 200
    this.color = 'white'
    this.side = side
    this.y = innerHeight / 2
    if (syncWithMouse) listen('canvas', 'mousemove', this.mouseMoveHandler)
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color
    let x = Settings.padding
    if (this.side == 'right') {
      x = innerWidth - Settings.padding
    }
    this.ctx.fillRect(x, this.y, this.width, this.height)
    this.ctx.closePath()
  }

  update() {
    this.draw()
  }

  mouseMoveHandler = (e) => {
    this.y = e.y
  }
}

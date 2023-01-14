import { after, color, repeat } from '@/functions'

export default class Canvas {
  static counter = 0

  constructor() {
    this.canvas = document.createElement('canvas')
    this.setSize()

    repeat(10_000, () => {
      document.body.animate(
        {
          background: [color()]
        },
        { duration: 300, fill: 'forwards' }
      )
    })
  }

  setSize() {
    this.canvas.width = innerWidth
    this.canvas.height = innerHeight
  }

  context() {
    return this.canvas.getContext('2d')
  }

  element() {
    return this.canvas
  }
}

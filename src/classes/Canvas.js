export default class Canvas {
  constructor() {
    this.canvas = document.createElement('canvas')

    this.setSize()
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

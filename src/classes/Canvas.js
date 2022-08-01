export default class Canvas {
  element() {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = innerWidth
    canvas.height = innerHeight

    return canvas
  }
}

import '@/classes/BackgroundPiece'
import { after, color, repeat } from '@/functions'
import BackgroundPiece from './BackgroundPiece'

export default class Canvas {
  constructor() {
    this.canvas = document.createElement('canvas')
    this.background = []

    for (let i = 0; i < innerWidth; i++) {
      this.background.push(
        new BackgroundPiece(this.context(), i, 'rgba(34,34,34,.7)')
      )
    }

    repeat(10_000, () => {
      this.changeBackground(color())
    })

    this.setSize()
  }

  changeBackground(color = 'blue') {
    for (let i = this.background.length / 2; i >= 0; i--) {
      after(500 + (this.background.length - i), () => {
        this.background[i].color = color
        this.background[this.background.length - i].color = color
      })
    }
  }

  paintBackground() {
    this.background.forEach((piece) => {
      piece.draw()
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

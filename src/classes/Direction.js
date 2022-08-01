export default class Direction {
  constructor(xFactor, yFactor) {
    this.x = xFactor
    this.y = yFactor
  }

  reverseX() {
    this.x *= -1
  }

  reverseY() {
    this.y *= -1
  }

  reverse(directionToChange) {
    if (directionToChange === 'x') this.reverseX()
    else if (directionToChange === 'y') this.reverseY()
  }
}

export function path(ctx, callback, options) {
  ctx.beginPath()
  callback(ctx)
  if (options.hasOwnProperty('fill')) {
    ctx.fillStyle = options['fill']
    ctx.fill()
  }
  if (options.hasOwnProperty('stroke')) {
    ctx.strokeStyle = options['stroke']
    ctx.stroke()
  }
  ctx.closePath()
}

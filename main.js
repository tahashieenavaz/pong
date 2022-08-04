// Stylesheets
import './style.css'

// Classes
import Canvas from '@/classes/Canvas'
import Needle from '@/classes/Needle'
import Ball from '@/classes/Ball'

// Functions
import animate from '@/animate'

/**
 * Generating a canvas element via Javascript
 */
const canvas = new Canvas()
const element = canvas.element()
const ctx = canvas.context()

// Adding canvas element to the body
document.body.appendChild(element)

// Creating instances we need to keep game running
const userNeedle = new Needle(ctx, 'left', true)
const pcNeedle = new Needle(ctx)
const ball = new Ball(ctx)

animate(ctx, { ball, userNeedle, pcNeedle })

addEventListener('resize', () => {
  canvas.setSize()
})

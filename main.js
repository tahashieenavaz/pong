// Stylesheets
import './style.css'

// Classes
import Canvas from '@/classes/Canvas'
import Needle from '@/classes/Needle'
import Ball from '@/classes/Ball'
import Score from '@/classes/Score'

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
const userScore = new Score(ctx, 0)
const pcScore = new Score(ctx, 0, 'right')

animate(ctx, { ball, userNeedle, pcNeedle, userScore, pcScore })

addEventListener('resize', () => {
  canvas.setSize()
})

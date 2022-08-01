import './style.css'

import Canvas from '@/classes/Canvas'
import Needle from '@/classes/Needle'
import Ball from '@/classes/Ball'
import animate from '@/animate'

const canvas = new Canvas()
const element = canvas.element()
const ctx = element.getContext('2d')
document.body.appendChild(element)

const userNeedle = new Needle(ctx, 'left', true)
const pcNeedle = new Needle(ctx)
const ball = new Ball(ctx)

animate(ctx, { ball, userNeedle, pcNeedle })

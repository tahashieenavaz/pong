import './style.css'

import Canvas from '@/classes/Canvas'
import Needle from '@/classes/Needle'
import Ball from '@/classes/Ball'
import animate from '@/animate'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const listen = (s, e, c) => $(s).addEventListener(e, c)
const forget = (s, e, c) => $(s).removeEventListener(e, c)

const canvas = new Canvas()
const element = canvas.element()
const ctx = element.getContext('2d')
document.body.appendChild(element)

const userNeedle = new Needle(ctx)
const pcNeedle = new Needle(ctx)
const ball = new Ball(ctx)

animate({ ball, userNeedle, pcNeedle })

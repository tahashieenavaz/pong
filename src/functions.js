const { random } = Math

/**
 * Easier event listener adding to the page
 */
export const listen = (s, e, c) => $(s).addEventListener(e, c)
export const forget = (s, e, c) => $(s).removeEventListener(e, c)
export const sleep = (delay = 1000) =>
  new Promise((res) => setTimeout(res, delay))
export const color = () => `hsla(${~~(Math.random() * 360)}, 100%, 30%, 1)`

/**
 * Easier DOM manipulation
 */
export const $ = document.querySelector.bind(document)
export const $$ = document.querySelectorAll.bind(document)

/**
 * Given we have an array of elements and want to pick a random element. This function helps up
 */
export const randomElement = (targetArray) =>
  targetArray[~~(random() * targetArray.length)]

/**
 * Refactoring setTimeout function to a more readable function
 */
export const after = (t, c) => setTimeout(c, t)
export const repeat = (t, c) => setInterval(c, t)

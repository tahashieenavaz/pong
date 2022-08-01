const { random } = Math

export const listen = (s, e, c) => $(s).addEventListener(e, c)
export const forget = (s, e, c) => $(s).removeEventListener(e, c)

export const $ = document.querySelector.bind(document)
export const $$ = document.querySelectorAll.bind(document)

export const randomElement = (targetArray) =>
  targetArray[~~(random() * targetArray.length)]

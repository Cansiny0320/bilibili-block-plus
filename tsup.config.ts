import { defineConfig } from 'tsup'

const banner = `
// ==UserScript==
// @name         b 站黑名单加强
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       Cansiny0320
// @match        https://www.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==
`

const windowVars = `
window.blockList = [];
`

export default defineConfig(options => {
  return {
    entry: ['src/index.ts'],
    clean: true,
    target: 'es6',
    format: 'iife',
    minify: !options.watch,
    banner: {
      js: banner + windowVars,
    },
  }
})

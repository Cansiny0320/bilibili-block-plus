import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'tsup'

const meta = fs.readFileSync(path.resolve(__dirname, './index.meta.js'), 'utf-8')

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
      js: meta + windowVars,
    },
  }
})

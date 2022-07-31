import { defineConfig } from 'tsup'
import { meta } from './meta'

const windowVars = `
window.blockList = [];
`

export default defineConfig(options => {
  return {
    entry: ['src/index.ts'],
    clean: true,
    target: 'es6',
    format: 'iife',
    minify: true,
    replaceNodeEnv: true,
    banner: {
      js: `\n${meta}${windowVars}`,
    },
  }
})

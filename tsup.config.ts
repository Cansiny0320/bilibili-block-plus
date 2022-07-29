import { defineConfig } from 'tsup'
import { meta } from './genMeta'

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
      js: `\n${meta}${windowVars}`,
    },
  }
})

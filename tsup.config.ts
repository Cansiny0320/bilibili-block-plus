import { defineConfig } from 'tsup'
import { meta } from './config/meta'
export default defineConfig(options => {
  return {
    entry: ['src/index.ts'],
    clean: true,
    target: 'es6',
    format: 'iife',
    minify: !options.watch,
    replaceNodeEnv: true,
    banner: {
      js: `\n${meta}`,
    },
  }
})

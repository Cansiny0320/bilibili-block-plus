import { defineConfig } from 'tsup'
import { meta } from './config/meta'
export default defineConfig(() => {
  return {
    entry: ['src/index.ts'],
    clean: true,
    target: 'es6',
    format: 'iife',
    minify: false,
    replaceNodeEnv: true,
    banner: {
      js: `\n${meta}`,
    },
  }
})

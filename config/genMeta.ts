import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { meta } from './meta'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

fs.writeFileSync(path.resolve(dirname, './dist/index.meta.js'), meta)

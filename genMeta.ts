import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { readPackageJSON } from 'pkg-types'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const pkg = await readPackageJSON(path.resolve(dirname, './package.json'))

export const meta = `// ==UserScript==
// @name         b 站黑名单加强
// @description  b 站黑名单加强
// @version      ${pkg.version}
// @namespace    ${pkg.homepage}
// @author       ${pkg.author}
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @match        https://www.bilibili.com/*
// @supportURL   ${pkg.bugs}
// @updateURL    https://github.com/Cansiny0320/bilibili-block-plus/raw/master/dist/index.meta.js
// @downloadURL  https://github.com/Cansiny0320/bilibili-block-plus/raw/master/dist/index.user.js
// @run-at       document-start
// @license      ${pkg.license} License
// @grant        none
// ==/UserScript==
`

fs.writeFileSync(path.resolve(dirname, './dist/index.meta.js'), meta)

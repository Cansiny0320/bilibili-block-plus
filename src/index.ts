import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { App, storageKey } from './views/App'
import { blockDashBoradPage } from './blockDashBoradPage'
import { blockHot } from './blockHot'
import { blockVideoPage } from './blockVideoPage'

const executerMap: Record<string, ((blockList: string[]) => void)[]> = {
  popular: [blockHot],
  video: [blockVideoPage],
  '/': [blockDashBoradPage],
}

const main = async () => {
  const blockList = ((await GM.getValue<string>(storageKey)) ?? '').split('\n')
  const path = window.location.pathname
  Object.keys(executerMap).some(key => {
    if (path.includes(key)) {
      const executers = executerMap[key]
      executers.forEach(execute => execute(blockList))
      const id = 'bilibili-block-plus'
      const container = document.createElement('div')
      const style = document.createElement('style')
      style.innerHTML = `
      #${id} {
        position: fixed; 
        top: 50vh; 
        left: -20px; 
        z-index: 99999;
        transition: all 0.5s ease-in-out;
      }

      #${id}:hover {
        left: 0px;
      }
      `
      container.id = id
      document.body.append(container)
      document.body.append(style)
      const root = createRoot(container!)
      root.render(createElement(App))
      return true
    }
    return false
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main)
} else {
  main()
}

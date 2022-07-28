import { blockHot } from './blockHot'

const blockList = window.blockList

const executerMap: Record<string, ((blockList: string[]) => void)[]> = {
  popular: [blockHot],
}

const main = () => {
  const path = window.location.pathname
  Object.keys(executerMap).some(key => {
    if (path.includes(path)) {
      const executers = executerMap[key]
      executers.forEach(execute => execute(blockList))
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

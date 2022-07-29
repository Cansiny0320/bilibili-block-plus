import { blockHot } from './blockHot'
import { blockVideoPage } from './blockVideoPage'

const blockList = window.blockList

const executerMap: Record<string, ((blockList: string[]) => void)[]> = {
  popular: [blockHot],
  video: [blockVideoPage],
}
const main = () => {
  const path = window.location.pathname
  Object.keys(executerMap).some(key => {
    if (path.includes(key)) {
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

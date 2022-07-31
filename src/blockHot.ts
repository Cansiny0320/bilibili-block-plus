import { obseverDomChange, requestAnimationFrameWrapper, shouldBlock } from './utils'

const block = (blockList: string[]) => {
  let success = false

  let upNameElements = Array.from(document.querySelectorAll('.up-name__text')) as HTMLDivElement[]
  if (!upNameElements.length) {
    upNameElements = Array.from(document.querySelectorAll('.detail a')) as HTMLDivElement[]
  }
  if (upNameElements.length) {
    success = true
  }
  upNameElements
    .filter(el => el.textContent && shouldBlock(blockList, el.innerText))
    .map(el => el.parentElement?.parentElement?.parentElement?.parentElement)
    .forEach(el => el?.remove())
  return success
}

export const blockHot = (blockList: string[]) => {
  requestAnimationFrameWrapper(() => block(blockList))
  obseverDomChange({
    selector: '.nav-tabs',
    onChange: () => block(blockList),
  })
  obseverDomChange({
    selector: '.popular-video-container',
    onChange: () => block(blockList),
  })
}

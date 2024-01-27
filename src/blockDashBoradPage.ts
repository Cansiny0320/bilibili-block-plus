import { obseverDomChange, requestAnimationFrameWrapper, shouldBlock } from './utils'

const blockRecommend = (blockList: string[]) => {
  let success = false
  const cardBoxElements = Array.from(
    document.querySelectorAll('.bili-video-card.is-rcmd'),
  ) as HTMLDivElement[]
  if (cardBoxElements.length > 0) {
    success = true
  }
  cardBoxElements.forEach(el => {
    const name = el.querySelector('.bili-video-card__info--author')?.textContent
    if (name && shouldBlock(blockList, name)) {
      el.remove()
    }
  })
  return success
}

export const blockDashBoradPage = (blockList: string[]) => {
  requestAnimationFrameWrapper(() => blockRecommend(blockList))
  obseverDomChange({
    selector: '.recommended-container_floor-aside .container',
    onChange: () => blockRecommend(blockList),
  })
}

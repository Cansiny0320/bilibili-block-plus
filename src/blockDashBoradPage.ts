import { obseverDomChange, requestAnimationFrameWrapper } from './utils'

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
    if (name && blockList.includes(name)) {
      el.remove()
    }
  })
  return success
}

export const blockDashBoradPage = (blockList: string[]) => {
  requestAnimationFrameWrapper(() => blockRecommend(blockList))
  obseverDomChange({
    selector: '.recommend-container__2-line',
    onChange: () => blockRecommend(blockList),
  })
}

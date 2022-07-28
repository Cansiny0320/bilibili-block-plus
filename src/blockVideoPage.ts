import { obseverDomChange, requestAnimationFrameWrapper } from './utils'

const blockReply = (blockList: string[]) => {
  let success = false
  const replyItemUserNameElements = Array.from(
    document.querySelectorAll('.reply-list .reply-item .user-name'),
  ) as HTMLDivElement[]
  if (replyItemUserNameElements.length > 0) {
    success = true
  }
  replyItemUserNameElements.forEach(el => {
    if (el.textContent && blockList.includes(el.textContent)) {
      el.parentElement?.parentElement?.parentElement?.remove()
    }
  })

  const subReplyItemsNameElemants = Array.from(
    document.querySelectorAll('.sub-reply-item .sub-user-name'),
  ) as HTMLDivElement[]

  subReplyItemsNameElemants.forEach(el => {
    if (el.textContent && blockList.includes(el.textContent)) {
      el.parentElement?.parentElement?.remove()
    }
  })
  return success
}

export const blockVideoPage = (blockList: string[]) => {
  requestAnimationFrameWrapper(() => blockReply(blockList))
  obseverDomChange({
    selector: '.reply-list',
    onChange: () => blockReply(blockList),
  })
}

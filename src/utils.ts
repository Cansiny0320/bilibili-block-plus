export const requestAnimationFrameWrapper = (callback: Function) => {
  requestAnimationFrame(() => {
    if (!callback()) {
      requestAnimationFrame(() => requestAnimationFrameWrapper(callback))
    }
  })
}

export const obseverDomChange = ({
  selector,
  onChange,
}: {
  selector: string
  onChange?: () => void
}) => {
  requestAnimationFrameWrapper(() => {
    let success = false
    const target = document.querySelector(selector) as Node
    if (!target) {
      return success
    }
    success = true
    const config = { attributes: true, childList: true, subtree: true }
    const callback: MutationCallback = function () {
      onChange?.()
    }
    const observer = new MutationObserver(callback)
    observer.observe(target, config)
    return success
  })
}

export const shouldBlock = (blockList: (string | RegExp)[], name: string) => {
  return blockList.some(block => {
    const isRegExp = block instanceof RegExp
    return isRegExp ? block.test(name) : block === name
  })
}

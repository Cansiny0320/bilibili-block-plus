const obseverTabsChange = (onChange: () => void) => {
  const targetNode = document.querySelector('.nav-tabs') as Node
  console.log(targetNode)

  const config = { attributes: true, childList: true, subtree: true }
  const callback: MutationCallback = function (mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes') {
        onChange()
      }
    }
  }
  if (targetNode) {
    const observer = new MutationObserver(callback)
    observer.observe(targetNode, config)
  }
}

const block = (blockList: string[]) => {
  let success = false
  requestAnimationFrame(() => {
    let upNameElements = Array.from(document.querySelectorAll('.up-name__text')) as HTMLDivElement[]
    if (!upNameElements.length) {
      upNameElements = Array.from(document.querySelectorAll('.detail a')) as HTMLDivElement[]
    }
    if (upNameElements.length) {
      success = true
    }
    upNameElements
      .filter(el => el.textContent && blockList.includes(el.innerText))
      .map(el => el.parentElement?.parentElement?.parentElement?.parentElement)
      .forEach(el => el?.remove())
    if (!success) {
      requestAnimationFrame(() => block(blockList))
    }
  })
}

export const blockHot = (blockList: string[]) => {
  block(blockList)
  obseverTabsChange(() => block(blockList))
}

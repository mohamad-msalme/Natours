export const useKeyDown = (callBack: () => void) => {
  window.document.addEventListener('keydown', ev => {
    if (ev.code === 'Escape') {
      callBack()
    }
  })
}

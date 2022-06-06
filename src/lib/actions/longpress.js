export default function longpress(node, { longpressDuration, hasLongpress }) {
  let timeout = null

  if (!hasLongpress) {
    return
  }

  function handleMousedown(e) {
    timeout = setTimeout(() => {
      node.dispatchEvent(new CustomEvent('longpress'))
    }, longpressDuration)
  }

  function handleMouseup(e) {
    clearTimeout(timeout)
    timeout = null
  }

  node.addEventListener('mousedown', handleMousedown)
  node.addEventListener('touchstart', handleMousedown)
  node.addEventListener('touchend', handleMouseup)
  document.addEventListener('mouseup', handleMouseup)

  return {
    update(newDuration) {
      longpressDuration = newDuration
    },
    destroy() {
      node.removeEventListener('mousedown', handleMousedown)
      node.removeEventListener('touchstart', handleMousedown)
      node.removeEventListener('touchend', handleMouseup)
      document.removeEventListener('mouseup', handleMouseup)
    }
  }
}

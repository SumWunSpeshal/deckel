export default function longpress(node, duration) {
  let timeout = null

  function handleMousedown() {
    timeout = setTimeout(() => {
      node.dispatchEvent(new CustomEvent('longpress'))
    }, duration)
  }

  function handleMouseup() {
    clearTimeout(timeout)
    timeout = null
  }

  node.addEventListener('mousedown', handleMousedown)
  document.addEventListener('mouseup', handleMouseup)

  return {
    update(newDuration) {
      duration = newDuration
    },
    destroy() {
      node.removeEventListener('mousedown', handleMousedown)
      document.removeEventListener('mouseup', handleMouseup)
    }
  }
}

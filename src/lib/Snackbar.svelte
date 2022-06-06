<script context="module">
  import { writable } from 'svelte/store'

  let content = writable('')
  let open = writable(false)
  let timeout = null

  export function triggerSnackbar({ text, duration = 3000 }) {
    content.set(text)
    open.set(true)

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      open.set(false)
    }, duration)
  }
</script>

<script>
</script>

<aside
  class="fixed w-full z-2 top-0 left-0 transition-transform {$open
    ? 'translate-y-4'
    : '-translate-y-full'}"
>
  <div class="container">
    <div class="p-3 rounded-md text-white font-semibold bg-teal-400">
      {$content} &nbsp;
    </div>
  </div>
</aside>

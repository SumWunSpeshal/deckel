<script>
  import { onMount } from 'svelte'

  import '/src/app.css'
  import Nav from '$lib/Nav.svelte'
  import Drawer from '$lib/Drawer.svelte'

  let nav
  let firstSlide
  let reserveBottom = 0
  let navInteraction = true

  onMount(() => {
    reserveBottom = nav.getBoundingClientRect().height
    determineNavInteraction()
  })

  function onScroll() {
    determineNavInteraction()
  }

  function determineNavInteraction() {
    navInteraction = firstSlide.getBoundingClientRect().y !== 0
  }
</script>

<main
  class="relative z-1 overflow-y-auto"
  style="max-height: calc(100% - {reserveBottom}px);"
>
  <slot />
</main>
<footer
  class="fixed overflow-y-auto text-center inset-0 snap-y snap-mandatory"
  class:z-2={navInteraction}
  on:scroll={onScroll}
>
  <div class="flex flex-col justify-end h-full snap-end" bind:this={firstSlide}>
    <nav
      class="flex justify-center border-t-2 border-stone-700 bg-white pointer-events-auto"
      bind:this={nav}
    >
      <Nav />
    </nav>
  </div>

  <div class="snap-start bg-white text-left">
    <Drawer />
  </div>
</footer>

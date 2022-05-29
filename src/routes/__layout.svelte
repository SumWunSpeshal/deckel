<script>
  import { onMount } from 'svelte'
  import { selectedList } from '$lib/stores/lists'

  import '/src/app.css'
  import Nav from '$lib/Nav.svelte'
  import Drawer from '$lib/Drawer.svelte'

  let nav
  let firstSlide
  let reserveBottom = 0
  let navInteraction
  let secondSlide

  onMount(() => {
    reserveBottom = nav.getBoundingClientRect().height
    determineNavInteraction()

    if (!$selectedList && secondSlide) {
      secondSlide.scrollIntoView({ behavior: 'smooth' })
    }
  })

  function determineNavInteraction() {
    navInteraction = firstSlide.getBoundingClientRect().y !== 0
  }
</script>

<main
  class="relative z-1 overflow-y-auto"
  style="max-height: calc(100% - {reserveBottom}px);"
>
  {#if $selectedList}
    <slot />
  {:else}
    <div class="pt-64">
      <div class="container">
        <div class="flex items-center justify-center text-center">
          <h1 class="text-stone-300 font-bold text-2xl">
            Erstelle Deine erste Liste!
          </h1>
        </div>
      </div>
    </div>
  {/if}
</main>
<footer
  class="fixed overflow-y-auto text-center inset-0 snap-y snap-mandatory"
  class:z-2={navInteraction}
  on:scroll={() => determineNavInteraction()}
>
  <div class="flex flex-col h-full snap-end" bind:this={firstSlide}>
    <div
      class="grow transition-colors duration-300 {navInteraction &&
        'bg-black/50'}"
      on:click={() => firstSlide.scrollIntoView({ behavior: 'smooth' })}
    />
    <nav
      class="flex justify-center bg-white pointer-events-auto"
      bind:this={nav}
    >
      <Nav />
    </nav>
  </div>

  <div class="snap-start bg-stone-100 text-left" bind:this={secondSlide}>
    <Drawer />
  </div>
</footer>

<script>
  import { page } from '$app/stores'
  import { onMount, afterUpdate } from 'svelte'

  import '../app.css'

  let nav
  let reserveBottom = 0
  let locked = true
  let touchY = null

  onMount(() => {
    reserveBottom = nav.getBoundingClientRect().height
  })

  function onTouchStart({ touches: [touch] }) {
    touchY = touch.clientY
  }

  function onTouchMove({ touches: [touch] }) {
    locked = touch.clientY > touchY
  }

  function onTouchEnd() {
    touchY = null
  }
</script>

<main style="padding-bottom: {reserveBottom}px;">
  <slot />
</main>
<footer
  class="fixed overflow-y-auto text-center inset-0 snap-y snap-mandatory z-10"
  style="pointer-events: {locked ? 'none' : 'all'}"
>
  <div class="flex flex-col justify-end h-full snap-end">
    <nav
      class="flex justify-center p-4 border border-red-600 bg-white pointer-events-auto"
      bind:this={nav}
      on:touchstart={onTouchStart}
      on:touchmove={onTouchMove}
      on:touchend={onTouchEnd}
    >
      <ul class="flex">
        <li class:active={$page.url.pathname === '/'}>
          <a sveltekit:prefetch href="/">Home</a>
        </li>
        <li class:active={$page.url.pathname === '/about'}>
          <a sveltekit:prefetch href="/about">About</a>
        </li>
        <li class:active={$page.url.pathname === '/todos'}>
          <a sveltekit:prefetch href="/todos">Todos</a>
        </li>
      </ul>
    </nav>
  </div>

  <div class="snap-start bg-white">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est
    explicabo perspiciatis minima velit fugit consequuntur voluptate odit!
    Nesciunt deleniti earum totam accusantium alias fuga provident corporis quis
    ut ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est
    explicabo perspiciatis minima velit fugit consequuntur voluptate odit!
    Nesciunt deleniti earum totam accusantium alias fuga provident corporis quis
    ut ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est
    explicabo perspiciatis minima velit fugit consequuntur voluptate odit!
    Nesciunt deleniti earum totam accusantium alias fuga provident corporis quis
    ut ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est
    explicabo perspiciatis minima velit fugit consequuntur voluptate odit!
    Nesciunt deleniti earum totam accusantium alias fuga provident corporis quis
    ut ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est
    explicabo perspiciatis minima velit fugit consequuntur voluptate odit!
    Nesciunt deleniti earum totam accusantium alias fuga provident corporis quis
    ut ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est
    explicabo perspiciatis minima velit fugit consequuntur voluptate odit!
    Nesciunt deleniti earum totam accusantium alias fuga provident corporis quis
    ut ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est
    explicabo perspiciatis minima velit fugit consequuntur voluptate odit!
    Nesciunt deleniti earum totam accusantium alias fuga provident corporis quis
    ut ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est
    explicabo perspiciatis minima velit fugit consequuntur voluptate odit!
    Nesciunt deleniti earum totam accusantium alias fuga provident corporis quis
    ut ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est
    explicabo perspiciatis minima velit fugit consequuntur voluptate odit!
    Nesciunt deleniti earum totam accusantium alias fuga provident corporis quis
    ut ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est
    explicabo perspiciatis minima velit fugit consequuntur voluptate odit!
    Nesciunt deleniti earum totam accusantium alias fuga provident corporis quis
    ut ex!

    <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est explicabo perspiciatis minima velit fugit consequuntur voluptate odit! Nesciunt deleniti earum totam accusantium alias fuga provident corporis quis ut ex!	
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est explicabo perspiciatis minima velit fugit consequuntur voluptate odit! Nesciunt deleniti earum totam accusantium alias fuga provident corporis quis ut ex!	
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est explicabo perspiciatis minima velit fugit consequuntur voluptate odit! Nesciunt deleniti earum totam accusantium alias fuga provident corporis quis ut ex!	
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, est explicabo perspiciatis minima velit fugit consequuntur voluptate odit! Nesciunt deleniti earum totam accusantium alias fuga prov -->
  </div>
</footer>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

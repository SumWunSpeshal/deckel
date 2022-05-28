<script>
  import { page } from '$app/stores'
  import { onMount } from 'svelte'

  import '/src/app.css'

  let nav
  let firstSlide
  let reserveBottom = 0
  let navInteraction = false

  onMount(() => {
    reserveBottom = nav.getBoundingClientRect().height
  })

  function onScroll() {
    navInteraction = firstSlide.getBoundingClientRect().y !== 0
  }
</script>

<main
  class="relative z-1 overflow-y-auto"
  style="max-height: calc(100% - {reserveBottom}px);"
>
  <slot />
  <div>
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
  </div>
</main>
<footer
  class="fixed overflow-y-auto text-center inset-0 snap-y snap-mandatory"
  class:z-2={navInteraction}
  on:scroll={onScroll}
>
  <div class="flex flex-col justify-end h-full snap-end" bind:this={firstSlide}>
    <nav
      class="flex justify-center p-4 border border-red-600 bg-white pointer-events-auto"
      bind:this={nav}
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
    Nesciunt deleniti earum totam accusantium alias fuga prov
  </div>
</footer>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

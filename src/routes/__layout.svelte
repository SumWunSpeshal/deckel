<script>
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import Plus from '$lib/icons/Plus.svelte'
  import List from '$lib/icons/List.svelte'
  import History from '$lib/icons/History.svelte'
  import Delete from '$lib/icons/Delete.svelte'
  import Edit from '$lib/icons/Edit.svelte'
  import Input from '$lib/Input.svelte'

  import '/src/app.css'
  import Check from '$lib/icons/Check.svelte'

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
      class="flex justify-center p-4 border-y border-gray-300 bg-white pointer-events-auto"
      bind:this={nav}
    >
      <ul class="flex space-x-2">
        <li class:active={$page.url.pathname === '/'}>
          <a sveltekit:prefetch href="/">
            <Plus />
          </a>
        </li>
        <li class:active={$page.url.pathname === '/about'}>
          <a sveltekit:prefetch href="/">
            <List />
          </a>
        </li>
        <li class:active={$page.url.pathname === '/todos'}>
          <a sveltekit:prefetch href="/">
            <History />
          </a>
        </li>
        <li class:active={$page.url.pathname === '/todos'}>
          <a sveltekit:prefetch href="/">
            <Delete />
          </a>
        </li>
        <li class:active={$page.url.pathname === '/todos'}>
          <a sveltekit:prefetch href="/">
            <Edit />
          </a>
        </li>
        <li class:active={$page.url.pathname === '/todos'}>
          <a sveltekit:prefetch href="/">
            <Check />
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <div class="snap-start bg-white">
    <Input id="new-list" />
  </div>
</footer>

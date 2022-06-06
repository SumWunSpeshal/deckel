<script>
  import { page } from '$app/stores'
  import Plus from './icons/Plus.svelte'
  import List from './icons/List.svelte'
</script>

<ul class="flex grow bg-stone-100">
  <li class="grow">
    <a href="/" class="pt-4 pb-8 flex justify-center">
      <Plus
        color={$page.url.pathname === '/'
          ? 'var(--teal-400)'
          : 'var(--stone-400)'}
      />
    </a>
  </li>
  <li class="grow">
    <a href="/list" class="pt-4 pb-8 flex justify-center">
      <List
        color={$page.url.pathname === '/list'
          ? 'var(--teal-400)'
          : 'var(--stone-400)'}
      />
    </a>
  </li>
</ul>

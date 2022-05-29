<script>
  import { page } from '$app/stores'
  import Plus from './icons/Plus.svelte'
  import List from './icons/List.svelte'
</script>

<ul class="flex grow">
  <li
    class="grow transition-colors duration-300 {$page.url.pathname === '/'
      ? 'bg-stone-200'
      : 'bg-stone-100'}"
  >
    <a href="/" class="py-4 flex justify-center">
      <Plus color="var(--stone-700)" />
    </a>
  </li>
  <li
    class="grow transition-colors duration-300 {$page.url.pathname === '/list'
      ? 'bg-stone-200'
      : 'bg-stone-100'}"
  >
    <a href="/list" class="py-4 flex justify-center">
      <List color="var(--stone-700)" />
    </a>
  </li>
</ul>

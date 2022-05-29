<script>
  export let id
  export let label
  export let value = ''
  export let onFocus
</script>

<div class="border-b border-teal-500 relative pt-5 pb-1">
  <label
    for={id}
    class="absolute top-0 left-0 w-full block text-sm text-stone-500"
    >{label}</label
  >
  <input
    type="text"
    {id}
    bind:value
    class="w-full text-lg bg-transparent"
    on:focus={e => onFocus && onFocus(e)}
  />
</div>

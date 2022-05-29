<script>
  export let id
  export let label
  export let value = ''
</script>

<div class="border-b border-stone-700 relative pt-5">
  <label
    for={id}
    class="absolute top-0 left-0 w-full block text-sm text-stone-500"
    >{label}</label
  >
  <input type="text" {id} bind:value class="w-full text-lg bg-transparent" />
</div>

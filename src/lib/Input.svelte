<script>
  import { lists } from './stores/lists'

  export let id

  let value = ''

  function submit() {
    value = ''
    lists.createList(value)
  }
</script>

<label for="asd">List name:</label>
<input type="text" {id} bind:value />
<button type="button" on:click={submit}>Save</button>

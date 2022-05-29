<script>
  import Input from '$lib/Input.svelte'
  import Plus from './icons/Plus.svelte'
  import { lists } from '$lib/stores/lists'
  import Delete from './icons/Delete.svelte'
  import Edit from './icons/Edit.svelte'

  let value
</script>

<div class="container py-6">
  <div class="mb-4">
    <h2 class="text-3xl font-semibold text-stone-700">Deine Listen</h2>
  </div>
  <div class="flex gap-4 mb-8">
    <div class="grow">
      <Input id="new-list" label="Neue Liste hinzufügen" bind:value />
    </div>
    <button
      type="button"
      on:click={() => lists.createList(value)}
      class="square-12 flex justify-center items-center rounded-md transition-colors {value
        ? 'bg-green-300 cursor-pointer'
        : 'bg-green-100 cursor-not-allowed'}"
    >
      <Plus size="24" color="var(--white)" />
    </button>
  </div>

  <div class="space-y-4">
    {#each Object.entries($lists) as [listId, list]}
      <div
        class="flex justify-between items-center pl-4 rounded-md text-stone-700 transition-colors cursor-pointer {list.selected
          ? 'bg-stone-200'
          : 'bg-stone-100'}"
        on:click={() => lists.selectList(listId)}
      >
        <span>{list.participant}</span>
        <div class="flex">
          <button
            type="button"
            on:click={() => lists.deleteList(listId)}
            class="square-14 flex justify-center items-center rounded-md transition-colors"
          >
            <Delete size="28" strokeWidth="3" color="var(--rose-600)" />
          </button>
        </div>
      </div>
    {/each}
  </div>
</div>

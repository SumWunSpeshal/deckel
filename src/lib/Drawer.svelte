<script>
  import Input from '$lib/Input.svelte'
  import Plus from './icons/Plus.svelte'
  import { lists } from '$lib/stores/lists'
  import Delete from './icons/Delete.svelte'
  import Edit from './icons/Edit.svelte'
  import Cross from './icons/Cross.svelte'
  import Check from './icons/Check.svelte'

  let value
  let editingList
  let newName
</script>

<div class="container py-6">
  <div class="mb-4">
    <h2 class="text-3xl font-semibold text-stone-700">Meine Listen</h2>
  </div>
  <div class="flex gap-4 mb-8">
    <div class="grow">
      <Input id="new-list" label="Neue Liste hinzufügen" bind:value />
    </div>
    <button
      type="button"
      on:click={() => {
        lists.createList(value)
        value = null
      }}
      class="square-12 flex justify-center items-center rounded-md transition-colors {value
        ? 'bg-green-400 cursor-pointer'
        : 'bg-stone-200 cursor-not-allowed'}"
    >
      <Plus size="24" color="var(--white)" />
    </button>
  </div>

  <div class="space-y-4">
    {#each Object.entries($lists) as [listId, list]}
      {#if listId === editingList}
        <div
          class="flex justify-between items-center pl-4 rounded-md text-stone-700 transition-colors cursor-pointer {list.selected
            ? 'bg-teal-100'
            : 'bg-stone-200'}"
        >
          <Input
            id="edit-list-{listId}"
            label="Neuer Name"
            bind:value={newName}
          />

          <div class="flex">
            <button
              type="button"
              on:click={() => {
                lists.updateListName(listId, newName)
                editingList = null
              }}
              class="square-14 flex justify-center items-center rounded-md transition-colors"
            >
              <Check size="28" strokeWidth="3" color="var(--green-300)" />
            </button>
            <button
              type="button"
              on:click={() => (editingList = null)}
              class="square-14 flex justify-center items-center rounded-md transition-colors"
            >
              <Cross size="28" strokeWidth="3" color="var(--rose-600)" />
            </button>
          </div>
        </div>
      {:else}
        <div
          class="flex justify-between items-center pl-4 rounded-md text-stone-700 transition-colors cursor-pointer {list.selected
            ? 'bg-teal-100'
            : 'bg-stone-200'}"
          on:click={() => lists.selectList(listId)}
        >
          <span>{list.participant}</span>

          <div class="flex">
            <button
              type="button"
              on:click={() => (editingList = listId)}
              class="square-14 flex justify-center items-center rounded-md transition-colors"
            >
              <Edit size="28" strokeWidth="3" color="var(--white)" />
            </button>
            <button
              type="button"
              on:click={() => lists.deleteList(listId)}
              class="square-14 flex justify-center items-center rounded-md transition-colors"
            >
              <Delete size="28" strokeWidth="3" color="var(--rose-600)" />
            </button>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>

<script>
  import {
    lists,
    participant,
    selectedListId,
    selectedListExpensesSortedByNew,
    sum
  } from '$lib/stores/lists'
  import currency from '/src/utils/currency'
  import formatDate from '/src/utils/formatDate'
  import Button from '$lib/Button.svelte'
  import { triggerSnackbar } from '$lib/Snackbar.svelte'
</script>

<svelte:head>
  <title>Verlauf</title>
</svelte:head>

<div class="container py-4">
  <div class="mb-10">
    <h1 class="text-4xl font-bold text-stone-700">
      Ausgaben mit {$participant}
    </h1>
  </div>

  <div
    class="p-3 rounded-md text-white font-semibold {$sum === 0
      ? 'bg-green-600'
      : 'bg-orange-400'}"
  >
    {#if $sum === 0}
      <div>Alles beglichen</div>
    {:else if $sum > 0}
      <div>{$participant} schuldet Dir {currency(Math.abs($sum))}</div>
    {:else}
      <div>Du schuldest {$participant} {currency(Math.abs($sum))}</div>
    {/if}
  </div>

  {#if $selectedListExpensesSortedByNew.length}
    <div class="my-6 border-t border-stone-300" />

    <div class="space-y-2">
      {#each $selectedListExpensesSortedByNew || [] as expense}
        <div
          class="p-3 bg-stone-200 rounded-md flex justify-between items-center text-stone-700 gap-4 {expense.purpose ===
          'Ausgleich'
            ? 'bg-sky-100'
            : 'bg-stone-200'}"
        >
          <ul class="space-y-2">
            <li class="text-stone-500">{formatDate(expense.date)}</li>
            <li>
              {expense.purpose}
            </li>
          </ul>
          <span class="text-4xl">{currency(expense.amount)}</span>
        </div>
      {/each}
    </div>

    <div class="flex justify-end mt-6">
      <Button
        variant="secondary-ghost"
        onLongpress={() => {
          lists.clearExpenses($selectedListId)
          triggerSnackbar({
            text: 'Alle Einträge wurden gelöscht!'
          })
        }}
      >
        Verlauf löschen
      </Button>
    </div>
  {/if}
</div>

<script>
  import {
    participant,
    selectedListExpensesSortedByNew,
    sum
  } from '$lib/stores/lists'
  import currency from '/src/utils/currency'
  import formatDate from '/src/utils/formatDate'
</script>

<svelte:head>
  <title>List expenses</title>
</svelte:head>

<div class="container py-4">
  <div class="mb-16">
    <h1 class="text-4xl font-bold text-stone-700">
      Ausgaben mit {$participant}
    </h1>
  </div>

  <div
    class="p-3 rounded-md text-white font-semibold {$sum > 0
      ? 'bg-green-600'
      : 'bg-rose-600'}"
  >
    {#if $sum > 0}
      <div>{$participant} schuldet Dir {currency(Math.abs($sum))}</div>
    {:else}
      <div>Du schuldest {$participant} {currency(Math.abs($sum))}</div>
    {/if}
  </div>

  <div class="my-10 border-t border-stone-300" />

  <div class="space-y-2">
    {#each $selectedListExpensesSortedByNew || [] as expense}
      <div
        class="p-3 bg-stone-200 rounded-md flex justify-between items-center text-stone-700 gap-4"
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
</div>

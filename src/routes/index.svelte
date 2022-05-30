<script>
  import Input from '$lib/Input.svelte'
  import { participant, lists, selectedListId, sum } from '$lib/stores/lists'
  import currency from '/src/utils/currency'

  const shortcuts = ['🛒', '🖨', '🛠', '⛽️', '🚗', '👕', '🏖', '🍿', '🍽️']

  let amount
  let purpose = ''
  let lending = true
  $: formComplete = amount && purpose

  function submit() {
    lists.addExpense($selectedListId, {
      amount: lending ? amount : -amount,
      purpose
    })
    reset()
  }

  function equalize() {
    lists.addExpense($selectedListId, {
      amount: $sum * -1,
      purpose: 'Ausgleich'
    })
  }

  function reset() {
    purpose = ''
    lending = true
    amount = undefined
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="container py-4">
  <div class="mb-16">
    <h1 class="text-4xl font-bold text-stone-700">Neue Ausgabe</h1>
  </div>
  <div class="flex justify-center mb-16">
    <div class="relative text-center">
      <input
        type="number"
        id="amount"
        inputmode="numeric"
        pattern="[0-9]*"
        class="text-7xl w-full text-center opacity-0"
        bind:value={amount}
      />
      <div
        class="absolute inset-0 text-7xl pointer-events-none flex items-center justify-center transition-colors duration-300 {amount
          ? 'text-stone-600'
          : 'text-stone-300'}"
      >
        <span>
          {currency(amount)}
        </span>
      </div>
    </div>
  </div>
  <h3 class="text-stone-700 text-lg mb-4 font-semibold">
    Wer hat die {currency(amount)} ausgelegt?
  </h3>
  <div class="mb-10 flex items-center gap-4">
    <button
      type="button"
      class="grow text-center basis-0 text-xl font-bold text-white rounded-full py-2 transition-colors duration-300 {lending
        ? 'bg-teal-200'
        : 'bg-stone-200'}"
      on:click={() => (lending = true)}
    >
      Ich
    </button>
    <button
      type="button"
      class="grow text-center basis-0 text-xl font-bold text-white rounded-full py-2 transition-colors duration-300 {!lending
        ? 'bg-teal-200'
        : 'bg-stone-200'}"
      on:click={() => (lending = false)}
    >
      {$participant}
    </button>
  </div>
  <h3 class="text-stone-700 text-lg mb-4 font-semibold">
    Wofür wurde das Geld ausgelegt?
  </h3>
  <fieldset class="flex gap-x-1 gap-y-4 flex-wrap mb-10">
    {#each shortcuts as shortcut}
      <button
        type="button"
        class="square-8 flex items-center justify-center"
        on:click={() => (purpose += shortcut)}
      >
        <span>
          {shortcut}
        </span>
      </button>
    {/each}

    <div class="w-full">
      <Input id="purpose" label="Verwendungszweck" bind:value={purpose} />
    </div>
  </fieldset>

  <div class="flex justify-between">
    <button
      type="button"
      class="rounded-full border-[3px] px-4 py-2 font-bold transition-colors duration-300 {$sum ===
      0
        ? 'border-stone-200 text-stone-200 cursor-not-allowed pointer-events-none'
        : 'border-orange-700 text-orange-700'}"
      on:click={equalize}
    >
      Schulden tilgen
    </button>
    <button
      type="button"
      class="rounded-full border-[3px] px-4 py-2 font-bold transition-colors duration-300 {!formComplete
        ? 'border-stone-200 text-stone-200 cursor-not-allowed pointer-events-none'
        : 'border-teal-400 text-teal-400'}"
      on:click={submit}
    >
      Bestätigen
    </button>
  </div>
</div>

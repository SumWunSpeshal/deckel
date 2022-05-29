<script>
  import Input from '$lib/Input.svelte'
  import Arrow from '$lib/icons/Arrow.svelte'
  import { participant, lists, selectedListId } from '$lib/stores/lists'
  import currency from '/src/utils/currency'

  let amount
  $: purposeComplete = purpose || customPurpose
  $: formComplete = amount && purposeComplete

  let purpose
  let customPurpose

  let lending = true

  function submit() {
    lists.addExpense($selectedListId, {
      amount: lending ? amount : -amount,
      purpose: purpose === 'custom' ? customPurpose : purpose
    })
    reset()
  }

  function reset() {
    purpose = undefined
    customPurpose = ''
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
        class="text-7xl w-full text-center opacity-0 peer"
        bind:value={amount}
      />
      <div
        class="absolute inset-0 text-stone-300 text-7xl pointer-events-none flex items-center justify-center peer-focus:text-stone-600 transition-colors duration-300"
      >
        <span>
          {currency(amount)}
        </span>
      </div>
    </div>
  </div>
  <h3 class="text-stone-700 text-lg mb-4 font-semibold">
    Wer schuldet wem {currency(amount)}?
  </h3>
  <div class="mb-16 flex items-center">
    <span class="grow text-center basis-0 text-xl font-bold text-stone-700"
      >Ich</span
    >
    <div class="basis-0 grow flex justify-center">
      <button
        type="button"
        class="square-14 flex justify-center items-center bg-sky-200 rounded-full border-[3px] border-sky-500 transition-transform duration-300"
        class:-rotate-180={lending}
        on:click={() => (lending = !lending)}
      >
        <Arrow color="var(--white)" size="24" />
      </button>
    </div>

    <span class="grow text-center basis-0 text-xl font-bold text-stone-700"
      >{$participant}</span
    >
  </div>
  <h3 class="text-stone-700 text-lg mb-4 font-semibold">Verwendungszweck</h3>
  <fieldset class="flex gap-x-8 gap-y-4 flex-wrap mb-16">
    {#each ['🛒', '🖨', '🛠', '⛽️', '🚗', '👕', '🏖', '🍿', '🍽️'] as shortcut}
      <label for={shortcut} class="flex gap-2 items-center cursor-pointer">
        <input
          type="radio"
          id={shortcut}
          name="Verwendungszweck"
          value={shortcut}
          bind:group={purpose}
          class="cursor-pointer"
        />
        <span>
          {shortcut}
        </span>
      </label>
    {/each}

    <label for="custom-purpose" class="w-full flex items-center gap-4">
      <input
        type="radio"
        id="custom-purpose"
        name="Verwendungszweck"
        value="custom"
        bind:group={purpose}
        class="cursor-pointer"
      />

      <div class="grow">
        <Input
          id="custom-purpose-input"
          label="Sonstiges"
          bind:value={customPurpose}
        />
      </div>
    </label>
  </fieldset>

  <div class="flex justify-end">
    <button
      type="button"
      class="rounded-full border-[3px] border-stone-700 px-4 py-2 font-bold transition-opacity duration-300 {!formComplete &&
        'opacity-30 cursor-not-allowed pointer-events-none'}"
      on:click={submit}
    >
      Bestätigen
    </button>
  </div>
</div>

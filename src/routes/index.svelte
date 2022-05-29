<script>
  import Input from '$lib/Input.svelte'
  import Arrow from '$lib/icons/Arrow.svelte'

  let value
  $: formattedValue = (value ? value / 100 : 0).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR'
  })

  let purpose
  let customPurpose
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
        class="text-7xl w-full text-center opacity-0 peer"
        bind:value
      />
      <div
        class="absolute inset-0 text-stone-300 text-7xl pointer-events-none flex items-center justify-center peer-focus:text-stone-600 transition-colors duration-300"
      >
        <span>
          {formattedValue}
        </span>
      </div>
    </div>
  </div>
  <h3 class="text-stone-700 text-lg mb-2 font-semibold">Verwendungszweck</h3>
  <fieldset class="flex gap-x-8 gap-y-4 flex-wrap">
    {#each ['🛒', '🖨', '🛠', '⛽️', '🚗', '👕', '🏖', '🍿'] as shortcut}
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

  <Arrow />
</div>

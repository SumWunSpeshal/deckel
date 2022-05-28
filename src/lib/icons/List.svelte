<script>
  export let size = 32
  export let strokeWidth = 3
  export let color = 'var(--black)'
</script>

<div
  style="--size: {size}px; --color: {color}; --strokeWidth: {strokeWidth}px"
  class="parent flex flex-col justify-evenly"
>
  {#each Array(3) as _}
    <div class="item | flex gap-0.5">
      <div class="bullet" />
      <div class="bar grow" />
    </div>
  {/each}
</div>

<style>
  .parent {
    width: var(--size);
    height: var(--size);
  }

  .bullet {
    width: var(--strokeWidth);
    height: var(--strokeWidth);
    background-color: var(--color);
    border-radius: var(--strokeWidth);
  }

  .bar {
    height: var(--strokeWidth);
    background-color: var(--color);
    border-radius: var(--strokeWidth);
  }
</style>

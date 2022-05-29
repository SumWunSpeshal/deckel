<script>
  export let size = 32
  export let strokeWidth = 3
  export let color = 'var(--black)'
</script>

<div
  style="--size: {size}px; --color: {color}; --strokeWidth: {strokeWidth}px"
  class="parent grid relative"
>
  <div class="inner rounded-full square-full transition-colors duration-300" />
  <div
    class="inner rounded-full square-full -rotate-45 transition-colors duration-300"
  />
  <div
    class="arrow absolute left-0 border-transparent top-1/2 -translate-x-1/4 -translate-y-full -rotate-45 rounded-sm transition-colors duration-300"
  />
  <div
    class="center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-300"
  />
  <div
    class="finger h-1/3 absolute top-1/2 left-1/2 -translate-y-full -translate-x-1/2 rounded-full transition-colors duration-300"
  />
  <div
    class="finger h-1/4 absolute top-1/2 left-1/2 -translate-y-full -translate-x-1/2 rotate-[120deg] origin-bottom rounded-full transition-colors duration-300"
  />
</div>

<style>
  .parent {
    width: var(--size);
    height: var(--size);
  }

  .inner {
    grid-area: 1 / 1;
    border-color: var(--color);
    border-left-color: transparent;
    border-width: var(--strokeWidth);
  }

  .center {
    width: var(--strokeWidth);
    height: var(--strokeWidth);
    background-color: var(--color);
  }

  .arrow {
    border-width: calc(var(--size) / 8);
    border-bottom-color: var(--color);
    border-left-color: var(--color);
  }

  .finger {
    width: var(--strokeWidth);
    background-color: var(--color);
  }
</style>

<script>
  export let size = 32
  export let strokeWidth = 3
  export let color = 'var(--black)'
</script>

<div
  style="--size: {size}px; --color: {color}; --strokeWidth: {strokeWidth}px"
  class="parent"
>
  <div class="bar horizontal transition-colors duration-300" />
  <div class="bar vertical transition-colors duration-300" />
</div>

<style>
  .parent {
    display: grid;
    width: var(--size);
    height: var(--size);
  }

  .bar {
    grid-area: 1 / 1;
    background-color: var(--color);
    margin: auto;
    border-radius: var(--strokeWidth);
  }

  .horizontal {
    width: 100%;
    height: var(--strokeWidth);
  }

  .vertical {
    width: var(--strokeWidth);
    height: 100%;
  }
</style>

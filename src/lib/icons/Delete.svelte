<script>
  export let size = 32
  export let strokeWidth = 3
  export let color = 'var(--black)'
</script>

<div
  style="--size: {size}px; --color: {color}; --strokeWidth: {strokeWidth}px"
  class="parent flex flex-col items-center"
>
  <div class="handle rounded-t-md transition-colors duration-300" />
  <div
    class="bin relative grid place-items-center grow rounded-b-md transition-colors duration-300"
  >
    <div class="crease-wrap flex h-1/2">
      <div class="crease rounded-md transition-colors duration-300" />
      <div class="crease rounded-md transition-colors duration-300" />
    </div>
  </div>
</div>

<style>
  .parent {
    width: var(--size);
    height: var(--size);
  }

  .handle {
    height: var(--strokeWidth);
    width: calc(var(--strokeWidth) * 4);
    background-color: var(--color);
  }

  .bin {
    border-color: var(--color);
    border-width: var(--strokeWidth);
    width: calc(100% - var(--strokeWidth) * 2);
  }

  .bin:before,
  .bin:after {
    content: '';
    width: var(--strokeWidth);
    height: var(--strokeWidth);
    background-color: var(--color);
    position: absolute;
    bottom: 100%;
    transition: background-color 0.3s ease-in-out;
  }

  .bin:before {
    left: 100%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    transform: translateX(100%);
  }

  .bin:after {
    right: 100%;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    transform: translateX(-100%);
  }

  .crease-wrap {
    gap: var(--strokeWidth);
  }

  .crease {
    width: var(--strokeWidth);
    background-color: var(--color);
  }
</style>

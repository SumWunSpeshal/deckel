<script>
  export let size = 32
  export let strokeWidth = 3
  export let color = 'var(--black)'
</script>

<div
  style="--size: {size}px; --color: {color}; --strokeWidth: {strokeWidth}px"
  class="parent"
>
  <div class="bar short transition-colors duration-300" />
  <div class="bar long transition-colors duration-300" />
</div>

<style>
  .parent {
    position: relative;
    display: grid;
    width: var(--size);
    height: var(--size);
  }

  .bar {
    position: absolute;
    grid-area: 1 / 1;
    background-color: var(--color);
    border-radius: var(--strokeWidth);
    width: var(--strokeWidth);
    transform-origin: top center;
    top: 75%;
    left: 40%;
  }

  .short {
    height: 50%;
    transform: rotate(-45deg) translate(-50%, -100%);
  }

  .long {
    transform: rotate(45deg) translate(-50%, calc(-100% + var(--strokeWidth)));
    height: 85%;
  }
</style>

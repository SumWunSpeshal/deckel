<script>
  export let size = 32
  export let strokeWidth = 3
  export let color = 'var(--black)'
</script>

<div
  style="--size: {size}px; --color: {color}; --strokeWidth: {strokeWidth}px"
  class="parent flex items-center"
>
  <div class="bar stem transition-colors duration-300">
    <div class="bar tip tip-one transition-colors duration-300" />
    <div class="bar tip tip-two transition-colors duration-300" />
  </div>
</div>

<style>
  .parent {
    width: var(--size);
    height: var(--size);
  }

  .bar {
    background-color: var(--color);
    height: var(--strokeWidth);
    border-radius: var(--strokeWidth);
  }

  .stem {
    position: relative;
    width: 100%;
  }

  .tip {
    position: absolute;
    right: 0;
    width: 60%;
  }

  .tip-one {
    transform-origin: right bottom;
    transform: rotate(45deg) translateY(25%);
  }

  .tip-two {
    transform-origin: right top;
    transform: rotate(-45deg) translateY(-25%);
  }
</style>

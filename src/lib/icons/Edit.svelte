<script>
  export let size = 32
  export let strokeWidth = 3
  export let color = 'var(--black)'

  let sqrt = Math.sqrt(2)
</script>

<div
  style="--size: {size}px; --color: {color}; --strokeWidth: {strokeWidth}px; --sqrt: {sqrt};"
  class="parent overflow-hidden relative"
>
  <div class="stroke stroke-top rounded-sm absolute" />
  <div class="stroke stroke-bottom rounded-sm absolute" />
  <div class="tip absolute bottom-0 left-0 rounded-sm">
    <div class="zigzag zigzag-one rounded-sm" />
    <div class="zigzag zigzag-two rounded-sm" />
    <div class="zigzag zigzag-three rounded-sm" />
    <!-- <div class="tippy-tip absolute" /> -->
  </div>
  <div class="eraser absolute rounded-sm" />
</div>

<style>
  .parent {
    width: var(--size);
    height: var(--size);
  }

  .stroke {
    height: calc(var(--strokeWidth) * 1);
    background-color: var(--color);
    width: calc(var(--sqrt) * 75%);
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .stroke-top {
    top: 50%;
    left: 25%;
  }

  .stroke-bottom {
    top: 75%;
    left: 50%;
  }

  .tip {
    border-color: var(--color);
    border-width: var(--strokeWidth);
    border-top-color: transparent;
    border-right-color: transparent;
    width: calc(25% + var(--strokeWidth));
    height: calc(25% + var(--strokeWidth));
  }

  .zigzag {
    position: absolute;
    width: calc(50% + var(--strokeWidth) * 1.5);
    height: calc(50% + var(--strokeWidth) * 1.5);
    border-width: var(--strokeWidth);
    border-color: var(--color);
  }

  .zigzag-one {
    top: calc(var(--strokeWidth) * -1);
    left: calc(var(--strokeWidth) * -1);
    border-left-color: transparent;
    border-bottom-color: transparent;
  }

  .zigzag-two {
    bottom: calc(var(--strokeWidth) * -1);
    right: calc(var(--strokeWidth) * -1);
    border-left-color: transparent;
    border-bottom-color: transparent;
  }

  .zigzag-three {
    top: calc(var(--strokeWidth) * -1);
    right: calc(var(--strokeWidth) * -1);
    border-top-color: transparent;
    border-right-color: transparent;
  }

  .tippy-tip {
    left: 0;
    bottom: 0;
    border-color: var(--color);
    border-width: var(--strokeWidth);
    border-top-color: transparent;
    border-right-color: transparent;
  }

  .eraser {
    --translate: -50%;
    border-color: var(--color);
    border-width: var(--strokeWidth);
    width: calc((25% + var(--strokeWidth)) * var(--sqrt));
    height: calc((15% + var(--strokeWidth)) * var(--sqrt));
    top: 25%;
    right: 25%;
    transform: translate(30%, -20%) rotate(45deg);
  }
</style>

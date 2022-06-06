<script>
  import longpress from './actions/longpress'
  export let variant = 'primary-ghost'
  export let disabled = false
  export let longpressDuration = 1000
  export let onLongpress
</script>

<button
  type="button"
  class="relative rounded-full border-[3px] px-4 py-2 font-bold overflow-hidden transition-opacity duration-300 {onLongpress
    ? 'before:absolute before:inset-0 before:right-full before:-z-1 before:active:right-0 before:active:transition-all before:active:duration-1000 before:active:ease-linear before:transition-none'
    : ''} {{
    'primary-ghost': `border-teal-400 text-teal-400 ${
      onLongpress ? 'before:bg-teal-200' : ''
    }`,
    'primary-solid': 'border-teal-400 bg-teal-400 text-white',
    'secondary-ghost': `border-orange-400 text-orange-400 ${
      onLongpress ? 'before:bg-orange-200' : ''
    }`,
    'secondary-solid': 'border-orange-400 bg-orange-400 text-white'
  }[variant]} {disabled
    ? 'cursor-not-allowed pointer-events-none opacity-20'
    : ''}"
  on:click
  use:longpress={longpressDuration}
  on:longpress={onLongpress}
>
  <slot />
</button>

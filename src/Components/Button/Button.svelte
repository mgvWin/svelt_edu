<script>
  export let click;
</script>

<style src="./Button.scss" global></style>

<button 
  on:click={click}
  {...$$restProps}>
  <slot />
</button>
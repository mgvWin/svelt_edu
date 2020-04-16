<script>
  export let 
    click,
    title,
    type = 'button',
    disabled;
</script>

<style src="./Button.scss"></style>

<button 
  on:click={click}
  {title} 
  {type} 
  {disabled}
  {...$$restProps}>
  <slot />
</button>
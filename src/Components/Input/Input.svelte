<script>
  export let
    type = 'text',
    label,
    change;
</script>

<label>
  {#if label} 
    <span>{label}</span>
  {/if}
  <input 
    {type}
    on:input={change}
    />
</label>

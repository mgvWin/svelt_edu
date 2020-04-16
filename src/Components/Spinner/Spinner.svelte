<script>
  export let isLoading;
</script>

{#if isLoading}
  <div class="loading-spinner"></div>
{:else}
  <slot />
{/if}
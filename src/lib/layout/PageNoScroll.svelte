<script lang="ts">
  import { onMount } from 'svelte';
  import { overflowHidden } from '$lib/ts/stores';

  let className = '';
  export { className as class };

  onMount(() => {
    $overflowHidden = true;

    return () => {
      $overflowHidden = false;
    };
  });
</script>

<div class="w-full h-full flex flex-col {className}">
  <slot />
</div>

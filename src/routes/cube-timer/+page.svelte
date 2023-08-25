<script lang="ts">
  import Timer from './Timer.svelte';
  import TimeTableMobile from './TimeTableMobile.svelte';
  import { footerHidden, headerHidden } from '$lib/ts/stores';

  let lastTime = 0;

  let solving = false;
  $: toggleHideElements(solving);

  function toggleHideElements(hide: boolean) {
    $headerHidden = hide;
    $footerHidden = hide;
  }
</script>

<div class="w-full h-full flex flex-col">
  <div class="flex-1">
    <Timer bind:lastTime bind:solving />
  </div>

  <div class="w-full {solving ? 'hidden' : ''}">
    <TimeTableMobile {lastTime} />
  </div>
</div>

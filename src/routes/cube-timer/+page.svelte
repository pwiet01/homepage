<script lang="ts">
  import Timer from './Timer.svelte';
  import TimeTableMobile from './TimeTableMobile.svelte';
  import { footerHidden, headerHidden } from '$lib/_ts/stores';

  let lastTime = 0;
  $: console.log(lastTime);

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
    <TimeTableMobile />
  </div>
</div>

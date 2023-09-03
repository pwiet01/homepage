<script lang="ts">
  import Timer from './_components/Timer.svelte';
  import TimeTableMobile from './_components/TimeTableMobile.svelte';
  import { footerHidden, headerHidden } from '$lib/ts/stores';
  import { onDestroy } from 'svelte';

  let lastTime = 0;

  let solving = false;
  $: toggleHideElements(solving);

  onDestroy(() => toggleHideElements(false));

  function toggleHideElements(hide: boolean) {
    $headerHidden = hide;
    $footerHidden = hide;
  }
</script>

<div class="w-full h-full flex flex-col select-none">
  <div class="flex-1">
    <Timer bind:lastTime bind:solving />
  </div>

  <div class="flex justify-center">
    <div class="w-full max-w-2xl {solving ? 'hidden' : ''}">
      <TimeTableMobile {lastTime} />
    </div>
  </div>
</div>

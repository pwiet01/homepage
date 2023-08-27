<script lang="ts">
  import Timer from './Timer.svelte';
  import TimeTableMobile from './TimeTableMobile.svelte';
  import { footerHidden, headerHidden } from '$lib/ts/stores';
  import PageNoScroll from '$lib/layout/PageNoScroll.svelte';
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

<PageNoScroll class="select-none">
  <div class="flex-1">
    <Timer bind:lastTime bind:solving />
  </div>

  <div class="w-full {solving ? 'hidden' : ''}">
    <TimeTableMobile {lastTime} />
  </div>
</PageNoScroll>

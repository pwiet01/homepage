<script lang="ts">
  import Timer from './_components/Timer.svelte';
  import TimeTable from './_components/TimeTable.svelte';
  import { footerHidden, headerHidden } from '$lib/ts/stores';
  import { onDestroy } from 'svelte';
  import { scramble } from './_ts/scramble';

  let lastTime = 0;

  let solving = false;
  $: toggleHideElements(solving);

  let currentScramble: string;
  $: if (!solving) {
    currentScramble = scramble().join(' ');
  }

  onDestroy(() => toggleHideElements(false));

  function toggleHideElements(hide: boolean) {
    $headerHidden = hide;
    $footerHidden = hide;
  }
</script>

<div class="w-full h-full flex flex-col items-center select-none xl:flex-row-reverse">
  <div class="w-full h-full flex-1 flex flex-col items-center justify-start relative">
    <p class="text-[1.3rem] sm:text-[2rem] mt-4 xl:px-14 text-center {solving ? 'hidden' : ''}">
      {currentScramble}
    </p>
    <Timer bind:lastTime bind:solving />
  </div>

  <div class="flex justify-center">
    <div class="w-full max-w-xl xl:max-w-sm {solving ? 'hidden' : ''}">
      <TimeTable {lastTime} />
    </div>
  </div>
</div>

<script lang="ts">
  import Timer from './Timer.svelte';
  import { formatMs } from '$lib/timerUtils';

  function onTimerStopped(event: CustomEvent<number>) {
    console.log(formatMs(event.detail));
  }
</script>

<div class="w-full h-full flex flex-col justify-center">
  <div class="flex justify-center items-center text-xl">
    <Timer on:stopped={onTimerStopped} />
  </div>
</div>

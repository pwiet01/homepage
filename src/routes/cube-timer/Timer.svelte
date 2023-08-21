<script lang="ts">
  import { formatMs } from '$lib/timerUtils';
  import { createEventDispatcher, onDestroy } from 'svelte';
  import { headerHidden, footerHidden } from '$lib/stores';

  enum State {
    PAUSED,
    WAITING,
    READY,
    RUNNING,
    STOP,
  }

  const stateColors = {
    [State.PAUSED]: 'text-white',
    [State.WAITING]: 'text-red-500',
    [State.READY]: 'text-green-500',
    [State.RUNNING]: 'text-white',
    [State.STOP]: 'text-red-500',
  };

  const dispatch = createEventDispatcher<{
    stopped: number;
  }>();

  let time = 0;

  let timeoutId: number | undefined = undefined;
  let intervalId: number | undefined = undefined;

  let state = State.PAUSED;
  $: stateColor = stateColors[state];
  $: {
    switch (state) {
      case State.READY:
        toggleHideElements(true);
        break;
      case State.STOP:
        toggleHideElements(false);
        dispatch('stopped', time);
        break;
    }
  }

  let stopKey: string | undefined = undefined;

  onDestroy(() => {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  });

  function onKeyDown(event: KeyboardEvent) {
    if (state === State.RUNNING) {
      clearInterval(intervalId);
      intervalId = undefined;
      state = State.STOP;
      stopKey = event.key;
      return;
    }

    if (state === State.PAUSED && isSpaceKey(event.key)) {
      state = State.WAITING;
      timeoutId = setTimeout(() => {
        time = 0;
        state = State.READY;
        timeoutId = undefined;
      }, 300);
    }
  }

  function onKeyUp(event: KeyboardEvent) {
    if (state === State.STOP && event.key === stopKey) {
      state = State.PAUSED;
      return;
    }

    if (isSpaceKey(event.key)) {
      if (state === State.READY) {
        state = State.RUNNING;
        intervalId = setInterval(() => {
          time += 10;
        }, 10);
        return;
      }

      if (state === State.WAITING) {
        state = State.PAUSED;
        clearTimeout(timeoutId);
        timeoutId = undefined;
      }
    }
  }

  function isSpaceKey(key: string): boolean {
    return key === ' ' || key === 'Spacebar';
  }

  function toggleHideElements(hide: boolean) {
    $headerHidden = hide;
    $footerHidden = hide;
  }
</script>

<div class="text-[5rem] sm:text-[6rem] md:text-[7rem] {stateColor}">
  {formatMs(time)}
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} on:keyup|preventDefault={onKeyUp} />

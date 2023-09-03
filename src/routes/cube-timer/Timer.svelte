<script lang="ts" xmlns:svelte="http://www.w3.org/1999/html">
  import { formatMs } from './_ts/timerUtils';
  import { onDestroy } from 'svelte';
  import CenterFull from '$lib/layout/CenterFull.svelte';

  export let lastTime = 0;
  export let solving = false;

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

  let time = 0;

  let timeoutId: any = undefined;
  let intervalId: any = undefined;

  let state = State.PAUSED;
  $: stateColor = stateColors[state];
  $: {
    switch (state) {
      case State.READY:
        solving = true;
        break;
      case State.STOP:
        solving = false;
        lastTime = time;
        break;
    }
  }

  let stopKey: string | undefined = undefined;

  onDestroy(() => {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  });

  function onKeyDown(event: KeyboardEvent | TouchEvent) {
    const key = event instanceof KeyboardEvent ? event.key : 'touch';

    if (state === State.RUNNING) {
      clearInterval(intervalId);
      intervalId = undefined;
      state = State.STOP;
      stopKey = key;
      return;
    }

    if (state === State.PAUSED && isSpaceKeyOrTouch(key)) {
      state = State.WAITING;
      timeoutId = setTimeout(() => {
        time = 0;
        state = State.READY;
        timeoutId = undefined;
      }, 300);
    }
  }

  function onKeyUp(event: KeyboardEvent | TouchEvent) {
    let key = '';

    if (event instanceof KeyboardEvent) {
      key = event.key;
    } else {
      key = 'touch';

      if (event.touches.length > 0) {
        return;
      }
    }

    if (state === State.STOP && key === stopKey) {
      state = State.PAUSED;
      return;
    }

    if (isSpaceKeyOrTouch(key)) {
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

  function isSpaceKeyOrTouch(key: string): boolean {
    return key === ' ' || key === 'Spacebar' || key === 'touch';
  }
</script>

<div class="w-full h-full" on:touchstart={onKeyDown} on:touchend={onKeyUp}>
  <CenterFull>
    <div class="text-[5rem] sm:text-[6rem] md:text-[7rem] {stateColor}">
      {formatMs(time)}
    </div>
  </CenterFull>
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} on:keyup|preventDefault={onKeyUp} />

<script lang="ts">
  import '../app.css';
  import '@fontsource/ubuntu-mono';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import { onMount } from 'svelte';
  import { overflowHidden } from '$lib/ts/stores';

  export let data;

  let isMounted = false;

  onMount(() => {
    setDocHeight();
    isMounted = true;
  });

  $: if (isMounted) {
    setOverflowHidden($overflowHidden);
  }

  function setDocHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
  }

  function setOverflowHidden(overflowHidden: boolean) {
    document.querySelector('body')?.classList.toggle('overflow-hidden', overflowHidden);
  }
</script>

<Header debug={data.debug} />

<main class="flex-1">
  <slot />
</main>

<Footer />

<svelte:window on:resize={setDocHeight} on:orientationchange={setDocHeight} />

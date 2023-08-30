<script lang="ts">
  import '../app.css';
  import '@fontsource/ubuntu-mono';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import { onMount } from 'svelte';
  import { overflowHidden } from '$lib/ts/stores';
  import { page } from '$app/stores';

  export let data;

  let isMounted = false;

  const defaultTitle = 'Patrice Wietmaier';
  const defaultKeywords =
    'patrice wietmaier, wietmaier, patrice, osnabrück, informatik, developer,' +
    ' full stack, backend, programmierer, symfony, basecom';

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

<svelte:head>
  <title>{$page.data?.meta?.title ?? defaultTitle}</title>

  <meta
    name="keywords"
    content="{defaultKeywords}{$page.data?.meta?.keywords ? ', ' + $page.data.meta.keywords : ''}"
  />

  {#if $page.data?.meta?.description}
    <meta name="description" content={$page.data.meta.description} />
  {/if}
</svelte:head>

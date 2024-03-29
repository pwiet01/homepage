<script lang="ts">
  import '../app.css';
  import '@fontsource/ubuntu-mono';
  import Header from './_components/Header.svelte';
  import Footer from './_components/Footer.svelte';
  import { onMount } from 'svelte';
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

  $: pageTitle = $page.error
    ? `(${$page.status}) ${$page.error?.message ?? 'Error'}`
    : $page.data?.meta?.title ?? defaultTitle;

  $: if (isMounted) {
    setBodyFixedHeight($page.data?.body?.fixedHeight ?? $page.error ?? false);
    setOverflowHidden($page.data?.body?.overflowHidden ?? false);
  }

  function setDocHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
  }

  function setBodyFixedHeight(bodyFixedHeight: boolean) {
    document.querySelector('body')?.classList.toggle('fixed-height', bodyFixedHeight);
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
  <title>{pageTitle}</title>

  <meta
    name="keywords"
    content="{defaultKeywords}{$page.data?.meta?.keywords ? ', ' + $page.data.meta.keywords : ''}"
  />

  {#if $page.data?.meta?.description}
    <meta name="description" content={$page.data.meta.description} />
  {/if}
</svelte:head>

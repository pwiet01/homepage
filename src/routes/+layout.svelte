<script lang="ts">
  import '../app.css';
  import '@fontsource/ubuntu-mono';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';

  export let data;
</script>

<Header debug={data.debug} />

<main class="flex-1">
  <slot />
</main>

<Footer />

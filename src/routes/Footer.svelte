<script lang="ts">
  import SvelteLogo from './SvelteLogo.svelte';
  import { footerHidden } from '$lib/ts/stores';
</script>

<footer class="navbar px-0 min-h-[4rem] h-[4rem] justify-between {$footerHidden ? 'hide' : ''}">
  <a
    href="https://kit.svelte.dev/"
    target="_blank"
    class="-ml-[0.375rem] flex flex-row items-center"
  >
    <span class="hidden sm:block sm:mr-1">Made with</span>
    <SvelteLogo class="w-fit h-7" />
  </a>

  <div class="flex-1 sm:flex-none flex flex-row items-center justify-end">
    <a href="/imprint"> Impressum </a>

    <div class="divider divider-horizontal" />

    <a
      href="https://www.linkedin.com/in/patrice-wietmaier"
      target="_blank"
      class="hover:text-blue-500 focus:text-blue-500"
    >
      <i class="fa-brands fa-linkedin fa-xl" />
    </a>

    <a href="https://github.com/pwiet01" target="_blank" class="pr-0">
      <i class="fa-brands fa-github fa-xl" />
    </a>
  </div>
</footer>

<style>
  .navbar {
    transition: all 100ms linear;
  }

  .hide {
    transform: translateY(4rem);
  }
</style>

<script>
  import SvelteLogo from './SvelteLogo.svelte';
</script>

<footer class="navbar px-0 justify-between">
  <a
    href="https://kit.svelte.dev/"
    target="_blank"
    class="pl-0 flex-1 hidden sm:flex flex-row items-center"
  >
    Made with
    <SvelteLogo class="w-auto h-7 ml-1" />
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

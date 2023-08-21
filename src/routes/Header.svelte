<script>
  import LogoFull from './LogoFull.svelte';
  import { headerHidden } from '$lib/stores';
</script>

<header class="navbar px-0 -mx-[0.875rem] min-h-0 h-[4rem] {$headerHidden ? 'hide' : ''}">
  <div class="flex-none dropdown">
    <button class="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block w-5 h-5 stroke-current"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        /></svg
      >
    </button>
    <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
      <li><a href="/kicktipp" class="text-xl">Tippspiel</a></li>
      <li><a href="/cube-timer" class="text-xl">Cube Timer</a></li>
    </ul>
  </div>
  <div class="flex-1">
    <a href="/" class="btn btn-ghost opacity-100">
      <LogoFull class="w-auto h-6" />
    </a>
  </div>
</header>

<style>
  .navbar {
    transition: all 100ms ease-out;
  }

  .hide {
    transform: translateY(-4rem);
  }
</style>

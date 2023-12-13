<script lang="ts">
  import SvelteLogo from '$lib/components/SvelteLogo.svelte';
  import { base } from '$app/paths';

  const linkClass = 'p-0 opacity-70 hover:-translate-y-1';
  const outerClass =
    'card mx-0 md:m-2 md:w-[13rem] lg:w-[18rem] xl:w-[20rem] bg-base-200 m-2 h-[4.25rem]';
  const innerClass = 'py-5 flex flex-row items-center';

  const iconClass = 'fa-2xl w-24 md:w-20 pl-5';
</script>

<div class="flex flex-col md:flex-row justify-between md:mx-20">
  <div>
    <a href="https://symfony.com/" target="_blank" class={linkClass}>
      <div class={outerClass}>
        <div class={innerClass}>
          <i class="fa-brands fa-symfony {iconClass}" />
          <h2 class="card-title text-xl">Symfony</h2>
        </div>
      </div>
    </a>

    <a href="https://spryker.com/" target="_blank" class={linkClass}>
      <div class={outerClass}>
        <div class={innerClass}>
          <div class="w-24 md:w-20 flex flex-row">
            <img src="{base}/images/spryker.svg" alt="" class="block h-[2.1rem] ml-6" />
          </div>
          <h2 class="card-title text-xl">Spryker</h2>
        </div>
      </div>
    </a>
  </div>

  <div>
    <a href="https://svelte.dev/" target="_blank" class={linkClass}>
      <div class={outerClass}>
        <div class={innerClass}>
          <div class="w-24 md:w-20 flex flex-row">
            <SvelteLogo class="block h-[1.9rem] ml-5" />
          </div>
          <h2 class="card-title text-xl">Svelte</h2>
        </div>
      </div>
    </a>

    <a href="https://vuejs.org/" target="_blank" class={linkClass}>
      <div class={outerClass}>
        <div class={innerClass}>
          <i class="fa-brands fa-vuejs text-green-500 {iconClass}" />
          <h2 class="card-title text-xl">Vue.js</h2>
        </div>
      </div>
    </a>
  </div>

  <div>
    <a href="https://git-scm.com/" target="_blank" class={linkClass}>
      <div class={outerClass}>
        <div class={innerClass}>
          <i class="fa-brands fa-git-alt text-orange-500 {iconClass}" />
          <h2 class="card-title text-xl">Git</h2>
        </div>
      </div>
    </a>

    <a href="https://www.docker.com/" target="_blank" class={linkClass}>
      <div class={outerClass}>
        <div class={innerClass}>
          <i class="fa-brands fa-docker text-blue-500 {iconClass}" />
          <h2 class="card-title text-xl">Docker</h2>
        </div>
      </div>
    </a>
  </div>
</div>

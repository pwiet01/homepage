<script lang="ts">
  import SvelteLogo from './SvelteLogo.svelte';

  const linkClass = 'p-0 opacity-70 hover:-translate-y-1';
  const outerClass = 'card mx-0 md:m-2 md:w-[12rem] lg:w-[16rem] bg-base-200 m-2 h-[4.25rem]';
  const innerClass = 'py-5 flex flex-row items-center';

  const iconClass = 'fa-2xl w-2/5 pl-5';
</script>

<div class="flex flex-col md:flex-row justify-between md:mx-20">
  <div>
    <a href="https://symfony.com/" target="_blank" class={linkClass}>
      <div class={outerClass}>
        <div class={innerClass}>
          <i class="fa-brands fa-symfony {iconClass}" />
          <h4 class="card-title">Symfony</h4>
        </div>
      </div>
    </a>

    <a href="https://spryker.com/" target="_blank" class={linkClass}>
      <div class={outerClass}>
        <div class={innerClass}>
          <div class="w-2/5 flex flex-row">
            <img src="./images/spryker.svg" alt="" class="block h-[2.1rem] ml-6" />
          </div>
          <h4 class="card-title">Spryker</h4>
        </div>
      </div>
    </a>

    <a href="https://www.php.net/" target="_blank" class="{linkClass} hidden md:block">
      <div class={outerClass}>
        <div class={innerClass}>
          <i class="fa-brands fa-php text-blue-500 {iconClass}" />
          <h4 class="card-title">PHP</h4>
        </div>
      </div>
    </a>
  </div>

  <div>
    <a href="https://vuejs.org/" target="_blank" class={linkClass}>
      <div class={outerClass}>
        <div class={innerClass}>
          <i class="fa-brands fa-vuejs text-green-500 {iconClass}" />
          <h4 class="card-title">Vue.js</h4>
        </div>
      </div>
    </a>

    <a href="https://svelte.dev/" target="_blank" class={linkClass}>
      <div class={outerClass}>
        <div class={innerClass}>
          <div class="w-2/5 flex flex-row">
            <SvelteLogo class="block h-[1.9rem] ml-5" />
          </div>
          <h4 class="card-title">Svelte</h4>
        </div>
      </div>
    </a>

    <a href="https://www.typescriptlang.org/" target="_blank" class="{linkClass} hidden md:block">
      <div class={outerClass}>
        <div class={innerClass}>
          <div class="w-2/5 flex flex-row">
            <img src="./images/typescript.svg" alt="" class="block h-[1.75rem] ml-5" />
          </div>
          <h4 class="card-title">TypeScript</h4>
        </div>
      </div>
    </a>
  </div>

  <div>
    <a href="https://git-scm.com/" target="_blank" class={linkClass}>
      <div class={outerClass}>
        <div class={innerClass}>
          <i class="fa-brands fa-git-alt text-orange-500 {iconClass}" />
          <h4 class="card-title">Git</h4>
        </div>
      </div>
    </a>

    <a href="https://www.docker.com/" target="_blank" class={linkClass}>
      <div class={outerClass}>
        <div class={innerClass}>
          <i class="fa-brands fa-docker text-blue-500 {iconClass}" />
          <h4 class="card-title">Docker</h4>
        </div>
      </div>
    </a>
  </div>
</div>

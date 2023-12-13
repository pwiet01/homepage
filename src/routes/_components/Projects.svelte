<script lang="ts">
  import type { Project } from '../_ts/types';

  export let sectionHeaderClass = '';

  const githubProjects: Project[] = [
    {
      href: 'https://github.com/pwiet01/homepage',
      name: 'Homepage',
      description1: 'Code, den Du teilweise gerade',
      description2: 'heruntergeladen hast',
    },
    {
      href: 'https://github.com/pwiet01/speedcubeshare',
      name: 'SpeedCubeShare',
      description1: "Teile deine Rubik's Cube Stats und",
      description2: 'tausche dich mit anderen aus',
      link: 'https://speedcubeshare.com',
      linkText: 'Zur Website',
      modifier: 'big',
      hint: '(In Arbeit)',
    },
    {
      href: 'https://github.com/pwiet01/in-time',
      name: 'InTime',
      description1: 'App zum automatischen Tracken von',
      description2: 'Verspätungen bei Verabredungen',
    },
  ];

  const websiteProjects: Project[] = [
    {
      href: '/tippspiel',
      name: 'Tippspiel',
      description1: 'Bundesliga Vorhersagen',
      description2: 'basierend auf Wettquoten',
    },
    {
      href: '/cube-timer',
      name: 'CubeTimer',
      description1: "Rubik's Cube Timer",
      description2: 'mit Scramble Generator',
    },
  ];
</script>

<h1 class={sectionHeaderClass}>Projekte auf GitHub</h1>
<div class="w-full flex flex-col md:flex-row md:flex-wrap justify-center md:items-center">
  {#each githubProjects as project (project.href)}
    <a href={project.href} target="_blank" class="p-0 opacity-70 hover:-translate-y-1">
      <div
        class="card md:w-96 bg-base-200 shadow-xl my-2 md:m-2 {project.modifier === 'big'
          ? '2xl:w-[27rem]'
          : ''}"
      >
        <figure><div class="w-full h-6 bg-green-700" /></figure>
        <div class="card-body p-6">
          <div class="flex items-center gap-4">
            <h2 class="card-title">{project.name}</h2>

            {#if project.hint}
              <p class="text-sm text-accent">{project.hint}</p>
            {/if}
          </div>

          <p class="h-5">{project.description1}</p>
          <p class="h-5">{project.description2 ?? ''}</p>

          {#if project.link}
            <a href={project.link} target="_blank" class="text-link w-fit">
              {project.linkText ?? project.link}
            </a>
          {:else}
            <div class="h-5 xl:h-0" />
          {/if}
        </div>
      </div>
    </a>
  {/each}
</div>

<h1 class="{sectionHeaderClass} mt-10">Auf dieser Website</h1>
<div class="w-full flex flex-col md:flex-row md:flex-wrap justify-center">
  {#each websiteProjects as project (project.href)}
    <a href={project.href} class="p-0 opacity-70 hover:-translate-y-1">
      <div class="card md:w-96 bg-base-200 shadow-xl my-2 md:m-2">
        <figure><div class="w-full h-6 bg-red-700" /></figure>
        <div class="card-body p-6">
          <h2 class="card-title">{project.name}</h2>
          <p class="h-5">{project.description1}</p>
          <p class="h-5">{project.description2 ?? ''}</p>
        </div>
      </div>
    </a>
  {/each}
</div>

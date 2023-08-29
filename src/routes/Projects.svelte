<script lang="ts">
  interface Project {
    href: string;
    name: string;
    description1: string;
    description2?: string;
  }

  export let sectionHeaderClass = '';

  const githubProjects: Project[] = [
    {
      href: 'https://github.com/pwiet01/homepage',
      name: 'homepage',
      description1: 'Diese Website',
    },
    {
      href: 'https://github.com/pwiet01/in-time',
      name: 'inTime',
      description1: 'App zum automatischen Tracken von',
      description2: 'Verspätungen bei Verabredungen',
    },
  ];

  const websiteProjects: Project[] = [
    {
      href: '/kicktipp',
      name: 'Tippspiel',
      description1: 'Bundesliga Vorhersagen',
      description2: 'mit Kicktipp Integration',
    },
    {
      href: '/cube-timer',
      name: 'CubeTimer',
      description1: 'Speedcube Timer',
      description2: 'mit Synchronisation',
    },
  ];
</script>

<h3 class={sectionHeaderClass}>Projekte auf GitHub</h3>
<div class="w-full flex flex-col md:flex-row md:flex-wrap justify-center">
  {#each githubProjects as project (project.href)}
    <a href={project.href} target="_blank" class="p-0 opacity-70 hover:-translate-y-1">
      <div class="card md:w-96 bg-base-200 shadow-xl my-2 md:m-2">
        <figure><div class="w-full h-6 bg-green-700" /></figure>
        <div class="card-body p-6">
          <h2 class="card-title">{project.name}</h2>
          <p class="h-5">{project.description1}</p>
          <p class="h-5">{project.description2 ?? ''}</p>
        </div>
      </div>
    </a>
  {/each}
</div>

<h3 class="{sectionHeaderClass} mt-10">Auf dieser Website</h3>
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

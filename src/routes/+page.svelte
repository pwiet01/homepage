<script lang="ts">
  import PageWithPadding from '$lib/layout/PageWithPadding.svelte';

  interface Project {
    href: string;
    name: string;
    description1: string;
    description2?: string;
    colorClass: string;
  }

  const projects: Project[] = [
    {
      href: '/kicktipp',
      name: 'Tippspiel',
      description1: 'Bundesliga Vorhersagen',
      description2: 'mit Kicktipp Integration',
      colorClass: 'bg-red-700',
    },
    {
      href: '/cube-timer',
      name: 'Cube Timer',
      description1: 'Speedcube Timer',
      colorClass: 'bg-green-700',
    },
  ];
</script>

<PageWithPadding>
  <div class="w-full h-full flex flex-col justify-center">
    <div class="text-center">
      <h1>Willkommen auf meiner Website!</h1>
      <h5 class="mt-4 opacity-70">An diesen Projekten wird gerade gearbeitet:</h5>
    </div>

    <div class="mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center">
      {#each projects as project (project.href)}
        <a href={project.href} class="p-0 opacity-70 hover:-translate-y-1">
          <div class="card sm:w-96 bg-base-200 shadow-xl m-2">
            <figure><div class="w-full h-10 {project.colorClass}" /></figure>
            <div class="card-body">
              <h2 class="card-title opacity-100">{project.name}</h2>
              <p class="h-5">{project.description1}</p>
              <p class="h-5">{project.description2 ?? ''}</p>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</PageWithPadding>

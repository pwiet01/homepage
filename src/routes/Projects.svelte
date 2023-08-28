<script lang="ts">
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
      description2: 'mit Synchronisation',
      colorClass: 'bg-green-700',
    },
  ];
</script>

<div class="w-full flex flex-col sm:flex-row sm:flex-wrap justify-center">
  {#each projects as project (project.href)}
    <a href={project.href} class="p-0 opacity-70 hover:-translate-y-1">
      <div class="card w-full sm:w-96 {project.colorClass} shadow-xl my-2 sm:m-2">
        <div class="card-body">
          <h2 class="card-title opacity-100">{project.name}</h2>
          <p class="h-5 truncate">{project.description1}</p>
          <p class="h-5 truncate">{project.description2 ?? ''}</p>
        </div>
      </div>
    </a>
  {/each}
</div>

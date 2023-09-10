<script lang="ts">
  import DebugBreakpoint from './_components/DebugBreakpoint.svelte';

  export let data;
</script>

<h1 class="text-xl opacity-50">Breakpoint</h1>
<DebugBreakpoint />

<div class="divider" />

<h1 class="text-xl opacity-50">OpenLiga</h1>
{#each data.openLigaTeams as team (team.teamId)}
  {team.teamId}: '{team.teamName}',<br />
{/each}

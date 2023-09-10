<script lang="ts">
  import CenterFull from '$lib/layout/CenterFull.svelte';
  import Modal from '$lib/components/Modal.svelte';

  export let data;
  let infoModal: HTMLDialogElement;

  const teamLogoClass = 'w-10 h-10 object-contain';
  const tdClass = 'pt-3 pb-1';

  function formatDateTime(date: Date) {
    return date.toLocaleString(undefined, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
</script>

<CenterFull>
  <div class="my-12 flex-1 md:flex-none">
    <div class="flex flex-row justify-between items-center mb-7">
      <div>
        <h1 class="text-xl">Tipps für:</h1>
        <h1 class="text-2xl text-primary">
          {data.matchDay.name ?? ''} <span class="hidden md:inline">(Bundesliga)</span>
        </h1>
      </div>
      <button class="icon-button" on:click={() => infoModal.showModal()}>
        <i class="fa-solid fa-circle-info fa-xl" />
      </button>
    </div>

    <table class="w-full md:w-[40rem] lg:w-[50rem] md:text-sm lg:text-lg table-fixed md:table-auto">
      {#each data.matchDay.matches as match (match.matchID)}
        <tr class="w-full border-t border-white border-opacity-20">
          <td class="{tdClass} md:w-2/5">
            <div class="flex flex-row items-center justify-between">
              <p class="hidden md:block">{match.team1.teamName}</p>
              <img class={teamLogoClass} src={match.team1.teamIconUrl} alt="Logo" />
            </div>
          </td>
          <td class="{tdClass} md:w-1/5 md:px-6">
            <div
              class="flex flex-row justify-center gap-2 text-2xl bg-base-200 py-2 px-4 rounded-xl"
            >
              <div>{data.predictions[match.matchID]?.teamHome?.value ?? ''}</div>
              <div>-</div>
              <div>{data.predictions[match.matchID]?.teamAway?.value ?? ''}</div>
            </div>
          </td>
          <td class="{tdClass} md:w-2/5">
            <div class="flex flex-row items-center justify-end md:justify-between">
              <img class={teamLogoClass} src={match.team2.teamIconUrl} alt="Logo" />
              <p class="hidden md:block">{match.team2.teamName}</p>
            </div>
          </td>
        </tr>
        <tr class="text-sm text-center opacity-70 last:border-b border-white border-opacity-20">
          <td colspan="3" class="pb-1">
            {#if match.matchDateTimeUTC}
              {formatDateTime(new Date(match.matchDateTimeUTC))}
            {/if}
          </td>
        </tr>
      {/each}
    </table>
  </div>
</CenterFull>

<Modal title="Berechnung der Ergebnisse" bind:modalRef={infoModal}>
  <div slot="body">
    <table class="w-full mt-4 table-fixed md:text-lg">
      <tr class="opacity-70">
        <td>Quoten-Differenz</td>
        <td>Ergebnis</td>
      </tr>
      <tr>
        <td>{'< 0.5'}</td>
        <td>{'1:1'}</td>
      </tr>
      <tr>
        <td>{'< 4'}</td>
        <td>{'2:1'}</td>
      </tr>
      <tr>
        <td>{'sonst'}</td>
        <td>{'3:1'}</td>
      </tr>
    </table>
  </div>
</Modal>

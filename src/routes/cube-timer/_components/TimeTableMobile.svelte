<script lang="ts">
  import type { CubeTimerRecords, CubeTimerSolve } from '../_ts/types';
  import TimeTableEntry from './TimeTableEntry.svelte';
  import TimeRecords from './TimeRecords.svelte';
  import { getAverage } from '../_ts/timerUtils';
  import { onMount, tick } from 'svelte';
  import { getCubeTimerStorage, saveCubeTimerStorage } from '../_ts/timerStorage';

  export let lastTime: number;

  let solves: CubeTimerSolve[] = [];
  let records: CubeTimerRecords = {};

  $: if (lastTime > 0) {
    addSolve();
  }

  $: onMount(() => {
    const storageSolves = getCubeTimerStorage();
    solves = storageSolves.solves;
    records = storageSolves.records;
  });

  async function addSolve() {
    const newSolve: CubeTimerSolve = {
      timeStamp: Date.now(),
      single: lastTime,
    };

    newSolve.ao5 = getAverage(newSolve, solves, 5);
    newSolve.ao12 = getAverage(newSolve, solves, 12);

    solves = [newSolve, ...solves];

    await tick();

    saveCubeTimerStorage({
      records: records,
      solves: solves,
    });
  }
</script>

<div class="w-full">
  <div class="bg-gray-600 rounded">
    <table class="w-full table-fixed">
      <tr>
        <th />
        <th>Zeit</th>
        <th>ao5</th>
        <th>ao12</th>
      </tr>
      {#each solves.slice(0, 3) as solve, index (solve.timeStamp)}
        <TimeTableEntry index={solves.length - index} {solve} />
      {/each}
    </table>
  </div>

  <div class="bg-gray-600 rounded mt-2 border border-green-500">
    <TimeRecords lastSolve={solves[0]} bind:records />
  </div>
</div>

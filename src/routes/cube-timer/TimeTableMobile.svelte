<script lang="ts">
  import type { CubeTimerSolve } from './_ts/types';
  import TimeTableEntry from './TimeTableEntry.svelte';
  import TimeRecords from './TimeRecords.svelte';
  import { calculateAverage } from './_ts/timerUtils';

  export let lastTime: number;

  let solves: CubeTimerSolve[] = [];

  $: if (lastTime > 0) {
    addSolve();
  }

  function addSolve() {
    const newSolve: CubeTimerSolve = {
      timeStamp: Date.now(),
      single: lastTime,
    };

    newSolve.ao5 = getAverage(newSolve, 5);
    newSolve.ao12 = getAverage(newSolve, 12);

    solves = [newSolve, ...solves];
  }

  function getAverage(solve: CubeTimerSolve, numOfSolves: number): number | undefined {
    if (solves.length < numOfSolves - 1) {
      return undefined;
    }

    const filteredSolves = [solve, ...solves.slice(0, numOfSolves - 1)];

    return calculateAverage(filteredSolves);
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
    <TimeRecords />
  </div>
</div>

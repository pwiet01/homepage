<script lang="ts">
  import type { CubeTimerRecords, CubeTimerSolve } from './_ts/types';
  import { formatMs } from './_ts/timerUtils';

  export let lastSolve: CubeTimerSolve | undefined;
  export let records: CubeTimerRecords;

  $: records = {
    single: getRecord(lastSolve, 'single'),
    ao5: getRecord(lastSolve, 'ao5'),
    ao12: getRecord(lastSolve, 'ao12'),
  };

  $: parsedRecords = {
    single: formatMs(records.single),
    ao5: formatMs(records.ao5),
    ao12: formatMs(records.ao12),
  };

  function getRecord(
    lastSolve: CubeTimerSolve | undefined,
    type: 'single' | 'ao5' | 'ao12'
  ): number | undefined {
    if (lastSolve == undefined || lastSolve[type] == undefined) {
      return undefined;
    }

    const lastTime = lastSolve[type] as number;
    const recordTime = records[type];

    if (recordTime == undefined || recordTime > lastTime) {
      return lastTime;
    }

    return recordTime;
  }
</script>

<table class="w-full table-fixed">
  <tr>
    <th rowspan="2">Best</th>
    <th>Single</th>
    <th>ao5</th>
    <th>ao12</th>
  </tr>
  <tr>
    <td>{parsedRecords.single}</td>
    <td>{parsedRecords.ao5}</td>
    <td>{parsedRecords.ao12}</td>
  </tr>
</table>

<style>
  td {
    text-align: center;
  }
</style>

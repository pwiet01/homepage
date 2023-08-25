<script lang="ts">
  import type { CubeTimerRecords } from './_ts/types';
  import { formatMs } from './_ts/timerUtils';

  let records: CubeTimerRecords = {};

  $: parsedRecords = {
    single: formatMs(records.single),
    ao5: formatMs(records.ao5),
    ao12: formatMs(records.ao12),
  };
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

<script lang="ts">
  import type { CubeTimerSolve } from './_ts/types';
  import { formatMs } from './_ts/timerUtils';

  export let index: number;
  export let solve: CubeTimerSolve;

  $: parsedSolve = {
    single: formatMs(solve.single),
    ao5: formatMs(solve.ao5),
    ao12: formatMs(solve.ao12),
  };
</script>

<tr>
  <td>{index}</td>
  <td>{parsedSolve.single}</td>
  <td>{parsedSolve.ao5}</td>
  <td>{parsedSolve.ao12}</td>
</tr>

<style>
  td {
    text-align: center;
  }
</style>

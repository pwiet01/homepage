<script lang="ts">
  import type { CubeTimerRecords, CubeTimerSolve } from '../_ts/types';
  import TimeTableEntry from './TimeTableEntry.svelte';
  import TimeRecords from './TimeRecords.svelte';
  import { getAverage } from '../_ts/timerUtils';
  import { onMount, tick } from 'svelte';
  import {
    deleteCubeTimerStorage,
    getCubeTimerStorage,
    saveCubeTimerStorage,
  } from '../_ts/timerStorage';
  import Modal from '$lib/components/Modal.svelte';

  export let lastTime: number;

  let solves: CubeTimerSolve[] = [];
  let records: CubeTimerRecords = {};

  let deleteConfirmModal: HTMLDialogElement;

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

  function onDelete() {
    deleteConfirmModal.showModal();
  }

  function onDeleteConfirm() {
    deleteCubeTimerStorage();
    solves = [];
    records = {};
    deleteConfirmModal.close();
  }
</script>

<div class="w-full text-center flex flex-col xl:flex-col-reverse gap-2">
  <button class="btn btn-error hidden xl:block" on:click={onDelete}> Reset </button>

  <div class="bg-gray-600 rounded p-1">
    <table class="w-full table-fixed">
      <tr>
        <th>
          <button
            class="btn btn-error min-h-0 h-fit py-0.5 text-xs inline xl:hidden"
            on:click={onDelete}
          >
            Reset
          </button>
        </th>
        <th>Zeit</th>
        <th>ao5</th>
        <th>ao12</th>
      </tr>
    </table>
    <div class="h-20 xl:h-[calc(var(--vh)*50)] overflow-y-auto hide-scrollbar">
      <table class="w-full table-fixed">
        {#each solves as solve, index (solve.timeStamp)}
          <TimeTableEntry index={solves.length - index} {solve} />
        {/each}
      </table>
    </div>
  </div>

  <div class="bg-gray-600 rounded border border-green-500">
    <TimeRecords lastSolve={solves[0]} bind:records />
  </div>
</div>

<Modal
  title="Zeiten löschen?"
  text="Alle Zeiten werden unwiderruflich gelöscht!"
  bind:modalRef={deleteConfirmModal}
>
  <div class="modal-action" slot="actions">
    <button class="btn btn-error" on:click={onDeleteConfirm}> Löschen </button>
  </div>
</Modal>

<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let internalErrorModal: HTMLDialogElement;

  onMount(() => {
    if ($page.status >= 500) {
      internalErrorModal.showModal();
    }
  });
</script>

<div class="w-full h-full flex flex-col justify-center items-center text-center">
  <h1 class="text-[8rem] sm:text-[12rem] leading-none opacity-20">{$page.status}</h1>
  <h3 class="max-w-2xl">{$page.error?.message ?? 'Error'}</h3>
</div>

<dialog class="modal backdrop-blur" bind:this={internalErrorModal}>
  <form method="dialog" class="modal-box">
    <h1 class="text-2xl">Oh mist...</h1>
    <p class="py-4">Da ist leider was schiefgelaufen. Bitte versuche es später erneut.</p>
    <div class="modal-action">
      <button class="btn">Schließen</button>
    </div>
  </form>
  <form method="dialog" class="modal-backdrop">
    <button class="cursor-default" />
  </form>
</dialog>

<script lang="ts">
  export let title: string;
  export let text: string;
  export let modalRef: HTMLDialogElement;
</script>

<dialog class="modal backdrop-blur" bind:this={modalRef}>
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h1 class="text-2xl">{title}</h1>
    <p class="py-4">{text}</p>
    <slot />
  </div>
  <form method="dialog" class="modal-backdrop">
    <button class="cursor-default" />
  </form>
</dialog>

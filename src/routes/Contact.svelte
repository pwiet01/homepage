<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';

  export let form: ActionData;
  $: formData = {
    email: '',
    name: '',
    message: '',
    ...form?.messageForm?.data,
  };

  $: isValid =
    /^\S+@\S+$/.test(formData.email) &&
    formData.name.trim().length > 0 &&
    formData.message.trim().length > 0;

  let isLoading = false;
  let successModal: HTMLDialogElement;
</script>

<div class="w-full flex flex-row justify-center">
  <form
    method="post"
    action="?/message"
    class="max-w-2xl"
    use:enhance={() => {
      isLoading = true;

      return ({ result, update }) => {
        isLoading = false;

        if (result.type === 'success') {
          successModal.showModal();
        }

        update();
      };
    }}
  >
    <input
      bind:value={formData.email}
      type="email"
      required
      disabled={isLoading}
      placeholder="E-Mail-Adresse"
      class="input input-bordered w-full text-base mb-2"
    />

    <input
      bind:value={formData.name}
      type="text"
      required
      disabled={isLoading}
      placeholder="Name"
      class="input input-bordered w-full text-base mb-5"
    />

    <textarea
      bind:value={formData.message}
      placeholder="Nachricht"
      required
      disabled={isLoading}
      rows="6"
      class="textarea textarea-bordered w-full text-base mb-5"
    />

    <button type="submit" disabled={isLoading || !isValid} class="btn btn-primary w-full">
      <span class="loading loading-spinner{isLoading ? '' : ' hidden'}" />
      Absenden
    </button>
  </form>
</div>

<dialog class="modal backdrop-blur" bind:this={successModal}>
  <form method="dialog" class="modal-box">
    <h1 class="text-xl">Nachricht gesendet!</h1>
    <p class="py-4">
      Ich habe die Nachricht erhalten und melde mich so schnell wie möglich zurück!
    </p>
    <div class="modal-action">
      <button class="btn">Schließen</button>
    </div>
  </form>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

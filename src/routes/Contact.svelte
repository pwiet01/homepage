<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ContactFormResponse } from './_ts/types';

  export let form: ContactFormResponse | undefined;
  $: if (form) {
    updateFormData(form);
  }

  let email = '';
  let fullName = '';
  let message = '';

  $: isValid = /^\S+@\S+$/.test(email) && fullName.trim().length > 0 && message.trim().length > 0;

  let isLoading = false;
  let successModal: HTMLDialogElement;

  const messageMaxLength = 1000;

  function updateFormData(form: ContactFormResponse) {
    email = form.data?.email ?? '';
    fullName = form.data?.fullName ?? '';
    message = form.data?.message ?? '';
  }
</script>

<div class="w-full flex flex-row justify-center">
  <form
    method="post"
    action="?/contact"
    class="max-w-2xl"
    use:enhance={() => {
      isLoading = true;

      return async ({ result, update }) => {
        isLoading = false;

        if (result.type === 'success') {
          successModal.showModal();
        }

        await update();
      };
    }}
  >
    <input
      bind:value={email}
      name="email"
      type="email"
      required
      disabled={isLoading}
      placeholder="E-Mail-Adresse"
      class="input input-bordered w-full text-base mb-2"
      maxlength="50"
    />

    <input
      bind:value={fullName}
      name="fullName"
      type="text"
      required
      disabled={isLoading}
      placeholder="Name"
      class="input input-bordered w-full text-base mb-5"
      maxlength="50"
    />

    <textarea
      bind:value={message}
      name="message"
      placeholder="Nachricht"
      required
      disabled={isLoading}
      rows="6"
      class="textarea textarea-bordered w-full text-base"
      maxlength={messageMaxLength}
    />
    <p class="text-xs opacity-70 mb-5">{messageMaxLength - message.length}/{messageMaxLength}</p>

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
    <button class="cursor-default" />
  </form>
</dialog>

<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ContactFormResponse } from '../_ts/types';
  import { onMount } from 'svelte';
  import type { ActionResult } from '@sveltejs/kit';
  import Modal from '$lib/components/Modal.svelte';

  export let form: ContactFormResponse | undefined;

  onMount(() => {
    if (form?.success) {
      successModal.showModal();
    }

    updateFormData(form);
  });

  let email = '';
  let fullName = '';
  let message = '';

  $: isValid = /^\S+@\S+$/.test(email) && fullName.trim().length > 0 && message.trim().length > 0;

  let isLoading = false;
  let successModal: HTMLDialogElement;

  const messageMaxLength = 1000;

  function updateFormData(form: ContactFormResponse | undefined) {
    email = form?.data?.email ?? '';
    fullName = form?.data?.fullName ?? '';
    message = form?.data?.message ?? '';
  }

  function getContactFormResponse(actionResult: ActionResult) {
    return actionResult.type === 'success' || actionResult.type === 'failure'
      ? <ContactFormResponse | undefined>actionResult?.data?.contactForm
      : undefined;
  }
</script>

<div class="w-full flex flex-row justify-center">
  <form
    method="post"
    action="?/contact"
    class="w-full md:max-w-2xl"
    use:enhance={() => {
      isLoading = true;

      return async ({ result, update }) => {
        isLoading = false;

        if (result.type === 'success') {
          successModal.showModal();
        }

        await update();
        updateFormData(getContactFormResponse(result));
      };
    }}
  >
    <input
      bind:value={email}
      name="email"
      type="email"
      required
      disabled={isLoading}
      placeholder="Deine E-Mail-Adresse"
      class="input input-bordered w-full text-base mb-2"
      maxlength="50"
      autocomplete="email"
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
      autocomplete="name"
    />

    <textarea
      bind:value={message}
      name="message"
      placeholder="Nachricht"
      required
      disabled={isLoading}
      rows="8"
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

<Modal
  title="Nachricht gesendet!"
  text="Ich habe die Nachricht erhalten und melde mich so schnell wie möglich zurück!"
  bind:modalRef={successModal}
/>

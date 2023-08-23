<script lang="ts">
  import PageWithPadding from '$lib/PageWithPadding.svelte';
  import CenterFull from '$lib/CenterFull.svelte';
</script>

<PageWithPadding>
  <CenterFull>
    <div class="flex-1 card bg-base-200 shadow-xl max-w-3xl">
      <div class="card-body">
        <h1 class="mb-6">Impressum</h1>

        <div class="mb-4">
          <h3 class="mb-2 opacity-50">Betreiber</h3>
          <p>Patrice Wietmaier</p>
          <p>Luisenstr. 32</p>
          <p>49074 Osnabrück</p>
          <p>Deutschland</p>
        </div>

        <div>
          <h3 class="mb-2 opacity-50">Kontakt</h3>
          <p>mail@pwietmaier.de</p>
        </div>
      </div>
    </div>
  </CenterFull>
</PageWithPadding>

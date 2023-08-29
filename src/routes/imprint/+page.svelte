<script lang="ts">
  import PageWithPadding from '$lib/layout/PageWithPadding.svelte';
  import CenterFull from '$lib/layout/CenterFull.svelte';
</script>

<PageWithPadding>
  <CenterFull>
    <div class="flex-1 card bg-base-200 shadow-xl max-w-xl">
      <div class="card-body">
        <h1 class="mb-6">Impressum</h1>

        <div class="flex flex-col sm:flex-row">
          <div class="mb-4 sm:mb-0 sm:mr-20">
            <h3 class="mb-2 opacity-50">Betreiber</h3>
            <p>Patrice Wietmaier</p>
            <p>Luisenstr. 32</p>
            <p>49074 Osnabrück</p>
            <p>Deutschland</p>
          </div>

          <div>
            <h3 class="mb-2 opacity-50">Kontakt</h3>
            <p>mail@pwietmaier.de</p>
            <p>Mobil: +49 157 36771959</p>
          </div>
        </div>
      </div>
    </div>
  </CenterFull>
</PageWithPadding>

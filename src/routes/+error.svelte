<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="w-full h-full flex flex-col justify-center items-center text-center">
  <h1 class="text-[8rem] sm:text-[12rem] leading-none opacity-20">{$page.status}</h1>
  <h3 class="max-w-2xl">{$page.error?.message ?? 'Error'}</h3>
</div>

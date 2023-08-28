<script lang="ts">
  let className = '';
  export { className as class };
</script>

<div class="w-full h-full py-10 {className}">
  <slot />
</div>

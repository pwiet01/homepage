<script lang="ts">
  export let name: string;
  export let email: string;
  export let message: string;
</script>

<p>Von: {name} ({email})</p>
<br />
<p>{@html message}</p>

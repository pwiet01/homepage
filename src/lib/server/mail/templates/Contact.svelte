<script lang="ts">
  export let name: string;
  export let email: string;
  export let message: string;
</script>

<p><b>Von</b>: {name} ({email})</p>
<br />
<p>{@html message}</p>

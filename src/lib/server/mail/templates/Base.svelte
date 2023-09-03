<script lang="ts">
  export let title: string;
  export let content: string;
</script>

<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>{title}</title>
  </head>
  <body>
    {@html content}
  </body>
</html>

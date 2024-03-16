<script lang="ts">
  import img from '$lib/assets/musculacao.jpg';
  export let description:string;
  
  let siteName = 'Best Form';
  let separator = ' – '
</script>

<svelte:head>
  <title>{siteName}{separator}A academia pertinho de você!</title>
  <meta name="description" content="{description}">

  <!-- Open Graph meta tags -->
  <meta property="og:title" content="A academia pertinho de você!" />
  <meta property="og:description" content="{description}" />
  <meta property="og:image" content="{img}" />
</svelte:head>
<script lang="ts">
    export let name:string;
    export let description:string;
    
    let siteName = 'Best Form';
    let separator = ' – '
  </script>
  
  <svelte:head>
    <title>{name}{separator}{siteName}</title>
    <meta name="description" content="{description}">
  </svelte:head>
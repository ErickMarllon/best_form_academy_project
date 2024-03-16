<script lang='ts'>
  import { page } from '$app/stores';
  import Card from '$lib/components/Card.svelte';
  import IntroSingle from '$lib/components/IntroSingle.svelte';
  import { modalidadesStore } from '$lib/stores';
  import autoAnimate from "@formkit/auto-animate";
  
  export let data: { name: string, content: string, img: string };

</script>

{#key data}
<IntroSingle data={data} />
{/key}

<section class="related">
  <div class="related__wrapper wrap">
    <h3>Outras modalidades:</h3>
    
    <div class="list" use:autoAnimate>
      {#each $modalidadesStore as info}
        {#if info.slug !== $page.params.slug}
        <Card info={info} />
        {/if}
      {/each}
    </div>
  </div>
</section>

<style>
  .related {
    margin-top: 40px;
    padding: 0 20px;

  }
  .wrap{
    max-width: 1200px;

  }
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 16px;
  }
</style>
<script>
    import backgroundSection from '$assets/alongamento.jpg';
    import Card from '$components/Card.svelte';
    import Intro from '$components/Intro.svelte';
    import Seo from '$components/Seo.svelte';
    import { modalidadesStore } from '$lib/stores';

  </script>
  
  <Seo
    name="Modalidades"
    description="A Academia Local tem várias modalidades para que você tenha a melhor experiência possível!"
  />
  
  <Intro
    background={backgroundSection}
    title="Temos a modalidade certa para você"
    content="Descubra as diversas modalidades da nossa academia."
    href=""
    btn=""
  />
  
  <section class="modalidades">
    <div class="modalidades__wrapper wrap">
      {#each $modalidadesStore.slice(0, 4) as modalidade (modalidade.slug)}
      <Card info={modalidade} />
      {/each}
    </div>
  </section>
  
  <style>
    .modalidades {
      margin-top: 60px;
    }
    .modalidades__wrapper {
      max-width: 1200px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      padding: 0 20px;
    }

  </style>
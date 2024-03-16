<script lang='ts'>
  import backgroundSection from '$assets/exercicios.jpg';
  import Faq from '$components/Faq.svelte';
  import Intro from "$components/Intro.svelte";
  import { faqData } from './faqData.Mock.js';
</script>

<Intro 
  background={backgroundSection}
  title="Conheça a academia que mais cresce na cidade!"
  content="Confira algumas das perguntas frequentes."
  href="/Modalidades"
  btn="Modalidades"
/>

<section class="faq">
  <div class="faq__wrapper wrap">
      {#each faqData as item}
          <Faq question={item.question} answer={item.answer} />
      {/each}
  </div>
</section>

<style>
  .faq {
      margin-top: 60px;
  }
  .faq__wrapper {
      display: grid;
      max-width: 1200px;
      grid-template-columns: 1fr 1fr;
      padding: 0 20px;
      gap: 20px;
  }

  @media(max-width: 800px) {
      .faq__wrapper {
          grid-template-columns: 1fr;
      }
  }
</style>

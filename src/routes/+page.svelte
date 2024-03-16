<script>
    import backgroundSection from '$lib/assets/musculacao.jpg';
    import Intro from '../lib/components/Intro.svelte';
    import SeoHome from '../lib/components/SeoHome.svelte';
</script>

<SeoHome
  description="A academia mais perto de você com o maior número de modalidades!"
/> 

<Intro 
background={backgroundSection}
title="Você esta pronto para o desafio?"
content="Estamos prontos para te ajudar a alcançar sua melhor performance."
href="/sobre"
btn="Sobre"
/>


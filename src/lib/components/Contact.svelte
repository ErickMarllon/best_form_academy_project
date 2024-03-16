<script>
    import img from '$assets/crossfit.jpg';
    import { fly } from 'svelte/transition';
    let visible = false;
    setTimeout(() => {
      visible=true
    }, 1);
</script>

<section class="contact" id="contato">
    <div class="contact__wrapper wrap" >
      {#if visible}
        <div class="contact__img" transition:fly={{x: -200,duration: 2000 }}>
            <img src={img} alt="imagem mulher fazendo crossfit na acadêmia" >
        </div>
        <div class="contact__info" transition:fly={{x: 200,duration: 2000 }}>
          <h2>Venha fazer seu <br/>primeiro treino grátis</h2>
          <p>Entre em contato via WhatsApp ou e-mail e fale com um treinador especialista da equipe.</p>
          <div class="contact__btns">
            <a href="https://api.whatsapp.com/send?phone=5521986828876" class="btn">WhatsApp</a>
            <a href="mailto:erick.marllon@outlook.com.br?subject=Quero conhecer mais sobre seus projetos." class="btn">Email</a>
          </div>
        </div>
        {/if}
    </div>

</section>

<style>
    .contact {
      margin-top: 90px;
      
    }
    .contact__wrapper {
      max-width: 1200px;
      min-height: 252px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      align-items: center;
      padding: 0 20px;
    }
    .contact__img {
      position: relative;
    }
    .contact__img,.contact__info {
      flex-basis: calc(40% - 10px);
    }
    
    .contact__img::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: var(--overlay);
      border-radius: 16px;
    }
    img {
      border-radius: 16px;
      height: auto;
    }
    p {
      margin-top: 16px;
      max-width: 360px;
    }
    h2 {
      font-size: calc(36 / 16 * 1rem);
    }
    .contact__btns {
      margin-top: 24px;
      display: flex;
      gap: 8px;
    }
    
    @media(max-width: 800px) {
      .contact__wrapper {
        grid-template-columns: 1fr;
        justify-items: center;
      }
      .contact__btns{
        align-items: center;
        justify-content: center;
      }
      h2, p {
        text-align: center;
        width: 100%;
      }
    }
    </style>
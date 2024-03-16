<script>
  import { page } from '$app/stores';
  import brand from '$assets/brand.jpg';
  import { Hamburger } from 'svelte-hamburgers';
  import { fly } from 'svelte/transition';
  $: current = $page.route.id;
  let open=false;

  function toggleMobileMenu() {
    open = !open;
  }
</script>

<header class="header">
    <div class="header__wrapper wrap">
      <div class="content__menu_mobile" >
        <Hamburger bind:open --color="white" />
      </div>
      <a href="/" class="brand"><img src={brand} alt=" logo com o nome da academia"></a>
      <nav>
        <ul>
          <li>
            <a href="/" class:active={current === '/'}>Home</a>
          </li>
          <li>
            <a href="/sobre" class:active={current === '/sobre'}>Sobre</a>
          </li>
          <li>
            <a href="/modalidades" class:active={current === '/modalidades' || current === '/modalidades/[slug]'}>Modalidades</a>
          </li>
          <li>
            <a href="#contato" class="header__btn btn">contato</a>
          </li>
        </ul>
      </nav>
      {#if open} 
      <nav class:ismobile={open} transition:fly={{ x: -1000, duration: 200 }}>
        <ul>
          <li>
            <a href="/" class:active={current === '/'} on:click={toggleMobileMenu}>Home</a>
          </li>
          <li>
            <a href="/sobre" class:active={current === '/sobre'} on:click={toggleMobileMenu}>Sobre</a>
          </li>
          <li>
            <a href="/modalidades" class:active={current === '/modalidades' || current === '/modalidades/[slug]'} on:click={toggleMobileMenu}>Modalidades</a>
          </li>
          <li>
            <a href="#contato" class="header__btn btn" on:click={toggleMobileMenu}>contato</a>
          </li>
        </ul>
      </nav>
      {/if}
    </div>
  </header>
  
  <style>

    .header__btn {
      border-color: var(--subtle);
    }
    .header__btn:hover {
      border-color: #fff;
    }
    .header__wrapper {
      display: flex;
      align-items: center;
      min-height: 120px;
      max-width: 1200px;
      padding: 0 20px;
    }
    .content__menu_mobile {
      display: none;
    }
    .brand {
      max-width: 277px;
      padding: 0;
    }
    nav {
      margin-left: auto;
    }
    ul {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    a {
      color: #fff;
    }
    a:not(.btn):hover {
      text-decoration: underline;
    }
    a.active,
    a.active:hover {
      text-decoration: underline;
      text-decoration-color: var(--subtle);
    }

    @media(max-width: 800px) {
      .header__wrapper {
        justify-content: center;
        width: 100%;
        overflow-x: hidden;
      }
      .content__menu_mobile {
      left: 0;
      position: absolute;
      display: block;
    }

      nav {
        left: 0;
        top: 120px;
        display: none;
      }
      .brand {
      max-width: 200px;
    }
      nav.ismobile{
        display: flex;
        position: absolute;
        z-index: 10;
        width: 100%;
        padding-bottom: 30px;
        background-color: var(--bgt);
      }
      ul{
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        gap: 0px;
      }
      li{
        padding-left: 20px;
        width: 100%;
        } 
        a{
        width: 100%;
          padding: 10px  100%  10px 0;
        }
        .btn{
          width: auto;
          padding: 6px 12px;
          margin-top: 5px;
        }
  } 
  </style>
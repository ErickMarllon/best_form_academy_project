<script lang="ts">
    export let title: string;
    export let background: string;
    export let content: string;
    export let btn: string;
    export let href: string;
    import { fly } from 'svelte/transition';
</script>

<section class='intro' style="background-image: url({background});">
   <div class="intro__wrapper wrap">
    <h1 in:fly={{y: -12, duration: 350, delay: 125}}>{@html title} </h1>
    <p in:fly={{y: -24, duration: 700, delay: 125}}>{content}</p>
    {#if btn && href}
        <a class="btn" href={href}>{btn}</a>
    {/if}
   
    </div>
</section>

<style>
    .intro {
      min-height: 360px;
      background-size: cover;
      background-position: center;
      display: grid;
      align-content: center;
      justify-content: center;
      position: relative;
    }
    .intro::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: var(--overlay);
    }
    .intro__wrapper {
      z-index: 1;
      text-align: center;
    }
    .btn {
      margin-top: 24px;
    }
    p {
      font-size: calc(18 / 16 * 1rem);
      margin-top: 16px;
    }
    @media(max-width: 800px) {
      .intro {
        justify-content: center;

      }
      .intro__wrapper {
      z-index: 1;
      max-width: 400px;
      text-align: center;
    }
    }
  </style>
<script>
    import Contact from '$lib/components/Contact.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    import '@fontsource-variable/cabin';
    import '@fontsource/roboto-condensed/700.css';
    import '../global.css';
</script>

    <Header/>
    <slot/>
    <Contact/>
    <Footer/>
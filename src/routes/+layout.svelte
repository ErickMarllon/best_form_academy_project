<script>
    import '@fontsource-variable/cabin';
    import '@fontsource/roboto-condensed/700.css';
    import Contact from '$components/Contact.svelte';
    import Footer from '$components/Footer.svelte';
    import Header from '$components/Header.svelte';
    import './global.css';
</script>

    <Header/>
    <slot/>
    <Contact/>
    <Footer/>
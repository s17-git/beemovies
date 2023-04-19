<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
    <header>
        <Navbar />
    </header>
    <main>
        <routerView />
    </main>
</template>

<style scoped>
main {
    max-width: 70vw;
    max-height: 100vh;
    margin: auto;
}
</style>

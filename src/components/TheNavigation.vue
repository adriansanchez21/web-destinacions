<template>
    <nav>
        <ul>
            <RouterLink to="/"><h2>Home</h2></RouterLink>
            <RouterLink v-for="location in locations" :key="location.id"
                :to="{ name: 'destination.show', params: { id: location.id } }">
                <h2>{{ location.name }}</h2>
            </RouterLink>
        </ul>
    </nav>

    <!-- <section>
        <h1>All destinations</h1>
    </section> -->
</template>

<script setup lang="ts">
import dades from "@/data/data.json"
import { ref } from "vue";
const locations = ref(dades.destinations)
</script>
<style scoped>
nav {
    width: 100%;
    background-color: #2C3E50;
}

li {
    display: inline-block;
    margin: 2%;
    color: white;
}

h1 {
    margin-top: 50px;
    margin-left: 2%;
}

a {
    color: white;
    display: inline-block;
    margin: 20px;
    text-decoration: none;
}
</style>
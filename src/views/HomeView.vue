<script setup lang="ts">
import dades from "@/data/data.json"
import { ref } from 'vue'
const info = ref(dades.destinations)
</script>

<template>
    <h2>All destinations</h2>
    <div class="home">
        <RouterLink v-for="destination in info" :key="destination.id"
            :to="{ name: 'destination.show', params: { id: destination.id } }">
            <h2 class="destination-name">{{ destination.name }}</h2>
            <img :src="`./img/${destination.image}`" alt="destination.img">
        </RouterLink>
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    justify-content: space-around;
}

img {
    width: 300px;
}

h2 {
    color: #2C3E50;
    padding: 20px;
}

a:link, a:visited, a:active {
    text-decoration: none;
}
</style>
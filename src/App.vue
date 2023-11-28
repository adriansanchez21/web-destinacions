<template>
  <header>
    <TheNavigation></TheNavigation>
  </header>
  <div class="container">
    <RouterView/>
  </div>
</template>

<script setup lang="ts">
import dades from "@/data/data.json"
import { ref } from "vue";
const info = ref(dades.destinations)
import TheNavigation from './components/TheNavigation.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Nunito Sans', sans-serif;
}
</style>
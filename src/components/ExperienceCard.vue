<script setup lang="ts">
import dades from "@/data/data.json";
import { computed } from 'vue';


const props = defineProps({
  destinationId: Number
});


const locations = computed(() => dades);


const currentDestination = computed(() =>
  locations.value.destinations.find(dest => dest.id === props.destinationId)
);

const experiences = computed(() => {
  const destination = currentDestination.value;
  return destination ? destination.experiences.slice(0, 4) : [];
});
</script>

<template>
  <div>
    <p>ID que rep: {{ destinationId }}</p>
    <div v-for="experience in experiences" :key="experience.slug">
      <p>{{ experience.name }}</p>
      <p>{{ experience.description }}</p>
      <img :src="`../img/${experience.image}`" width="60" alt="">
    </div>
  </div>
</template>

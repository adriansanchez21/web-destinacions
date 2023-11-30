<template>
    <div>
        <p>id: {{ props.id }}</p>
        <p>slug: {{props.slug }}</p>
        <p>{{ destination }}</p>
    </div>
</template>
  
<script setup lang="ts">
import dades from "@/data/data.json"
import { computed } from "vue";


const props = defineProps({
    id: Number,
    slug: String,
});

const destination = computed(() =>
    dades.destinations.find((dest) => dest.id === props.id)
)

// const experience = computed(() =>
    
// )
</script>
  
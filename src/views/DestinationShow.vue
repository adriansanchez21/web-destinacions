<script setup lang="ts">
import dades from "@/data/data.json"
import { computed, reactive } from "vue";
import ExperienceCard from "../components/ExperienceCard.vue"
const locations = reactive(dades)

const props = defineProps(['id'])

const destination = computed(() =>
    dades.destinations.find((dest) => dest.id === props.id)
)


</script>
<template>
    <h1>{{ destination?.name }}</h1>

    <div class="container-info-destination">
        <div class="destination-img">
            <img :src="`../img/${destination?.image}`" alt="">
        </div>
        <div class="destination-info">
            <p>{{ destination?.description }}</p>
        </div>
    </div>



    <h1>Top experiences in {{ destination?.name }}</h1>
    <section class="container-experiences" v-if="destination">
        <RouterLink v-for="experience in destination.experiences" :key="experience.slug"
            :to="{ name: 'experience.show', params: { slug: experience.slug } }">
            <div class="experience-container">
                <img :src="`../img/${experience.image}`" width="60" class="img-experience" alt="">
                <p class="experience-name">{{ experience.name }}</p>
            </div>
        </RouterLink>
    </section>
    <RouterView></RouterView>
</template>



<style scoped>
img {
    width: 600px;
}

h1 {
    padding: 50px;
    padding-left: 5%;
}

.container-info-destination, .container-experiences {
    display: flex;
    margin: 0 auto;
    width: 90%;
    margin-bottom: 100px;
}

.destination-img {
    width: 40%;
}

.destination-info {
    width: 60%;
}

.destination-info p {
    padding: 50px;
}

.experience-container {
    width: 75%;
}

.img-experience {
    max-width: 100%;
    height: 200px;
    display: block;
}

.experience-name {
    background-color: #2C3E50;
    color: white;
    text-decoration: none;
}
</style>
<script setup lang="ts">
import dades from "@/data/data.json"
import { computed, reactive } from "vue";
import ExperienceCard from "../components/ExperienceCard.vue"
const locations = reactive(dades)

const props = defineProps(['id'])

const destination = computed(()=>
    dades.destinations.find((dest)=> dest.id === props.id)
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



  <!-- <section v-if="destination" id="top-experiences">
    <h2>Top experiences in {{ destination.name }}</h2>
    <template v-for="experience in destination.experiences" :key="experience.slug">
      <RouterLink :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }">
        <ExperienceCard :destinationId="destination.id" />
        <h2>{{ experience.name }}</h2>
      </RouterLink>
    </template>
  </section> -->




    <section v-if="destination" id="top-experiences">
        <!-- <h2>Top experiences in {{ destination.name }}</h2>
        <ExperienceCard :destinationId="destination.id" />
        <RouterLink v-for="experience in destination.experiences" :key="experience.slug"
            :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }">
            <h2>{{ locations.destinations[props.id].experiences }}</h2>
        </RouterLink> -->
    </section>
        <!-- Fer routerlink v-for embolicant aquest experience card passant un argument per paràmetre -->
        <ExperienceCard :destinationId="destination?.id" />

</template>



<style scoped>
img {
    width: 600px;
}

h1 {
    padding: 50px;
    padding-left: 5%;
}

.container-info-destination {
    display: flex;
    margin: 0 auto;
    width: 90%;
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
</style>
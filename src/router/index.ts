import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView
    },
    {
      path: "/destination/:id",
      name: "destination.show",
      component: () => import('@/views/DestinationShow.vue'),
      props: route => ({...route.params, id: parseInt(route.params.id as string)}),
    },
    // {
    //   path: "/destination/:id/:slug",
    //   name: "destination.show",
    //   component: ()=>import('@/views/DestinationShow.vue'),
    //   props: route=>({...route.params, id:parseInt(route.params.id as string)}),

    //   children: [
    //     {
    //       path: "experienceSlug",
    //       name: "experience.show",
    //       component: ()=>import('@/views/ExperienceShow.vue'),
    //       props: route=>({...route.params, slug: parseInt(route.params.slug)})
    //     }
    //   ]
    // }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue'); //note dynamic import
const About = () => import('../views/About.vue'); //note dynamic import
const Movies = () => import('../views/movies/Index.vue'); //note dynamic import
const Movie = () => import('../views/movies/Show.vue'); 

const router = createRouter({
    history: createWebHistory(),
    //this can be detached into a separate varieble
    routes: [
        {path: '/', component: Home},
        {path: '/movies', component: Movies},
        {path: '/movies/:id', component: Movie, name: 'movie'},
        {path: '/about', component: About},
    ]
});

//don't forget to export the router.
export default router;

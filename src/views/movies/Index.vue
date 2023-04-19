<template>
  <section class="movies">
    <routerLink v-for="movie in data" :key="movie.id" :to="{name: 'movie', params: {id: movie.id}}">
      <Movie :movie="movie" />
    </routerLink>
  </section>
  </template>
  
  <script setup>
  import { useReadMovie } from '../../movies/index.js';
  import Movie from '../../components/movies/Movie.vue';

  const { data, error, isLoading } = useReadMovie('movies');

  
  </script>
  
  <style scoped>
  .movies {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
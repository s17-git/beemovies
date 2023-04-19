<template>
  <div class="movie">
    <img :src="movie.posterUrl" alt="Movie">
    <div class="movie__content">
      <h2>{{ movie.title }}</h2>
      <div>
        <div>
          <span>Year</span>
          <strong>{{ movie.year }}</strong>
        </div>
        <div>
          <span>Runtime</span>
          <strong>{{ movie.runtime }}</strong>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  movie: Object
});
</script>
<style scoped>

</style>
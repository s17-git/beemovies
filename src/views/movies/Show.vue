<template>
    <pre>
        {{ data }}
    </pre>
</template>
<script setup>
import { useRoute } from 'vue-router';

import { useReadMovie } from '../../movies/index.js';

const route = useRoute();

const {data, isLoading, error} = useReadMovie(`movies/${route.params.id}`);


</script>

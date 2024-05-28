<script setup>
import { ref } from "vue";

const page = ref(1);
</script>

<template>
	<RouterLink to="/article" class="homepage">To Articles</RouterLink>
</template>

<style scoped lang="scss">
.homepage {
	height: 3000px;
}
</style>

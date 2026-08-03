<script setup lang="ts">
import { useGallery } from './composables/useGallery';

const { files, getFiles } = useGallery();

getFiles();
</script>

<template>
	<h1>Hello World</h1>
	<template v-for="file in files">
		<img :src="file" alt="Child Po" />
	</template>
</template>

<script setup lang="ts">
import { useGallery } from './composables/useGallery';
import { createUrl } from './lib/createUrl';

const { files, getFiles } = useGallery();

getFiles();
</script>

<template>
	<h1>Hello World</h1>
	<template v-for="file in files">
		<img :src="createUrl(file)" alt="Child Po" />
	</template>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import JustifiedGallery from './components/JustifiedGallery.vue';
import { useGallery } from './composables/useGallery';
const { files, getFiles } = useGallery();

getFiles();
const { width } = useWindowSize();
</script>

<template>
	<h1>Hello World</h1>
	<div class="flex flex-col items-center justify-center">
		<JustifiedGallery v-if="files.length" :items="files" :width="width" />
	</div>
</template>

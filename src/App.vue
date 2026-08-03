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
	<JustifiedGallery v-if="files.length" :items="files" :width="width" />
	<p class="text-center">contribute <a class="text-blue-500 hover:underline" target="_blank"
			href="https://github.com/kirurr/child-po-gallery">https://github.com/kirurr/child-po-gallery</a></p>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import JustifiedGallery from './components/JustifiedGallery.vue';
import { useGallery } from './composables/useGallery';
import FullscreenModal from './components/FullscreenModal.vue';
const { files, getFiles } = useGallery();

getFiles();
const { width } = useWindowSize();
</script>

<template>
	<main>
		<div class="my-8">
			<h1 class="text-center text-[clamp(2.5rem,12vw,6rem)]/[1.1] mb-2 font-bold tracking-wide flex items-center justify-center gap-1"><span
					class="pb-2">Child</span><span class="bg-accent px-1 pb-2 rounded-md text-bg">Po</span><span
					class="text-text-muted pb-2">Gallery</span></h1>
			<p class="text-center text-xl">Wanna add your chlid po images? <a class="focus-ring text-accent hover:underline" target="_blank"
					href="https://github.com/kirurr/child-po-gallery/issues/new">Click here</a></p>
		</div>

		<JustifiedGallery v-if="files.length" :items="files" :width="width" />

		<FullscreenModal />
	</main>
</template>

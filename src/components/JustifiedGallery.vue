<script setup lang="ts">
import { computed } from 'vue';
import { createUrl } from '../lib/createUrl';
import type { GalleryImage } from '../lib/types';
import layout from 'justified-layout';

const props = defineProps<{
	items: GalleryImage[];
	width: number;
}>();

const geometry = computed(() => {
	const aspectRatios = props.items.map((item) => item.aspectRatio);
	return layout(aspectRatios, {
		containerWidth: props.width,
		containerPadding: 20

	});
});

const images = computed(() => {
	return props.items.map((item, index) => ({
		url: createUrl(item.path),
		...geometry.value.boxes[index]
	}));
});
</script>

<template>
	<div class="relative w-full h-full">
		<img v-for="(image, index) in images" :key="index" :src="image.url" :style="{
			position: 'absolute',
			width: `${image.width}px`,
			height: `${image.height}px`,
			top: `${image.top}px`,
			left: `${image.left}px`
		}" />
	</div>
</template>

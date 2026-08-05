<script setup lang="ts">
import { computed } from 'vue';
import { createUrl } from '../lib/createUrl';
import type { GalleryImage } from '../lib/types';
import layout from 'justified-layout';
import { useFullscreenModal } from '../composables/useFullscreenModal';

const props = defineProps<{
	items: GalleryImage[];
	width: number;
}>();

const { openModal } = useFullscreenModal();

const geometry = computed(() => {
	const aspectRatios = props.items.map((item) => item.aspectRatio);
	return layout(aspectRatios, {
		containerWidth: props.width,
		containerPadding: 20

	});
});
const height = computed(() => `${Math.round(geometry.value.containerHeight)}px`);

const images = computed(() => {
	return props.items.map((item, index) => ({
		url: createUrl(item.path),
		...geometry.value.boxes[index]
	}));
});
</script>

<template>
	<div class="relative w-full" :style="{
		height: height
	}">
		<img @click.prevent="openModal(image.url)" v-for="(image, index) in images" :key="index" :src="image.url" :style="{
			position: 'absolute',
			width: `${image.width}px`,
			height: `${image.height}px`,
			top: `${image.top}px`,
			left: `${image.left}px`
		}" />
	</div>
</template>

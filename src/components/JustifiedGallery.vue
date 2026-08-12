<script setup lang="ts">
import { computed } from 'vue';
import { createUrl } from '../lib/createUrl';
import type { GalleryImage } from '../lib/types';
import layout from 'justified-layout';
import { useFullscreenModal } from '../composables/useFullscreenModal';
import { IMAGE_TRANSITION_NAME } from '../lib/viewTransition';

const props = defineProps<{
	items: GalleryImage[];
	width: number;
}>();

const { openModal, visible, morphingUrl } = useFullscreenModal();

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
		<button @click="openModal(image.url)"
			v-for="(image, index) in images"
			:key="index"
			type="button"
			class="focus-ring absolute cursor-pointer"
			:style="{
				width: `${image.width}px`,
				height: `${image.height}px`,
				top: `${image.top}px`,
				left: `${image.left}px`
			}">
			<img class="h-full w-full rounded-md object-cover" :src="image.url" :alt="`Gallery image ${index + 1}`"
				:style="{
					viewTransitionName: !visible && morphingUrl === image.url ? IMAGE_TRANSITION_NAME : undefined
				}" />
		</button>
	</div>
</template>

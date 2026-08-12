<script setup lang="ts">
import { useTemplateRef, watch } from 'vue';
import { useScrollLock } from '@vueuse/core';
import { useFullscreenModal } from '../composables/useFullscreenModal';
import { IMAGE_TRANSITION_NAME } from '../lib/viewTransition';

const { visible, url, closeModal } = useFullscreenModal();
const dialog = useTemplateRef<HTMLDialogElement>('dialog');
const scrollLocked = useScrollLock(document.documentElement);

watch(visible, (isVisible) => {
	scrollLocked.value = isVisible;

	const el = dialog.value;
	if (!el) return;

	if (isVisible && !el.open) el.showModal();
	else if (!isVisible && el.open) el.close();
});

function onClick(event: MouseEvent) {
	if (event.target === dialog.value) closeModal();
}
</script>

<template>
	<dialog ref="dialog" @close="closeModal" @cancel.prevent="closeModal" @click="onClick"
		class="m-auto max-h-[100dvh] max-w-[100vw] bg-transparent p-0 focus:outline-none backdrop:bg-black/80">
		<button @click="closeModal" type="button" aria-label="Close" autofocus
			class="focus-ring fixed top-4 right-4 cursor-pointer text-text-muted transition-colors hover:text-text">
			<svg class="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
				stroke-linecap="round">
				<path d="M6 6 18 18M18 6 6 18" />
			</svg>
		</button>
		<img v-if="url" :src="url" alt="gallery" class="md:min-h-[50vh] max-h-[96dvh] max-w-[96vw] rounded-md object-contain"
			:style="{ viewTransitionName: IMAGE_TRANSITION_NAME }" />
	</dialog>
</template>

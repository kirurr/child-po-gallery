<script setup lang="ts">
import { useTemplateRef, watch } from 'vue';
import { useScrollLock } from '@vueuse/core';
import { useFullscreenModal } from '../composables/useFullscreenModal';

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
	<dialog ref="dialog" @close="closeModal" @click="onClick"
		class="m-auto max-h-[90dvh] max-w-[90vw] bg-transparent p-0 backdrop:bg-black/80">
		<img v-if="url" :src="url" alt="gallery" class="max-h-[90dvh] max-w-[90vw] object-contain" />
	</dialog>
</template>

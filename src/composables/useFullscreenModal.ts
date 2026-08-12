import { nextTick, ref } from "vue";
import { withViewTransition } from "../lib/viewTransition";

const visible = ref<boolean>(false);
const imageUrl = ref<string>('');

const morphingUrl = ref<string>('');

export const useFullscreenModal = () => {
	async function openModal(url: string) {
		morphingUrl.value = url;
		await nextTick();

		await withViewTransition(async () => {
			imageUrl.value = url;
			visible.value = true;
			await nextTick();
		});
	};

	async function closeModal() {
		if (!visible.value) return;

		await withViewTransition(async () => {
			visible.value = false;
			await nextTick();
		});

		morphingUrl.value = '';
	};

	return {
		visible,
		url: imageUrl,
		morphingUrl,
		openModal,
		closeModal
	};
};

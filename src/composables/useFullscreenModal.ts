import { ref } from "vue";

const visible = ref<boolean>(false);
const imageUrl = ref<string>('');

export const useFullscreenModal = () => {
	function openModal(url: string) {
		visible.value = true;
		imageUrl.value = url;
	};

	function closeModal() {
		visible.value = false;
	};

	return {
		visible,
		url: imageUrl,
		openModal,
		closeModal
	};
};

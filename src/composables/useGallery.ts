import { ref } from "vue";

export const useGallery = () => {
	const files = ref<string[]>([]);

	async function getFiles() {
		const res = await fetch('/gallery.json');
		const data = await res.json() as string[];
		files.value.push(...data);
	}

	return {
		files,
		getFiles
	}
}

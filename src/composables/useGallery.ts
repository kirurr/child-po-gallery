import { ref } from "vue";
import { createUrl } from "../lib/createUrl";

export const useGallery = () => {
	const files = ref<string[]>([]);

	async function getFiles() {
		const res = await fetch(createUrl("gallery.json"));
		const data = await res.json() as string[];
		files.value.push(...data);
	}

	return {
		files,
		getFiles
	}
}

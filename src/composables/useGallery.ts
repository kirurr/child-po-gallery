import { ref } from "vue";
import { createUrl } from "../lib/createUrl";
import type { GalleryImage } from "../lib/types";

export const useGallery = () => {
	const files = ref<GalleryImage[]>([]);

	async function getFiles() {
		const res = await fetch(createUrl("gallery.json"));
		const data = await res.json() as GalleryImage[];
		files.value.push(...data);
	}

	return {
		files,
		getFiles
	}
}

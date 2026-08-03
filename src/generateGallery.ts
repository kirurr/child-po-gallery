import { readdirSync, writeFileSync } from "fs";
import type { GalleryImage } from "./lib/types";
import sharp from "sharp";
import { join } from "path";

const folderPath = "./public/images/";

const files = readdirSync(folderPath);

const filesMetadata: GalleryImage[] = []
for (const file of files) {
	filesMetadata.push(await getImageData(file));
}

const galleryPath = "./public/gallery.json"

writeFileSync(galleryPath, JSON.stringify(filesMetadata));


async function getImageData(path: string): Promise<GalleryImage> {
	const filepath = join(folderPath, path);

	const metadata = await sharp(filepath).metadata();

	return {
		path: `images/${path}`,
		height: metadata.height,
		width: metadata.width,
		aspectRatio: Math.round((metadata.width / metadata.height) * 10) / 10,
	};
}

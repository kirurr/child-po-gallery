import { readdirSync, writeFileSync } from "fs";

const folderPath = "./public/";

const files = readdirSync(folderPath);

const galleryPath = "./public/gallery.json"

writeFileSync(galleryPath, JSON.stringify(files));


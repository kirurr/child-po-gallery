import { Octokit } from "octokit";

export const useGallery = () => {
	const octokit = new Octokit();
	const files: [] = [];

	async function getFiles() {
		const { data } = await octokit.rest.repos.getContent({
			owner: "kirurr",
			repo: "child-po-gallery",
			path: "public",
		})

		console.log(data)
	}

	return {
		files,
		getFiles
	}
}

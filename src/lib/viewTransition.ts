export const IMAGE_TRANSITION_NAME = 'fullscreen-image';

type ViewTransitionDocument = Document & {
	startViewTransition?: (update: () => void | Promise<void>) => { finished: Promise<void> };
};

export async function withViewTransition(update: () => void | Promise<void>) {
	const doc = document as unknown as ViewTransitionDocument;

	if (!doc.startViewTransition) {
		await update();
		return;
	}

	await doc.startViewTransition(update).finished;
}

import { modalidades } from '$stores';

export function load({ params }: { params: { slug: string } }) {
	const data = modalidades.find((e) => e.slug === params.slug);
	return data;
}

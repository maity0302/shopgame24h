export default function ProductDetailPage({
	params,
}: {
	params: { slug: string };
}) {
	return (
		<div>
			<h1>Product Detail Page</h1>
			<p>Product slug: {params.slug}</p>
		</div>
	);
}

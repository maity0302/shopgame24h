"use client";

import React from "react";
import ProductCard from "@/components/ProductCard";

// Dữ liệu sản phẩm
const products = [
	{
		id: "1",
		name: "Tài khoản Liên Quân 1 ád akd aks dkask dka dkask dkas kdak sdk",
		price: 10,
		game: "Liên Quân",
		image: "https://picsum.photos/seed/lienquanmoi1/150",
		title: "Liên Quân Account 1  ád akd aks dkask dka dkask dkas kdak sdk",
		description: "A premium Liên Quân account with exclusive features.",
	},
	{
		id: "2",
		name: "Tài khoản Free Fire 2",
		price: 15,
		game: "Free Fire",
		image: "https://picsum.photos/seed/freefire2/150",
		title: "Free Fire Account 2",
		description: "An advanced Free Fire account for competitive gaming.",
	},
	{
		id: "3",
		name: "Tài khoản PUBG 3",
		price: 20,
		game: "PUBG Mobile",
		image: "https://picsum.photos/seed/pubg3/150",
		title: "PUBG Mobile Account 3",
		description: "A PUBG Mobile account with rare skins and items.",
	},
	{
		id: "4",
		name: "Tài khoản Võ Lâm 4",
		price: 25,
		game: "Võ Lâm Truyền Kỳ",
		image: "https://picsum.photos/seed/volam4/150",
		title: "Võ Lâm Account 4",
		description: "A Võ Lâm Truyền Kỳ account with high-level characters.",
	},
	{
		id: "5",
		name: "Tài khoản Genshin 5",
		price: 30,
		game: "Genshin Impact",
		image: "https://picsum.photos/seed/genshin5/150",
		title: "Genshin Impact Account 5",
		description: "A Genshin Impact account with rare characters and weapons.",
	},
	{
		id: "6",
		name: "Tài khoản Fifa Online 6",
		price: 20,
		game: "Fifa Online 4",
		image: "https://picsum.photos/seed/fifaonline6/150",
		title: "Fifa Online Account 6",
		description: "A Fifa Online 4 account with top-tier players.",
	},
];

export default function Page() {
	return (
		<div className="theme-zinc w-full min-h-screen py-4 lg:py-6 xl:py-8">
			<div className=" mx-auto px-4 lg:px-6 xl:px-8">
				<h2 className="text-2xl font-bold mb-4">Mới nhất</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
}

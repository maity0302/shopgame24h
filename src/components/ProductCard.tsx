"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Product {
	id: string;
	title: string;
	description: string;
	price: number;
	image: string;
	game: string;
}

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			<Card className="overflow-hidden border-2 h-full flex flex-col -py-6 pb-6">
				<div className="relative pt-4 px-4">
					{product.game && (
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.2 }}
							className="absolute top-6 right-6 z-10"
						>
							<Badge variant="destructive">{product.game}</Badge>
						</motion.div>
					)}
					<motion.div
						className="relative h-[200px] w-full overflow-hidden rounded-lg bg-muted"
						animate={{ scale: isHovered ? 1.05 : 1 }}
						transition={{ duration: 0.3 }}
					>
						<Image
							src={product.image || "/placeholder.svg"}
							alt={product.title}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</motion.div>
				</div>
				<CardContent className="flex-grow">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.1 }}
					>
						{/* Giới hạn title hiển thị 1 hàng */}
						<h3 className="font-semibold text-lg mb-2 truncate">
							{product.title}
						</h3>

						{/* Giới hạn description hiển thị 2 dòng */}
						<p className="text-muted-foreground text-sm mb-4 line-clamp-2">
							{product.description}
						</p>

						<p className="font-bold text-xl">${product.price.toFixed(2)}</p>
					</motion.div>
				</CardContent>
				<CardFooter className="pt-0">
					<motion.div
						className="w-full flex gap-2"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						{/* Nút Xem ngay */}
						<Button asChild variant="outline" className="flex-1">
							<Link href={`/product/${product.id}`}>Chi tiết</Link>
						</Button>

						{/* Nút Mua ngay */}
						<Button className="flex-1 gap-2">
							<ShoppingCart className="h-4 w-4" />
							Mua ngay
						</Button>
					</motion.div>
				</CardFooter>
			</Card>
		</motion.div>
	);
}

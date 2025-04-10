import type React from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Header */}
			<header className="bg-blue-600 text-white py-4">
				<div className="container mx-auto px-4">
					<h1 className="text-xl font-bold">ShopGame24h</h1>
				</div>
			</header>

			{/* Main Content */}
			<main className="flex-grow container mx-auto px-4 py-6">{children}</main>

			{/* Footer */}
			<footer className="bg-gray-800 text-white py-4">
				<div className="container mx-auto px-4 text-center">
					<p>&copy; 2025 ShopGame24h. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default Layout;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col w-full h-full">
			<div className="flex-1">{children}</div>
		</div>
	);
}

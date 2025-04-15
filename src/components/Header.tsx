import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Removed Avatar imports
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export default function Header() {
	const isLoggedIn = true;
	const userImageUrl = "https://github.com/shadcn.png"; // Example image URL

	return (
		<header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
			<SidebarTrigger className="-ml-1" />
			<div className="flex items-center gap-2">
				{/* Logo */}
				<img
					src="/images/logo.png"
					alt="Shopgame24h Logo"
					className="h-8 w-8"
				/>
				<h1 className="uppercase font-bold text-lg">Shopgame24h</h1>
			</div>
			{isLoggedIn ? (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
                        {/* Start HeroUI Avatar */}
                        <button type="button" className="relative inline-flex items-center justify-center size-8 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            {userImageUrl ? (
                                <img className="size-8 rounded-full object-cover" src={userImageUrl} alt="User avatar" />
                            ) : (
                                // Fallback using Lucide User icon or initials
                                // Option 1: Lucide Icon (adjust styling as needed)
                                // <User className="size-5 text-gray-500 dark:text-gray-400" />
                                // Option 2: Initials (example)
                                <span className="text-sm font-medium leading-none text-gray-700 dark:text-gray-200">SN</span>
                            )}
                        </button>
                        {/* End HeroUI Avatar */}
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
						<DropdownMenuItem>Quản lý tài khoản</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Đăng xuất</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			) : (
				<Link href="/login">
					<Button>Đăng nhập</Button>
				</Link>
			)}
		</header>
	);
}

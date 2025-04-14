import type * as React from "react";
import Link from "next/link";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";

const userData = {
	name: "Mai Tuyen",
	balance: 1234.56,
};

// Optimized data structure - Removed navMain
const data = [
	{
		title: "Tài khoản",
		url: "/account/deposit",
		items: [
			{
				title: "Thông tin tài khoản",
				url: "/account",
			},
			{
				title: "Nạp tiền",
				url: "/account/deposit",
			},
			{
				title: "Rút tiền",
				url: "/account/withdraw",
			},
		],
	},
	{
		title: "Lịch sử", // Changed title
		url: "#", // Parent URL remains # as it's a group
		items: [
			{
				title: "Tài khoản đã mua",
				url: "/account/purchase-history",
			},
			{
				title: "Lịch sử nạp tiền",
				url: "/account/deposit-history",
				isActive: true, // isActive removed or managed dynamically
			},
		],
	},
	{
		title: "Khác",
		url: "#",
		items: [
			{
				title: "Cộng tác viên",
				url: "/collaborator",
			},
		],
	},
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader>
				{/* Display Username and Balance */}
				<div className="flex flex-col p-4 border-b border-border">
					<span className="font-semibold text-lg">{userData.name}</span>
					<span className="text-sm text-muted-foreground">
						Số dư: ${userData.balance.toLocaleString()}
					</span>
				</div>
			</SidebarHeader>
			<SidebarContent>
				{/* Updated map to iterate over data directly */}
				{data.map((item) => (
					<SidebarGroup key={item.title}>
						<SidebarGroupLabel>{item.title}</SidebarGroupLabel>
						{/* Check if items exist before mapping */}
						{item.items && item.items.length > 0 && (
							<SidebarGroupContent>
								<SidebarMenu>
									{item.items.map((subItem) => (
										<SidebarMenuItem key={subItem.title}>
											<SidebarMenuButton asChild isActive={subItem.isActive}>
												<Link href={subItem.url}>{subItem.title}</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						)}
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex min-h-screen flex-col">
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        {children}
        <Footer />
      </SidebarInset>
    </SidebarProvider>

  </div>;
}

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Header = () => {
    return (
        <header className="container py-4">
         <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem asChild>
              <Link href="/" className={NavigationMenuLink.className}>Home</Link>
            </NavigationMenuItem>
                    <NavigationMenuItem >
                        <NavigationMenuTrigger>Examples</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuList>
                                <NavigationMenuItem asChild>
                                    <Link href="/examples/dashboard" className={NavigationMenuLink.className}>Dashboard</Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem asChild>
                                    <Link href="/examples/forms" className={NavigationMenuLink.className}>Forms</Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
      </header>
    );
};

export default Header;
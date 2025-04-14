import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-muted-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are dedicated to providing high-quality products and excellent customer service. Our mission is to...
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li><Link href="#" className="hover:text-primary">Home</Link></li>
              <li><Link href="#" className="hover:text-primary">Products</Link></li>
              <li><Link href="#" className="hover:text-primary">About</Link></li>
              <li><Link href="#" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Section 3: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
            <p className="text-sm mb-2">Stay updated with our latest offers and news.</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="mr-2" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="mt-12 pt-6 border-t border-muted-foreground/20 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-primary"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-primary"><Instagram className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
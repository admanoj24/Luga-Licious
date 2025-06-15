"use client";

import * as React from "react";
import Link from "next/link";
import { Info, CircleCheckIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[300px]">
              <ListItem title="All Products" href="/shop">
                Browse our full collection of trendy and comfortable wear.
              </ListItem>
              <ListItem title="New Arrivals" href="/shop/new">
                Check out the latest drops from Luga Licious.
              </ListItem>
              <ListItem title="On Sale" href="/shop/sale">
                Get the best deals on selected clothing and accessories.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[300px]">
              <ListItem title="Men" href="/categories/men">
                Stylish and versatile fashion picks for men.
              </ListItem>
              <ListItem title="Women" href="/categories/women">
                Discover beautiful and bold looks for women.
              </ListItem>
              <ListItem title="Accessories" href="/categories/accessories">
                Complete your outfit with our curated accessories.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about">About Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[300px]">
              <ListItem title="Contact" href="/contact">
                Get in touch with Luga Licious support team.
              </ListItem>
              <ListItem title="FAQs" href="/faqs">
                Frequently asked questions answered here.
              </ListItem>
              <ListItem title="Returns & Shipping" href="/shipping-returns">
                Learn about our return policy and delivery process.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Track Order</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[250px]">
              <NavigationMenuLink asChild>
                <Link href="/track-order" className="flex gap-2 items-center">
                  <CircleCheckIcon size={16} />
                  Order Tracking
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/account" className="flex gap-2 items-center">
                  <Info size={16} />
                  My Account
                </Link>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground text-sm">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

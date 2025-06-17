"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "Women", href: "/women" },
  { name: "Men", href: "/men" },
  { name: "Kids", href: "/kids" },
  { name: "Accessories", href: "/accessories" },
  { name: "Sale", href: "/sale" },
];

export default function NavigationMenuDemo() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cartItemCount = 3; // This would come from your cart state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2 text-sm">
        <p>Free shipping on orders over $75 | Use code: LUGA20 for 20% off</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">LL</span>
                    </div>
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-bold">
                      Luga-licious
                    </span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="text-lg font-medium hover:text-pink-600 transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
                <div className="pt-4 border-t space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full"
                  >
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                  >
                    <Link href="/register">Create Account</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">LL</span>
            </div>
            <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Luga-licious
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`text-sm font-medium transition-colors hover:text-pink-600 ${
                  category.name === "Sale"
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {category.name}
                {category.name === "Sale" && (
                  <Badge className="ml-1 bg-pink-500 hover:bg-pink-600 text-xs">
                    Hot
                  </Badge>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="hidden sm:flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input
                    type="search"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 h-9"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(false)}
                    className="h-9 w-9"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="h-9 w-9"
                >
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              )}
            </div>

            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="sm:hidden h-9 w-9">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Wishlist</span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative h-9 w-9">
              <ShoppingBag className="h-4 w-4" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-xs flex items-center justify-center p-0">
                  {cartItemCount}
                </Badge>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* Login & Register Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-gray-700 hover:text-pink-600"
              >
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
              >
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile Login & Register */}
            <div className="sm:hidden flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-xs px-2"
              >
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xs px-2"
              >
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client"

import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={"/images/branchdevs-logo.png"} 
              alt="BranchDevs Logo" 
              className="h-10 w-10"
            />
            <span className="font-bold text-xl">BranchDevs</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#home" className="hover:text-primary transition-colors">Home</a>
            <a href="/#services" className="hover:text-primary transition-colors">Services</a>
            <a href="/#about" className="hover:text-primary transition-colors">About</a>
            <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Desktop CTA 
          <div className="hidden md:block">
            <Button>Get Started</Button>
          </div>
          */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="/#home" className="hover:text-primary transition-colors">Home</a>
              <a href="/#services" className="hover:text-primary transition-colors">Services</a>
              <a href="/#about" className="hover:text-primary transition-colors">About</a>
              <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
              {/*<Button className="mt-4">Get Started</Button>*/}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
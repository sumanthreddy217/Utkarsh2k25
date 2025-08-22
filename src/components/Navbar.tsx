import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Fest", href: "/about" },
    { name: "Technical Events", href: "/technical-events" },
    { name: "Crazy Events", href: "/non-technical-events" },
    { name: "Mobile Games", href: "/#mobileGames" },
    { name: "Hackathon", href: "/hackathon" },
    { name: "Contact", href: "/contact" },
  ];

  const eventsItems = [
    { name: "Technical Events", href: "/technical-events" },
    { name: "Crazy Events", href: "/non-technical-events" },
    { name: "Mobile Games", href: "/#mobileGames" },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isFestPage = location.pathname === "/about";

  const navClass = isFestPage
    ? "bg-indigo-900/50 backdrop-blur-md border-b border-pink-500/20"
    : "bg-white/50 backdrop-blur-md border-b border-black/10";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center">
              <img
                src="https://i.postimg.cc/0jgtSZd7/clg-logo.png"
                alt="Clg Logo"
                className="h-14 w-12 object-contain"
              />
            </div>
            <span className="text-2xl utkarsh-title font-bold bg-gradient-primary bg-clip-text text-transparent">
              Utkarsh 2025
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home */}
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? isFestPage
                    ? "text-white bg-white/10 px-3 py-1 rounded-md"
                    : "text-primary bg-primary/10 px-3 py-1 rounded-md"
                  : isFestPage
                  ? "text-white hover:text-white/80"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>

            {/* About Fest */}
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? isFestPage
                    ? "text-white bg-white/10 px-3 py-1 rounded-md"
                    : "text-primary bg-primary/10 px-3 py-1 rounded-md"
                  : isFestPage
                  ? "text-white hover:text-white/80"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              About Fest
            </Link>

            {/* Events Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium transition-colors ${
                    isFestPage
                      ? "text-white"
                      : eventsItems.some((e) => isActive(e.href))
                      ? "text-primary bg-primary/10 px-3 py-1 rounded-md"
                      : "text-muted-foreground hover:text-black"
                  }`}
                >
                  Check Events <FaAngleDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-none shadow-none p-0">
                {eventsItems.map((event) => (
                  <DropdownMenuItem
                    key={event.name}
                    className="px-3 py-1 hover:text-primary text-muted-foreground"
                  >
                    <Link to={event.href} className="w-full">
                      {event.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Hackathon */}
            <Link
              to="/hackathon"
              className={`text-sm font-medium transition-colors ${
                isFestPage
                  ? "text-white"
                  : isActive("/hackathon")
                  ? "text-primary bg-primary/10 px-3 py-1 rounded-md"
                  : "text-muted-black hover:text-primary"
              }`}
            >
              Hackathon
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isFestPage
                  ? "text-white"
                  : isActive("/contact")
                  ? "text-primary bg-primary/10 px-3 py-1 rounded-md"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
                    isFestPage
                      ? "text-white"
                      : isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-black hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

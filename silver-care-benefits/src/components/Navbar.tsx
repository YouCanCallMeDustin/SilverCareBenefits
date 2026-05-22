"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import Button from "./ui/Button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/notary-services", label: "Notary Services" },
  { href: "/remote-online-notary", label: "Remote Online Notary" },
  { href: "/medicare-services", label: "Medicare Assistance" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-card-border/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" aria-label="Silver Care Benefits Home">
              <Logo />
            </Link>

            {/* Desktop Navigation links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:18005550199"
                className="flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
                aria-label="Call Silver Care Benefits at 1-800-555-0199"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call Us</span>
              </a>
              <Button href="/schedule" variant="primary" size="sm" className="gap-2">
                <Calendar className="w-4 h-4" />
                Schedule
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:18005550199"
                className="p-2 text-foreground/80 hover:text-primary transition-colors"
                aria-label="Call Us"
              >
                <Phone className="w-5 h-5 text-primary" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-foreground/80 hover:text-primary focus:outline-none"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-background border-b border-card-border overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? "bg-primary-light text-primary font-semibold"
                          : "text-foreground/80 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-4 border-t border-card-border/50 flex flex-col gap-3 px-4">
                  <a
                    href="tel:18005550199"
                    className="flex items-center justify-center gap-2 py-3 border border-silver/50 rounded-full font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    Call 1-800-555-0199
                  </a>
                  <Button href="/schedule" variant="primary" className="w-full gap-2">
                    <Calendar className="w-4 h-4" />
                    Schedule Appointment
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

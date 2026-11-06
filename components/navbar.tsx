"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { RiTicketLine, RiMenuLine, RiCloseLine } from "@remixicon/react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 border border-primary/20 text-primary transition-transform group-hover:scale-105">
            {/* Google DevFest 4-color brackets representation */}
            <span className="font-mono font-bold text-sm tracking-tighter flex items-center">
              <span className="text-blue-500">&lt;</span>
              <span className="text-red-500">/</span>
              <span className="text-amber-500">&gt;</span>
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-sm tracking-tight text-foreground">
                DevFest
              </span>
              <span className="text-xs font-semibold text-primary">Ibadan</span>
              <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4 border-primary/30 text-primary">
                2026
              </Badge>
            </div>
            <span className="text-[10px] text-muted-foreground leading-none">
              GDG Ibadan Community
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#tracks" className="hover:text-foreground transition-colors">
            Tracks
          </a>
          <a href="#speakers" className="hover:text-foreground transition-colors">
            Speakers
          </a>
          <a href="#schedule" className="hover:text-foreground transition-colors">
            Schedule
          </a>
          <a href="#sponsors" className="hover:text-foreground transition-colors">
            Sponsors
          </a>
        </nav>

        {/* Action items */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="sm"
            className="hidden sm:inline-flex gap-1.5 font-medium shadow-sm hover:shadow"
          >
            <RiTicketLine className="size-3.5" />
            <span>Get Tickets</span>
          </Button>

          {/* Mobile menu trigger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden size-8 text-muted-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <RiCloseLine className="size-4" /> : <RiMenuLine className="size-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur px-4 py-4 space-y-3">
          <div className="flex flex-col gap-2.5 text-xs font-medium text-muted-foreground">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#tracks"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-foreground transition-colors"
            >
              Tracks
            </a>
            <a
              href="#speakers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-foreground transition-colors"
            >
              Speakers
            </a>
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-foreground transition-colors"
            >
              Schedule
            </a>
            <a
              href="#sponsors"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-foreground transition-colors"
            >
              Sponsors
            </a>
          </div>
          <div className="pt-2 border-t border-border">
            <Button size="sm" className="w-full gap-1.5 font-medium">
              <RiTicketLine className="size-3.5" />
              <span>Get Tickets</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

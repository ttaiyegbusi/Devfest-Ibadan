import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
      </main>
      <footer className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 GDG Ibadan. Built with shadcn, Base UI & Next.js.</p>
          <p className="font-mono text-[11px]">
            Press <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-foreground">d</kbd> to toggle light/dark theme
          </p>
        </div>
      </footer>
    </div>
  )
}

"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  RiCalendarEventLine,
  RiMapPin2Line,
  RiArrowRightLine,
  RiCpuLine,
  RiGlobalLine,
  RiTerminalBoxLine,
  RiUserVoiceLine,
  RiSparkling2Line,
  RiQrCodeLine,
  RiPlayCircleLine,
} from "@remixicon/react"

export function HeroSection() {
  const [ticketType, setTicketType] = React.useState<"early" | "student" | "vip">("early")

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background ambient gradient blurs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-40 dark:opacity-30"
      >
        <div className="absolute top-12 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-gradient-to-tr from-blue-500/20 via-primary/20 to-emerald-500/10 blur-[100px]" />
        <div className="absolute top-48 left-1/4 h-[250px] w-[350px] rounded-full bg-amber-500/15 blur-[90px]" />
        <div className="absolute top-64 right-1/4 h-[280px] w-[400px] rounded-full bg-red-500/15 blur-[90px]" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.25]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Content (Left) + Interactive Visual Pass (Right) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column (Content) */}
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            {/* Announcement Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs shadow-xs backdrop-blur-xs transition-colors hover:border-border">
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-foreground">DevFest Ibadan 2026</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <RiSparkling2Line className="size-3 text-amber-500" />
                Nov 2026 • Premier Edition
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                Building the Future with{" "}
                <span className="bg-gradient-to-r from-blue-600 via-primary to-amber-500 bg-clip-text text-transparent">
                  Intelligent Tech
                </span>
                .
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed">
                West Africa&apos;s landmark developer festival returns to the historic city of
                Ibadan. Join 1,500+ builders, creators, and leaders exploring the forefront of
                Generative AI, Cloud infrastructure, Mobile, Web, and Open Source.
              </p>
            </div>

            {/* Quick Meta Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/30 px-2.5 py-1">
                <RiCalendarEventLine className="size-3.5 text-blue-500" />
                <span>November 2026</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/30 px-2.5 py-1">
                <RiMapPin2Line className="size-3.5 text-red-500" />
                <span>International Conference Centre, Ibadan</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/30 px-2.5 py-1">
                <RiUserVoiceLine className="size-3.5 text-amber-500" />
                <span>35+ Speakers & Leaders</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <Button size="lg" className="gap-2 font-medium shadow-md shadow-primary/20">
                <span>Claim Your Ticket</span>
                <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Button>

              <Button variant="outline" size="lg" className="gap-2 font-medium">
                <RiPlayCircleLine className="size-4 text-primary" />
                <span>Watch 2025 Highlights</span>
              </Button>
            </div>

            {/* Key Tech Tracks Pill Bar */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Featured Tech Tracks
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { name: "Gemini & GenAI", icon: RiCpuLine, color: "text-blue-500" },
                  { name: "Cloud & DevSecOps", icon: RiGlobalLine, color: "text-emerald-500" },
                  { name: "Mobile & Flutter", icon: RiTerminalBoxLine, color: "text-amber-500" },
                  { name: "Modern Web & Next.js", icon: RiGlobalLine, color: "text-red-500" },
                ].map((track) => (
                  <Badge
                    key={track.name}
                    variant="outline"
                    className="gap-1.5 bg-background/50 hover:bg-muted/50 transition-colors py-1 px-2.5"
                  >
                    <track.icon className={`size-3 ${track.color}`} />
                    <span className="text-[11px] font-normal">{track.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Digital Pass Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <Card className="relative overflow-hidden border-border/80 bg-background/70 shadow-2xl backdrop-blur-xl transition-all hover:border-primary/40">
                {/* Decorative Top Accent Bar matching Google / DevFest palette */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-red-500 via-amber-400 to-emerald-500" />

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        GDG IBADAN
                      </span>
                      <span className="text-[11px] text-muted-foreground">OFFICIAL PASS</span>
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      LIVE REGISTRATION
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight mt-2 text-foreground">
                    DevFest Ibadan &apos;26
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Access to 3 concurrent tracks, workshops, exhibitions & networking dinner.
                  </CardDescription>
                </CardHeader>

                {/* Ticket Selector Tabs */}
                <div className="px-4 py-2">
                  <div className="grid grid-cols-3 gap-1 rounded-md bg-muted/60 p-1 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setTicketType("early")}
                      className={`rounded py-1 text-center font-medium transition-all ${
                        ticketType === "early"
                          ? "bg-background text-foreground shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Early Bird
                    </button>
                    <button
                      type="button"
                      onClick={() => setTicketType("student")}
                      className={`rounded py-1 text-center font-medium transition-all ${
                        ticketType === "student"
                          ? "bg-background text-foreground shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Student
                    </button>
                    <button
                      type="button"
                      onClick={() => setTicketType("vip")}
                      className={`rounded py-1 text-center font-medium transition-all ${
                        ticketType === "vip"
                          ? "bg-background text-foreground shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      VIP / Founder
                    </button>
                  </div>
                </div>

                {/* Pass Details preview */}
                <div className="mx-4 my-2 rounded-lg border border-border/80 bg-card/60 p-3 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Tier Selected
                      </div>
                      <div className="text-sm font-semibold capitalize text-foreground">
                        {ticketType === "early"
                          ? "Community Early Bird"
                          : ticketType === "student"
                            ? "Student Scholar Pass"
                            : "Executive & VIP Pass"}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Fee
                      </div>
                      <div className="text-sm font-bold text-primary">
                        {ticketType === "early" ? "Free (RSVP)" : ticketType === "student" ? "Free" : "Limited Access"}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/60 text-xs">
                    <div>
                      <span className="text-[10px] text-muted-foreground block">Location</span>
                      <span className="font-medium text-foreground">Ibadan, NG</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground block">Pass ID</span>
                      <span className="font-mono text-[11px] text-foreground">DF26-IBD-7890</span>
                    </div>
                  </div>
                </div>

                {/* Pass Footer with QR preview and Action */}
                <div className="p-4 pt-2 flex items-center justify-between gap-4 border-t border-border/60">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <RiQrCodeLine className="size-8 text-foreground/80" />
                    <div className="text-[10px] leading-tight">
                      <span className="font-semibold block text-foreground">Scan & Verify</span>
                      <span>Instant digital check-in</span>
                    </div>
                  </div>

                  <Button size="sm" className="gap-1 font-medium">
                    <span>Reserve</span>
                    <RiArrowRightLine className="size-3" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 sm:mt-24 border-y border-border/60 bg-muted/20 py-6 backdrop-blur-xs">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-border/60">
            <div className="text-center px-4">
              <div className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                1,500+
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">Community Attendees</div>
            </div>
            <div className="text-center px-4">
              <div className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                35+
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">Global & Local Speakers</div>
            </div>
            <div className="text-center px-4">
              <div className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                20+
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">Deep-Dive Tech Sessions</div>
            </div>
            <div className="text-center px-4">
              <div className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                100%
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">Community & Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

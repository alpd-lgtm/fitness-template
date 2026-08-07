"use client";

import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const navItems = [
  "Home",
  "Programs",
  "Coaches",
  "Nutrition",
  "Pricing",
  "Blog",
];

export default function Header({
  onBook,
}: {
  onBook: (plan: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.06] bg-[#f7f8f5]">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* LEFT */}
        <div className="flex min-w-0 items-center gap-3">
          {/* LOGO */}
          <a
            href="#"
            className="flex shrink-0 items-center gap-2 text-xl font-black tracking-tight text-black sm:text-2xl"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-lime-500 text-black">
              <Zap size={19} fill="currentColor" />
            </span>

            <span>VitalFit</span>
          </a>

          {/* DEMO BADGE */}
          <a
            href="https://axistudio.studio/templates"
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#6C63FF]/15 bg-[#6C63FF]/[0.06] px-2 py-1 transition hover:border-[#6C63FF]/30 hover:bg-[#6C63FF]/10 sm:px-2.5"
            title="This is an Axis Studio demo website"
          >
            <span className="size-1.5 rounded-full bg-[#6C63FF]" />

            <span className="text-[8px] font-black uppercase tracking-[0.12em] text-[#5B52F5] sm:hidden">
              Demo
            </span>

            <span className="hidden text-[9px] font-black uppercase tracking-[0.12em] text-[#5B52F5] sm:inline">
              Axis Studio Demo
            </span>
          </a>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-sm font-bold text-gray-700 transition hover:text-black"
            >
              {item}

              {item === "Home" && (
                <span className="absolute -bottom-3 left-0 h-1 w-full rounded-full bg-lime-500" />
              )}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <button
          type="button"
          onClick={() => onBook("Free Consultation")}
          className="hidden min-h-11 items-center justify-center rounded-xl bg-black px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-neutral-800 lg:inline-flex"
        >
          Get Started
          <span className="ml-2">→</span>
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((previous) => !previous)}
          className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-black transition active:scale-95 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-black/[0.06] bg-[#f7f8f5] px-4 pb-5 pt-4 sm:px-6 lg:hidden">
          <div className="mx-auto max-w-7xl">
            <nav className="grid gap-2 sm:grid-cols-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-black/[0.05] bg-white px-4 py-3 text-sm font-black text-gray-800 shadow-sm transition active:scale-[0.99]"
                >
                  {item}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => {
                onBook("Free Consultation");
                setOpen(false);
              }}
              className="mt-3 w-full rounded-xl bg-lime-500 py-3.5 text-sm font-black text-black transition hover:bg-lime-400"
            >
              Get Started →
            </button>

            {/* AXIS STUDIO DEMO NOTICE */}
            <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-[#6C63FF]/15 bg-[#6C63FF]/[0.05] px-3.5 py-3">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 shrink-0 rounded-full bg-[#6C63FF]" />

                  <p className="text-[9px] font-black uppercase tracking-[0.13em] text-[#5B52F5]">
                    Axis Studio Demo
                  </p>
                </div>

                <p className="mt-1 text-[10px] leading-4 text-gray-500">
                  This is a sample website created for demonstration.
                </p>
              </div>

              <a
                href="https://axistudio.studio/templates"
                className="shrink-0 rounded-lg border border-[#6C63FF]/15 bg-white px-3 py-2 text-[9px] font-black text-[#5B52F5]"
              >
                Designs →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
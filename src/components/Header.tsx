"use client";

import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "Programs", "Coaches", "Nutrition", "Pricing", "Blog"];

export default function Header({
  onBook,
}: {
  onBook: (plan: string) => void;
}){
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f8f5]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-500 text-black shadow-lg shadow-lime-200">
            <Zap size={19} fill="currentColor" />
          </div>
          <span className="text-xl font-black tracking-tight">VitalFit</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
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
<div className="hidden md:flex">
<button
  onClick={() => onBook("Free Consultation")}
  className="rounded-2xl bg-lime-500 px-5 py-3 text-sm font-black text-black shadow-lg shadow-lime-200 transition hover:-translate-y-0.5 hover:bg-lime-400"
>
  Get Started →
</button>
</div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-black/5 bg-[#f7f8f5] px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-white px-4 py-3 text-sm font-black shadow-sm"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-4">
<button
  onClick={() => {
    onBook("Free Consultation");
    setOpen(false);
  }}
  className="w-full rounded-2xl bg-lime-500 py-3 text-sm font-black text-black transition hover:bg-lime-400"
>
  Get Started →
</button>
          </div>
        </div>
      )}
    </header>
  );
}
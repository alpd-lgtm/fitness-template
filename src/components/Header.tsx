"use client";

import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "#top",
  },
  {
    label: "Programs",
    href: "#programs",
  },
  {
    label: "Results",
    href: "#results",
  },
  {
    label: "Memberships",
    href: "#pricing",
  },
];

export default function Header({
  onBook,
}: {
  onBook: (plan: string) => void;
}) {
  const [open, setOpen] = useState(false);

  /* =====================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ===================================================== */

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  /* =====================================================
     SMOOTH SCROLL
  ===================================================== */

  function handleNavigation(href: string) {
    setOpen(false);

    if (href === "#top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const section = document.querySelector(href);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-black/[0.06] bg-[#f7f8f5]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* =================================================
              LOGO
          ================================================= */}

          <button
            type="button"
            onClick={() => handleNavigation("#top")}
            aria-label="VitalFit home"
            className="group flex shrink-0 items-center gap-2.5"
          >
            <span className="grid size-10 place-items-center rounded-[13px] bg-lime-500 text-black shadow-sm shadow-lime-500/20 transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
              <Zap
                size={19}
                strokeWidth={2.6}
                fill="currentColor"
              />
            </span>

            <span className="text-[1.35rem] font-black tracking-[-0.04em] text-[#101510] sm:text-2xl">
              Vital
              <span className="text-lime-600">Fit</span>
            </span>
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigation(item.href)}
                className="group relative rounded-xl px-4 py-2.5 text-sm font-bold text-gray-600 transition hover:bg-white hover:text-[#101510]"
              >
                {item.label}

                <span className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-lime-500 transition-all duration-300 group-hover:w-5" />
              </button>
            ))}
          </nav>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <button
            type="button"
            onClick={() => onBook("Free Consultation")}
            className="group hidden min-h-11 items-center justify-center rounded-xl bg-[#101510] px-5 text-sm font-black text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg lg:inline-flex"
          >
            Get Started

            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((previous) => !previous)}
            className="grid size-11 shrink-0 place-items-center rounded-xl border border-black/[0.07] bg-white text-[#101510] shadow-sm transition active:scale-95 lg:hidden"
          >
            {open ? (
              <X size={21} strokeWidth={2.2} />
            ) : (
              <Menu size={21} strokeWidth={2.2} />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 bg-[#101510]/35 backdrop-blur-sm lg:hidden">
          <div className="border-b border-black/[0.06] bg-[#f7f8f5] px-4 pb-6 pt-4 shadow-2xl sm:px-6">
            <div className="mx-auto max-w-7xl">
              {/* NAVIGATION */}
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() =>
                      handleNavigation(item.href)
                    }
                    className="group flex min-h-13 w-full items-center justify-between rounded-[14px] border border-black/[0.055] bg-white px-4 py-3.5 text-left text-sm font-black text-[#101510] shadow-sm transition active:scale-[0.99]"
                  >
                    {item.label}

                    <span className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-lime-600">
                      →
                    </span>
                  </button>
                ))}
              </nav>

              {/* MOBILE CTA */}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onBook("Free Consultation");
                }}
                className="mt-4 inline-flex min-h-13 w-full items-center justify-center rounded-[14px] bg-lime-500 px-5 py-3.5 text-sm font-black text-black shadow-lg shadow-lime-500/15 transition hover:bg-lime-400 active:scale-[0.99]"
              >
                Get Started
                <span className="ml-2">→</span>
              </button>

              {/* SMALL SUPPORTING LINE */}
              <p className="mt-4 text-center text-[10px] font-semibold text-gray-400">
                Personal training · Fitness programs · Coaching
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
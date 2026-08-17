"use client";

import {
  ArrowRight,
  Check,
  Dumbbell,
  Zap,
} from "lucide-react";

type FooterProps = {
  onBook?: (plan: string) => void;
};

const footerLinks = [
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

export default function Footer({
  onBook,
}: FooterProps) {
  const year = new Date().getFullYear();

  function handleNavigation(href: string) {
    if (href === "#top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    document
      .querySelector(href)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <footer className="bg-[#f7f8f5] px-4 pb-6 pt-2 sm:px-6 sm:pb-8 sm:pt-4 lg:px-8 lg:pb-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-black/[0.05] bg-white shadow-xl shadow-black/[0.04] sm:rounded-[2.25rem] lg:rounded-[2.5rem]">
        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div className="grid gap-8 px-5 py-7 sm:px-8 sm:py-9 md:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_0.85fr_1.3fr] lg:gap-10 lg:px-10 lg:py-10">
          {/* =================================================
              BRAND
          ================================================= */}

          <div>
            <button
              type="button"
              onClick={() =>
                handleNavigation("#top")
              }
              aria-label="VitalFit home"
              className="group flex items-center gap-2.5"
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
                <span className="text-lime-600">
                  Fit
                </span>
              </span>
            </button>

            <p className="mt-4 max-w-[290px] text-sm leading-6 text-gray-500">
              Personalised training, practical coaching and
              structured fitness programs built around your
              goals.
            </p>

            {/* SMALL FEATURES */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Expert Coaching",
                "Flexible Plans",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#f4f7ef] px-3 py-1.5 text-[10px] font-bold text-gray-600"
                >
                  <Check
                    size={11}
                    strokeWidth={3}
                    className="text-lime-600"
                  />

                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.14em] text-gray-400 sm:text-xs">
              Explore
            </h4>

            <nav className="mt-4 grid gap-1">
              {footerLinks.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() =>
                    handleNavigation(item.href)
                  }
                  className="group flex w-fit items-center gap-1.5 py-1.5 text-left text-sm font-semibold text-gray-600 transition hover:translate-x-1 hover:text-[#101510]"
                >
                  {item.label}

                  <span className="opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* =================================================
              TRAINING
          ================================================= */}

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.14em] text-gray-400 sm:text-xs">
              Training
            </h4>

            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-lime-100 text-lime-700">
                  <Dumbbell size={14} />
                </span>

                <span className="font-semibold">
                  Strength Training
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-lime-100 text-lime-700">
                  <Dumbbell size={14} />
                </span>

                <span className="font-semibold">
                  Fitness Coaching
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-lime-100 text-lime-700">
                  <Dumbbell size={14} />
                </span>

                <span className="font-semibold">
                  Personal Programs
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              FOOTER CTA
          ================================================= */}

          <div className="rounded-[1.4rem] bg-[#101510] p-5 text-white sm:p-6">
            <p className="text-[9px] font-black uppercase tracking-[0.15em] text-lime-400">
              Ready To Get Started?
            </p>

            <h4 className="mt-2 text-xl font-black leading-tight tracking-[-0.03em] sm:text-2xl">
              Start your fitness journey today.
            </h4>

            <p className="mt-2 text-xs leading-5 text-white/50 sm:text-sm sm:leading-6">
              Tell us your goals and discover the training
              option that works for you.
            </p>

            <button
              type="button"
              onClick={() =>
                onBook?.("Free Consultation")
              }
              className="group mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-lime-500 px-5 py-3 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-lime-400"
            >
              Get Started

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div className="mx-5 border-t border-black/[0.06] py-5 sm:mx-8 lg:mx-10">
          <div className="flex flex-col gap-3 text-[10px] leading-5 text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
            <p>
              © {year} VitalFit. Sample fitness website
              design.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>
                Mobile-friendly
              </span>

              <span className="hidden size-1 rounded-full bg-gray-300 sm:block" />

              <span>
                Personal training
              </span>

              <span className="hidden size-1 rounded-full bg-gray-300 sm:block" />

              <span>
                Fitness coaching
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
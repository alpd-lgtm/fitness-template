import { ArrowRight, Check, Sparkles } from "lucide-react";

export default function TemplateDemoCTA() {
  return (
    <section
      id="axis-studio-demo"
      className="bg-[#f7f8f5] px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-[28px] bg-[#090909] px-6 py-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.16)] sm:px-8 sm:py-10 lg:px-12 lg:py-11">
          {/* BACKGROUND GLOWS */}
          <div className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 left-[28%] size-64 rounded-full bg-lime-400/[0.06] blur-3xl" />

          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5">
                <Sparkles size={12} className="text-lime-400" />

                <span className="text-[9px] font-black uppercase tracking-[0.16em] text-white/60 sm:text-[10px]">
                  Axis Studio Website Demo
                </span>
              </div>

              <p className="mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-lime-400/80 sm:text-xs">
                Fitness & Personal Training Website
              </p>

              <h2 className="mt-3 max-w-2xl text-[2rem] font-black leading-[1.04] tracking-[-0.045em] sm:text-[2.6rem] lg:text-[3rem]">
                Like this website?
                <span className="block text-lime-400">
                  Make this design yours.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Axis Studio can customise this fitness website with your
                business name, branding, colours, programs, membership plans,
                images, content and contact details — then prepare everything
                for launch.
              </p>

              {/* BENEFITS */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {[
                  "Your branding & content",
                  "Mobile-friendly",
                  "Complete setup & launch",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white/65 sm:text-sm"
                  >
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-lime-400/10 text-lime-400">
                      <Check size={11} strokeWidth={3} />
                    </span>

                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:pl-4">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/10 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white/35">
                    Interested in this design?
                  </p>

                  <span className="rounded-full bg-lime-400/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-lime-400">
                    Fitness
                  </span>
                </div>

                <p className="mt-3 text-lg font-black leading-snug text-white sm:text-xl">
                  Start with this website style.
                </p>

                <p className="mt-2 text-xs leading-5 text-white/45 sm:text-sm">
                  Tell us about your business and what you need. We&apos;ll
                  explain how we can customise this design and what happens
                  next.
                </p>

                <div className="mt-5 grid gap-2.5">
                  <a
                    href="https://axistudio.studio/contact?template=fitness"
                    className="group/button inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 text-sm font-black text-black transition duration-200 hover:-translate-y-0.5 hover:bg-lime-300"
                  >
                    Start With This Design

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover/button:translate-x-1"
                    />
                  </a>

                  <a
                    href="https://axistudio.studio/templates"
                    className="group/more inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 text-xs font-black text-white/70 transition duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white sm:text-sm"
                  >
                    View More Designs

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover/more:translate-x-1"
                    />
                  </a>
                </div>
              </div>

              <p className="mt-3 text-center text-[9px] font-bold leading-4 text-white/25 sm:text-[10px]">
                This is an Axis Studio demonstration website. Business names,
                pricing, testimonials and results shown are sample content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
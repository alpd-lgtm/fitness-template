import { ArrowRight, Check, Sparkles } from "lucide-react";

export default function TemplateDemoCTA() {
  return (
    <section className="bg-[#f7f8f5] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-[28px] bg-[#090909] px-6 py-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.16)] sm:px-8 sm:py-10 lg:px-12 lg:py-11">
          {/* BACKGROUND DETAILS */}
          <div className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 left-[28%] size-64 rounded-full bg-lime-400/[0.06] blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5">
                <Sparkles size={12} className="text-lime-400" />

                <span className="text-[9px] font-black uppercase tracking-[0.16em] text-white/60 sm:text-[10px]">
                  Axis Studio Website Demo
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl text-[2rem] font-black leading-[1.04] tracking-[-0.045em] sm:text-[2.6rem] lg:text-[3rem]">
                Like this website?
                <span className="block text-lime-400">
                  Make this design yours.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Axis Studio can customise this design with your business name,
                colours, content, images, services and contact details — then
                prepare everything for launch.
              </p>

              {/* BENEFITS */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {[
                  "Customised for your business",
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
              <div className="rounded-[20px] border border-white/10 bg-white/[0.045] p-4 sm:p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white/35">
                  Interested in this design?
                </p>

                <p className="mt-2 text-lg font-black text-white">
                  Start with this exact website style.
                </p>

                <p className="mt-2 text-xs leading-5 text-white/45 sm:text-sm">
                  Tell us about your business and we&apos;ll explain the next
                  steps.
                </p>

                <div className="mt-5 grid gap-2.5">
                  <a
                    href="https://axistudio.studio/contact?template=fitness"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 text-sm font-black text-black transition duration-200 hover:-translate-y-0.5 hover:bg-lime-300"
                  >
                    Start With This Design
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="https://axistudio.studio/templates"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 text-xs font-black text-white/70 transition duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white sm:text-sm"
                  >
                    View More Designs
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              <p className="mt-3 text-center text-[9px] font-bold text-white/25 sm:text-[10px]">
                This website is an Axis Studio demonstration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
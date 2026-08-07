"use client";
import BookingModal from "@/components/BookingModal";
import {useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp, ScaleIn } from "@/components/Motion";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "@/components/Counter";
import ParallaxImage from "@/components/ParallaxImage";
import TemplateDemoCTA from "@/components/TemplateDemoCTA";


import {
  ArrowRight,
  Check,
  Dumbbell,
  PlayCircle,
  Star,
  TrendingUp,
  Users,
  Globe,
  Zap,
} from "lucide-react";

const programs = [
  {
    title: "Strength Building",
    text: "Build lean muscle, improve power, and increase overall strength.",
    image: "/images/program-1.jpg",
  },
  {
    title: "Fat Loss",
    text: "Burn fat, boost endurance, and build a body that performs.",
    image: "/images/program-2.jpg",
  },
  {
    title: "Mobility & Flexibility",
    text: "Move better, prevent injuries, and improve daily performance.",
    image: "/images/program-3.jpg",
  },
  {
    title: "Athletic Performance",
    text: "Improve speed, agility, explosiveness, and overall performance.",
    image: "/images/program-4.jpg",
  },
];

const stats = [
  {
    value: 25,
    suffix: "K+",
    label: "Happy Members",
    icon: <Users size={22} strokeWidth={2.1} />,
  },
  {
    value: 1250,
    suffix: "+",
    label: "Workouts Completed",
    icon: <Dumbbell size={22} strokeWidth={2.1} />,
  },
  {
    value: 98,
    suffix: "%",
    label: "Success Rate",
    icon: <Star size={22} strokeWidth={2.1} />,
  },
  {
    value: 120,
    suffix: "+",
    label: "Countries Reached",
    icon: <Globe size={22} strokeWidth={2.1} />,
  },
];
const transformations = [
  {
    name: "Madison Blake",
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    client: "/images/client.jpg",
    result: "Lost 18kg in 5 months",
    plan: "Strength + nutrition plan",
    stats: "92kg → 74kg",
    comment:
      "VitalFit completely changed my lifestyle. The coaches, programs, and nutrition guidance helped me stay consistent and finally see real results.",
  },
  {
    name: "Ryan Mitchell",
    before: "/images/t2-before.jpg",
    after: "/images/t2-after.jpg",
    client: "/images/t2-client.jpg",
    result: "Gained 10kg muscle",
    plan: "Muscle building plan",
    stats: "60kg → 70kg",
    comment:
      "The structure made everything easy. I finally had a clear plan and the results came faster than I expected.",
  },
  {
    name: "Sophia Williams",
    before: "/images/t3-before.jpg",
    after: "/images/t3-after.jpg",
    client: "/images/t3-client.jpg",
    result: "Lost 13kg and got stronger",
    plan: "Fat loss + conditioning plan",
    stats: "85kg → 72kg",
    comment:
      "I feel stronger, lighter, and more confident. The coaching kept me accountable every week.",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
const [selectedPlan, setSelectedPlan] = useState("Free Consultation");
const [activePlan, setActivePlan] = useState<string | null>(null);

const [tIndex, setTIndex] = useState(0);
const t = transformations[tIndex];
useEffect(() => {
  const interval = setInterval(() => {
    setTIndex((prev) =>
      prev === transformations.length - 1 ? 0 : prev + 1
    );
  }, 4000); // 4 seconds

  return () => clearInterval(interval);
}, []);

  return (
    <>
      <Header
  onBook={(plan) => {
    setSelectedPlan(plan);
    setActivePlan(null);
    setOpen(true);
  }}
/>

      <main className="overflow-hidden bg-[#f7f8f5] text-[#101510]">
        {/* HERO */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-2">
          <FadeUp>
            <div>
              <p className="mb-5 inline-flex rounded-full bg-lime-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-lime-700">
                Train smart. Stay strong.
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
                Stronger Today,
                <span className="block text-lime-600">
                  Healthier Tomorrow.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
                Premium fitness websites for gyms, trainers, and wellness brands
                that want a clean, modern, high-converting online presence.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
<button
  onClick={() => {
    setSelectedPlan("Free Consultation");
    setActivePlan(null);
    setOpen(true);
  }}
  className="group rounded-2xl bg-lime-500 px-7 py-4 font-black text-black shadow-xl shadow-lime-200 transition duration-300 hover:-translate-y-1 hover:bg-lime-400"
>
  Start Your Journey{" "}
  <ArrowRight className="ml-1 inline h-4 w-4 transition group-hover:translate-x-1" />
</button>

                <button className="group rounded-2xl border border-gray-300 bg-white px-7 py-4 font-black transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <PlayCircle className="mr-2 inline h-5 w-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </FadeUp>

<ScaleIn delay={0.15}>

  <div className="relative">
    <div className="absolute -inset-8 -z-10 rounded-full bg-lime-200/50 blur-3xl" />
<div className="relative w-full">
  <div className="absolute -inset-6 -z-10 rounded-full bg-lime-200/30 blur-3xl" />

  <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/15">
    <img
      src="/images/hero.jpg"
      alt="Fitness training"
      className="h-[420px] w-full object-cover object-[95%_center]"
    />

    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-lime-200/10" />
  </div>

  <div className="absolute right-5 top-1/2 w-56 -translate-y-1/2 rounded-[2rem] border border-white/15 bg-black/15 p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl">
    {[
      ["Workouts Completed", "1,250+", Dumbbell],
      ["Happy Members", "25K+", Users],
      ["Success Rate", "98%", TrendingUp],
    ].map(([label, value, Icon], i) => (
      <div key={label as string}>
        {i !== 0 && <div className="my-4 h-px bg-white/15" />}

        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400/25 text-lime-200">
            <Icon size={22} />
          </div>

          <div>
            <p className="text-sm text-white/70">{label as string}</p>
            <h3 className="text-[2rem] font-black text-white">{value as string}</h3>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
</ScaleIn>
        </section>

        {/* PROGRAMS */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <FadeUp>
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-lime-600">
                  Our Programs
                </p>
                <h2 className="mt-3 max-w-xl text-4xl font-black tracking-tight md:text-5xl">
                  Find the perfect program for your goal.
                </h2>
              </div>

              <button className="w-fit rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-black transition hover:-translate-y-1 hover:shadow-lg">
                View All Programs →
              </button>
            </div>
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <ScaleIn key={program.title} delay={index * 0.08}>
                <article className="group h-full overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10">
                  <div className="relative h-56 overflow-hidden">
<ParallaxImage
  src={program.image}
  alt={program.title}
  className="h-full w-full transition duration-700 group-hover:scale-110"
/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  <div className="flex h-full flex-col p-6">
                    <h3 className="text-xl font-black">{program.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {program.text}
                    </p>
<button className="mt-5 block text-left text-sm font-black text-lime-600 transition group-hover:translate-x-1">
  Learn More <span className="inline-block transition group-hover:translate-x-1">→</span>
</button>
                  </div>
                </article>
              </ScaleIn>
            ))}
          </div>
        </section>

        {/* STATS */}
{/* STATS - LIGHT PREMIUM */}
<section className="mx-auto max-w-7xl px-6 pb-24">
  <div className="relative overflow-hidden rounded-[2.75rem] bg-[#f6f8f4] p-10 shadow-xl shadow-black/5">

    {/* subtle glow */}
    <div className="absolute inset-0 rounded-[2.5rem] bg-lime-200/20 blur-2xl opacity-40" />
    <div className="absolute -right-20 -bottom-20 h-52 w-52 rounded-full bg-lime-200/30 blur-3xl" />

    <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <ScaleIn key={stat.label} delay={index * 0.06}>
          <div className="group rounded-[2rem] border border-black/5 bg-white/80 p-7 text-center backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-200/40">

            {/* ICON */}
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 text-lime-700 transition duration-300 group-hover:scale-110 group-hover:bg-lime-500 group-hover:text-black">
              {stat.icon}
            </div>

            {/* NUMBER */}
            <h3 className="text-4xl font-black tracking-tight text-black">
              <Counter value={stat.value} suffix={stat.suffix} />
            </h3>

            {/* LABEL */}
            <p className="mt-2 text-sm font-semibold text-gray-500">
              {stat.label}
            </p>

          </div>
        </ScaleIn>
      ))}
    </div>
  </div>
</section>



{/* TRANSFORMATION */}
<section className="mx-auto max-w-7xl px-6 pb-24">
  <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr_1fr]">
    <FadeUp>
      <div>
        <p className="text-sm font-black uppercase tracking-wide text-lime-600">
          Real Transformations
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
          Real people. Real results.
        </h2>
        <p className="mt-5 leading-7 text-gray-600">
          Show visitors the outcome before they even contact you.
          Transformation visuals build trust faster than words.
        </p>
        <button className="mt-7 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-black transition hover:-translate-y-1 hover:shadow-lg">
          View All Stories →
        </button>
      </div>
    </FadeUp>

    <ScaleIn delay={0.12}>
      <div className="group relative overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={tIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-2"
          >
            <div className="relative h-[320px] overflow-hidden">
              <img
                src={t.before}
                alt="Before transformation"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase text-white backdrop-blur-md">
                Before
              </span>
            </div>

            <div className="relative h-[320px] overflow-hidden">
              <img
                src={t.after}
                alt="After transformation"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute right-4 top-4 rounded-full bg-lime-500 px-3 py-1 text-xs font-bold uppercase text-black">
                After
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between gap-4 p-6">
          <div>
            <h3 className="text-xl font-black">{t.result}</h3>
            <p className="mt-1 text-sm text-gray-500">{t.plan}</p>
          </div>

          <div className="rounded-2xl bg-lime-100 px-4 py-2 text-sm font-black text-lime-700">
            {t.stats}
          </div>
        </div>

        <div className="absolute bottom-24 right-4 flex gap-2">
          <button
            onClick={() =>
              setTIndex((prev) =>
                prev === 0 ? transformations.length - 1 : prev - 1
              )
            }
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-black shadow-lg transition hover:scale-110 hover:bg-lime-500"
          >
            ←
          </button>

          <button
            onClick={() =>
              setTIndex((prev) =>
                prev === transformations.length - 1 ? 0 : prev + 1
              )
            }
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-black shadow-lg transition hover:scale-110 hover:bg-lime-500"
          >
            →
          </button>
        </div>
      </div>
    </ScaleIn>

    <ScaleIn delay={0.24}>
      <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-black/5">
        <div className="text-5xl font-black text-lime-500">“</div>

        <AnimatePresence mode="wait">
          <motion.p
            key={tIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-3 leading-7 text-gray-700"
          >
            {t.comment}
          </motion.p>
        </AnimatePresence>

        <div className="mt-6 flex items-center gap-4">
          <img
            src={t.client}
            alt={t.name}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <h4 className="font-black">{t.name}</h4>
            <p className="text-sm font-semibold text-lime-600">
              Verified Member
            </p>
          </div>
        </div>

        <div className="mt-5 flex gap-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>

        <div className="mt-6 flex gap-2">
          {transformations.map((_, index) => (
            <button
              key={index}
              onClick={() => setTIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                tIndex === index ? "w-8 bg-lime-500" : "w-2.5 bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </ScaleIn>
  </div>
</section>

        {/* PRICING */}
        <section className="mx-auto max-w-7xl px-6 pb-28">
          <FadeUp>
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-wide text-lime-600">
                Pricing Plans
              </p>
              <h2 className="mt-3 text-[42px] font-black tracking-tight tracking-tight md:text-5xl">
                Simple pricing. Maximum results.
              </h2>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Starter", "$29", ["Custom workout plan", "Basic nutrition guide", "Community access"]],
              ["Pro", "$59", ["Everything in Starter", "Advanced programs", "1-on-1 coach support"]],
              ["Elite", "$99", ["Everything in Pro", "Personalized coaching", "Priority support"]],
            ].map(([name, price, items], index) => {
              const popular = name === "Pro";

              return (
                <ScaleIn key={name as string} delay={index * 0.1}>
<div
  onClick={() => {
    setActivePlan(name as string);
    setSelectedPlan(name as string);
  }}
  className={`relative cursor-pointer rounded-[2rem] bg-white p-8 transition duration-300 hover:-translate-y-2 ${
activePlan === name || popular
  ? "scale-[1.03] border-2 border-lime-500 shadow-[0_25px_60px_rgba(132,204,22,0.35)]"
  : "border border-black/5 shadow-xl shadow-black/5 hover:border-lime-300 hover:shadow-2xl"
  }`}
>
                    {popular && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-lime-500 px-4 py-1 text-xs font-black text-black">
                        Most Popular
                      </span>
                    )}


                    <h3 className="text-xl font-black">{name as string}</h3>
                    <p className="mt-3 text-4xl font-black">
                      {price as string}
                      <span className="text-lg font-medium text-gray-500">
                        /month
                      </span>
                    </p>

                    <ul className="mt-6 space-y-3 text-sm text-gray-600">
                      {(items as string[]).map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Check size={16} className="text-lime-600" />
                          {item}
                        </li>
                      ))}
                    </ul>

<button
  onClick={(e) => {
    e.stopPropagation();
    setActivePlan(name as string);
    setSelectedPlan(name as string);
    setOpen(true);
  }}
  className={`mt-8 w-full rounded-2xl py-3 font-black transition ${
    popular
      ? "bg-lime-500 text-black shadow-lg shadow-lime-200 hover:bg-lime-400"
      : "border border-gray-300 bg-white hover:shadow-lg"
  }`}
>
  Get Started
</button>
                  </div>
                </ScaleIn>
              );
            })}
          </div>
        </section>

        {/* FINAL CTA */}
{/* FINAL CTA */}
<section className="mx-auto max-w-7xl px-6 pb-10">
  <FadeUp>
    <div className="relative overflow-hidden rounded-[2.5rem] bg-lime-500 p-8 shadow-2xl shadow-lime-200 md:p-12">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-lime-900">
            Ready to start?
          </p>

          <h2 className="mt-3 max-w-xl text-4xl font-black tracking-tight text-black md:text-5xl">
            Your best self is one workout away.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
         className="flex flex-wrap gap-3"
        >
          {["No Commitments", "Cancel Anytime", "7-Day Free Trial"].map(
            (item) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45 },
                  },
                }}
                className="rounded-full bg-white/35 px-4 py-2 text-sm font-bold backdrop-blur-sm"
              >
                {item}
              </motion.div>
            )
          )}
        </motion.div>

        <button
          onClick={() => {
            setSelectedPlan("Free Trial");
            setActivePlan(null);
            setOpen(true);
          }}
          className="rounded-2xl bg-black px-7 py-4 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#101510] hover:shadow-2xl hover:shadow-black/20 active:scale-[0.98]"
        >
          Start Free Trial →
        </button>
      </motion.div>
    </div>
  </FadeUp>
</section>
      </main>

      <BookingModal
  open={open}
  setOpen={setOpen}
  selectedPlan={selectedPlan}
/>
<TemplateDemoCTA />
      <Footer />
    </>
  );
}
"use client";

import {
  type FormEvent,
  useEffect,
  useState,
} from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowRight,
  Check,
  Dumbbell,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import BookingModal from "@/components/BookingModal";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FadeUp, ScaleIn } from "@/components/Motion";
import ParallaxImage from "@/components/ParallaxImage";

/* =========================================================
   PROGRAMS
========================================================= */

const programs = [
  {
    title: "Strength Building",
    text: "Build strength, improve power and develop confidence with structured training.",
    image: "/images/program-1.jpg",
  },
  {
    title: "Fat Loss",
    text: "Improve fitness, build healthy habits and work towards sustainable progress.",
    image: "/images/program-2.jpg",
  },
  {
    title: "Mobility & Flexibility",
    text: "Move better, improve flexibility and build strength through a wider range of movement.",
    image: "/images/program-3.jpg",
  },
  {
    title: "Athletic Performance",
    text: "Improve speed, agility, conditioning and overall physical performance.",
    image: "/images/program-4.jpg",
  },
];

/* =========================================================
   SAMPLE DEMO STATS
========================================================= */

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Members Supported",
    icon: <Users size={22} strokeWidth={2.1} />,
  },
  {
    value: 10000,
    suffix: "+",
    label: "Training Sessions",
    icon: <Dumbbell size={22} strokeWidth={2.1} />,
  },
  {
    value: 8,
    suffix: "+",
    label: "Years Experience",
    icon: <Zap size={22} strokeWidth={2.1} />,
  },
  {
    value: 98,
    suffix: "%",
    label: "Member Satisfaction",
    icon: <Star size={22} strokeWidth={2.1} />,
  },
];

const heroStats = [
  {
    label: "Training Sessions",
    value: "10K+",
    icon: Dumbbell,
  },
  {
    label: "Members Supported",
    value: "500+",
    icon: Users,
  },
  {
    label: "Member Satisfaction",
    value: "98%",
    icon: TrendingUp,
  },
];

/* =========================================================
   SAMPLE TRANSFORMATION CONTENT

   Deliberately avoids:
   - real full names
   - "verified member"
   - invented weight-loss claims
   - invented star reviews
========================================================= */

const transformations = [
  {
    name: "Sample Member 01",
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    client: "/images/client.jpg",
    result: "Example transformation story",
    plan: "Strength + nutrition program",
    stats: "Demo Result",
    comment:
      "This sample content demonstrates how a genuine member transformation and testimonial could be presented on the finished fitness website.",
  },
  {
    name: "Sample Member 02",
    before: "/images/t2-before.jpg",
    after: "/images/t2-after.jpg",
    client: "/images/t2-client.jpg",
    result: "Example strength progress",
    plan: "Strength development program",
    stats: "Demo Result",
    comment:
      "This example shows how a gym or personal trainer could feature real client feedback, progress and coaching experiences on their website.",
  },
  {
    name: "Sample Member 03",
    before: "/images/t3-before.jpg",
    after: "/images/t3-after.jpg",
    client: "/images/t3-client.jpg",
    result: "Example fitness progress",
    plan: "Fitness + conditioning program",
    stats: "Demo Result",
    comment:
      "Your genuine client story, approved photographs and real results can replace this demonstration content when the website is customised.",
  },
];

/* =========================================================
   SAMPLE MEMBERSHIP PLANS
========================================================= */

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    items: [
      "Custom workout plan",
      "Basic nutrition guidance",
      "Community access",
    ],
  },
  {
    name: "Performance",
    price: "$59",
    popular: true,
    items: [
      "Everything in Starter",
      "Advanced training programs",
      "1-on-1 coach support",
    ],
  },
  {
    name: "Elite Coaching",
    price: "$99",
    items: [
      "Everything in Performance",
      "Personalised coaching",
      "Priority support",
    ],
  },
];

/* =========================================================
   AXIS STUDIO TEMPLATE ENQUIRY MODAL
========================================================= */

type FitnessTemplateEnquiryModalProps = {
  open: boolean;
  onClose: () => void;
};

const fieldClass =
  "min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-[#101510] outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10";

function FitnessTemplateEnquiryModal({
  open,
  onClose,
}: FitnessTemplateEnquiryModalProps) {
  const [carePlan, setCarePlan] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    setCarePlan(false);
    setError("");
    setSubmitting(false);
    setSubmitted(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const payload = {
      business: String(
        formData.get("business") ?? "",
      ).trim(),

      email: String(
        formData.get("email") ?? "",
      ).trim(),

      phone: String(
        formData.get("phone") ?? "",
      ).trim(),

      currentWebsite: String(
        formData.get("currentWebsite") ?? "",
      ).trim(),

      budget: String(
        formData.get("budget") ?? "",
      ).trim(),

      message: String(
        formData.get("message") ?? "",
      ).trim(),

      companyFax: String(
        formData.get("companyFax") ?? "",
      ).trim(),

      carePlan,

      selectedTemplate: {
        name: "Fitness Studio",
        type: "Fitness & Personal Training Website Design",
      },

      websiteType: "Ready-Made Website",
    };

    if (!payload.business || !payload.email) {
      setError(
        "Please enter your business name and email address.",
      );

      setSubmitting(false);
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(payload.email)) {
      setError("Please enter a valid email address.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "/api/project-enquiry",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(payload),
        },
      );

      const result = await response
        .json()
        .catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "We couldn't send your enquiry. Please try again.",
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#101510]/75 p-3 backdrop-blur-md sm:p-5">
      {/* BACKDROP */}
      <button
        type="button"
        aria-label="Close enquiry form"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />

      {/* MODAL */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Start with the Fitness Studio website design"
        className={`relative z-10 w-full overflow-hidden bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] ${
          submitted
            ? "max-w-[410px] rounded-[26px]"
            : "max-h-[90dvh] max-w-[560px] overflow-y-auto overscroll-contain rounded-[22px] sm:rounded-[28px]"
        }`}
      >
        <div className="h-1.5 bg-gradient-to-r from-lime-600 via-lime-400 to-lime-200" />

        {submitted ? (
          /* =================================================
             SUCCESS
          ================================================= */
          <div className="relative px-6 py-9 text-center sm:px-9 sm:py-10">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-gray-200 text-lg leading-none text-gray-400 transition hover:border-lime-400 hover:bg-lime-50 hover:text-lime-700"
            >
              ×
            </button>

            <div className="mx-auto grid size-16 place-items-center rounded-full bg-lime-500 text-2xl font-black text-black shadow-[0_14px_35px_rgba(132,204,22,0.25)]">
              ✓
            </div>

            <p className="mt-5 text-[9px] font-black uppercase tracking-[0.22em] text-lime-700">
              Enquiry Sent
            </p>

            <h2 className="mt-2 text-[1.9rem] font-black leading-tight tracking-[-0.04em] text-[#101510]">
              Request received
            </h2>

            <p className="mx-auto mt-3 max-w-[310px] text-sm leading-6 text-gray-500">
              Thanks — we&apos;ve received your project
              details and will be in touch shortly.
            </p>

            <div className="mx-auto mt-6 max-w-[300px] rounded-[16px] border border-lime-200 bg-lime-50 px-4 py-3.5">
              <p className="text-[8px] font-black uppercase tracking-[0.16em] text-lime-700">
                Selected Design
              </p>

              <p className="mt-1.5 text-sm font-black text-[#101510]">
                Fitness Studio
              </p>

              <p className="mt-0.5 text-[10px] text-gray-500">
                Fitness & Personal Training Website
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#101510] px-10 py-3 text-xs font-black text-white transition hover:bg-black sm:text-sm"
            >
              Done
            </button>
          </div>
        ) : (
          /* =================================================
             FORM
          ================================================= */
          <div className="p-4 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-lime-700">
                  Axis Studio · Fitness Demo
                </p>

                <h2 className="mt-2 text-[1.6rem] font-black leading-[1.08] tracking-[-0.04em] text-[#101510] sm:text-[2.1rem]">
                  Start with this design.
                </h2>

                <p className="mt-2 max-w-md text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                  Tell us a little about your business and
                  we&apos;ll explain how we can customise this
                  fitness website for you.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-gray-200 text-lg leading-none text-gray-400 transition hover:border-lime-400 hover:bg-lime-50 hover:text-lime-700"
              >
                ×
              </button>
            </div>

            {/* SELECTED DESIGN */}
            <div className="mt-5 flex items-center justify-between gap-3 rounded-[18px] border border-lime-200 bg-lime-50 p-3.5 sm:p-4">
              <div className="min-w-0">
                <p className="text-[8px] font-black uppercase tracking-[0.16em] text-lime-700">
                  Selected Design
                </p>

                <p className="mt-1 truncate text-sm font-black text-[#101510] sm:text-base">
                  Fitness Studio
                </p>

                <p className="mt-0.5 text-[10px] text-gray-500">
                  Fitness & Personal Training Website
                </p>
              </div>

              <span className="shrink-0 rounded-full border border-lime-300 bg-white px-2.5 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-lime-700">
                ✓ Selected
              </span>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-5"
            >
              {/* HONEYPOT */}
              <input
                type="text"
                name="companyFax"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* BUSINESS + EMAIL */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="business"
                    className="mb-2 block text-xs font-bold text-gray-800"
                  >
                    Business name{" "}
                    <span className="text-lime-700">
                      *
                    </span>
                  </label>

                  <input
                    id="business"
                    name="business"
                    type="text"
                    maxLength={120}
                    placeholder="Your business name"
                    className={fieldClass}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold text-gray-800"
                  >
                    Email address{" "}
                    <span className="text-lime-700">
                      *
                    </span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={254}
                    placeholder="you@example.com"
                    className={fieldClass}
                    required
                  />
                </div>
              </div>

              {/* PHONE + WEBSITE */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-bold text-gray-800"
                  >
                    Phone{" "}
                    <span className="font-normal text-gray-400">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={50}
                    placeholder="Phone number"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="currentWebsite"
                    className="mb-2 block text-xs font-bold text-gray-800"
                  >
                    Existing website{" "}
                    <span className="font-normal text-gray-400">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="currentWebsite"
                    name="currentWebsite"
                    type="url"
                    maxLength={300}
                    placeholder="https://..."
                    className={fieldClass}
                  />
                </div>
              </div>

              {/* BUDGET */}
              <div className="mt-4">
                <label
                  htmlFor="budget"
                  className="mb-2 block text-xs font-bold text-gray-800"
                >
                  Approximate budget{" "}
                  <span className="font-normal text-gray-400">
                    (optional)
                  </span>
                </label>

                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className={`${fieldClass} cursor-pointer`}
                >
                  <option value="">
                    Select a budget range
                  </option>

                  <option value="Under $500">
                    Under $500
                  </option>

                  <option value="$500 – $1,000">
                    $500 – $1,000
                  </option>

                  <option value="$1,000 – $2,000">
                    $1,000 – $2,000
                  </option>

                  <option value="$2,000+">
                    $2,000+
                  </option>

                  <option value="Not sure yet">
                    Not sure yet
                  </option>
                </select>
              </div>

              {/* CARE PLAN */}
              <button
                type="button"
                onClick={() =>
                  setCarePlan((value) => !value)
                }
                className={`mt-4 flex w-full items-start gap-3 rounded-[16px] border p-4 text-left transition ${
                  carePlan
                    ? "border-lime-400 bg-lime-50"
                    : "border-gray-200 bg-[#fafcf8] hover:border-lime-300"
                }`}
              >
                <span
                  className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border text-xs transition ${
                    carePlan
                      ? "border-lime-500 bg-lime-500 text-black"
                      : "border-gray-300 bg-white text-transparent"
                  }`}
                >
                  ✓
                </span>

                <div>
                  <p className="text-xs font-black text-[#101510] sm:text-sm">
                    Add Website Care Plan
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-gray-500 sm:text-xs">
                    Hosting, updates, backups and ongoing
                    website support.
                  </p>
                </div>
              </button>

              {/* MESSAGE */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold text-gray-800"
                >
                  Tell us about your project{" "}
                  <span className="font-normal text-gray-400">
                    (optional)
                  </span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  placeholder="Tell us about your gym, studio, personal training business or anything you would like changed."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-medium leading-6 text-[#101510] outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10"
                />
              </div>

              {error && (
                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-lime-500 px-6 py-3.5 text-sm font-black text-black shadow-[0_12px_28px_rgba(132,204,22,0.22)] transition hover:-translate-y-0.5 hover:bg-lime-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {submitting
                  ? "Sending Request..."
                  : "Send Website Enquiry →"}
              </button>

              <p className="mt-3 text-center text-[10px] font-medium text-gray-400">
                No payment or commitment required to send an
                enquiry.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   HOMEPAGE
========================================================= */

export default function Home() {
  /* FITNESS BUSINESS BOOKING */
  const [open, setOpen] = useState(false);

  const [selectedPlan, setSelectedPlan] =
    useState("Free Consultation");

  const [activePlan, setActivePlan] =
    useState<string | null>(null);

  /* AXIS TEMPLATE ENQUIRY */
  const [templateModalOpen, setTemplateModalOpen] =
    useState(false);

  /* TRANSFORMATION SLIDER */
  const [tIndex, setTIndex] = useState(0);

  const t = transformations[tIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setTIndex((previous) =>
        previous === transformations.length - 1
          ? 0
          : previous + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function openBooking(plan: string) {
    setSelectedPlan(plan);
    setActivePlan(null);
    setOpen(true);
  }

  function scrollToSection(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <>
      {/* =====================================================
          VITALFIT HEADER
      ====================================================== */}

      <Header
        onBook={(plan) => {
          setSelectedPlan(plan);
          setActivePlan(null);
          setOpen(true);
        }}
      />

      {/* =====================================================
          AXIS STUDIO DEMO STRIP
      ====================================================== */}

      <div className="border-b border-lime-200/70 bg-[#f5f9ee]">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          {/* MOBILE */}
          <div className="flex items-center justify-between gap-2 sm:hidden">
            <span className="shrink-0 rounded-full bg-[#101510] px-2.5 py-1 text-[7px] font-bold uppercase tracking-[0.14em] text-white">
              Axis Studio Demo
            </span>

            <button
              type="button"
              onClick={() =>
                setTemplateModalOpen(true)
              }
              className="inline-flex min-h-8 items-center justify-center rounded-lg border border-lime-500/25 bg-white px-3 text-[8px] font-bold text-lime-700 shadow-sm transition active:scale-[0.98]"
            >
              Start With This Design →
            </button>
          </div>

          {/* TABLET / DESKTOP */}
          <div className="hidden min-h-9 items-center justify-between gap-5 sm:flex">
            <div className="flex min-w-0 items-center gap-3">
              <span className="shrink-0 rounded-full bg-[#101510] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                Axis Studio Demo
              </span>

              <p className="truncate text-xs font-medium text-gray-500">
                Sample website content for design preview
                only.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setTemplateModalOpen(true)
              }
              className="shrink-0 rounded-lg border border-lime-500/25 bg-white px-4 py-2 text-xs font-semibold text-lime-700 transition hover:bg-lime-50"
            >
              Start With This Design →
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          FITNESS WEBSITE
      ====================================================== */}

      <main
        id="top"
        className="overflow-hidden bg-[#f7f8f5] text-[#101510]"
      >
        {/* =================================================
            HERO
        ================================================= */}

        <section className="mx-auto grid max-w-7xl items-center gap-9 px-4 pb-16 pt-6 sm:gap-10 sm:px-6 sm:pb-20 sm:pt-7 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-24 lg:pt-8">
          {/* COPY */}
          <FadeUp>
            <div>
              <p className="mb-4 inline-flex rounded-full bg-lime-100 px-4 py-2 text-[10px] font-black uppercase tracking-wide text-lime-700 sm:mb-5 sm:text-xs">
                Train smart. Stay strong.
              </p>

              <h1 className="max-w-3xl text-[2.65rem] font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[4.35rem]">
                Stronger Today,
                <span className="mt-1 block text-lime-600">
                  Healthier Tomorrow.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                Personalised training, expert coaching and
                structured programs designed to help you build
                strength, improve fitness and feel your best.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() =>
                    openBooking("Free Consultation")
                  }
                  className="group inline-flex min-h-13 items-center justify-center rounded-2xl bg-lime-500 px-6 py-3.5 text-sm font-black text-black shadow-lg shadow-lime-200/70 transition duration-300 hover:-translate-y-0.5 hover:bg-lime-400 sm:min-h-14 sm:px-7 sm:py-4 sm:text-base"
                >
                  Start Your Journey

                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    scrollToSection("programs")
                  }
                  className="inline-flex min-h-13 items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-black transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:min-h-14 sm:px-7 sm:py-4 sm:text-base"
                >
                  Explore Programs
                </button>
              </div>
            </div>
          </FadeUp>

          {/* IMAGE */}
          <ScaleIn delay={0.12}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-lime-200/40 blur-3xl sm:-inset-8" />

              <div className="relative overflow-hidden rounded-[1.65rem] shadow-2xl shadow-black/15 sm:rounded-[2rem]">
                <img
                  src="/images/hero.jpg"
                  alt="Fitness training session"
                  className="h-[340px] w-full object-cover object-[72%_center] sm:h-[420px] lg:h-[490px] lg:object-[82%_center]"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-lime-200/10" />
              </div>

              {/* DESKTOP / TABLET FLOATING STATS */}
              <div className="absolute right-4 top-1/2 hidden w-[220px] -translate-y-1/2 rounded-[1.65rem] border border-white/15 bg-black/25 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl sm:block lg:right-5 lg:w-56 lg:rounded-[2rem]">
                {heroStats.map(
                  (
                    {
                      label,
                      value,
                      icon: Icon,
                    },
                    index,
                  ) => (
                    <div key={label}>
                      {index !== 0 && (
                        <div className="my-3.5 h-px bg-white/15 lg:my-4" />
                      )}

                      <div className="flex items-center gap-3.5">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/25 text-lime-200 lg:size-11 lg:rounded-2xl">
                          <Icon size={21} />
                        </div>

                        <div>
                          <p className="text-xs text-white/65 lg:text-sm">
                            {label}
                          </p>

                          <p className="mt-0.5 text-[1.55rem] font-black leading-none text-white lg:text-[1.8rem]">
                            {value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>

              {/* MOBILE STATS */}
              <div className="mt-3 grid grid-cols-3 gap-2 sm:hidden">
                {[
                  ["Members", "500+"],
                  ["Sessions", "10K+"],
                  ["Satisfaction", "98%"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-black/5 bg-white px-2 py-3 text-center shadow-sm"
                  >
                    <p className="text-base font-black leading-none">
                      {value}
                    </p>

                    <p className="mt-1.5 text-[8px] font-bold leading-tight text-gray-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScaleIn>
        </section>

        {/* =================================================
            PROGRAMS
        ================================================= */}

        <section
          id="programs"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
        >
          <FadeUp>
            <div className="mb-7 flex flex-col justify-between gap-5 sm:mb-9 md:flex-row md:items-end lg:mb-10">
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-lime-600 sm:text-sm">
                  Our Programs
                </p>

                <h2 className="mt-2.5 max-w-xl text-[2rem] font-black leading-[1.05] tracking-[-0.04em] sm:mt-3 sm:text-4xl lg:text-5xl">
                  Find the right program for your goal.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
                  Choose a training approach that fits your
                  goals, fitness level and lifestyle.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  scrollToSection("pricing")
                }
                className="w-fit rounded-xl border border-gray-300 bg-white px-5 py-3 text-xs font-black transition hover:-translate-y-0.5 hover:shadow-lg sm:rounded-2xl sm:px-6 sm:text-sm"
              >
                View Memberships →
              </button>
            </div>
          </FadeUp>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {programs.map(
              (program, index) => (
                <ScaleIn
                  key={program.title}
                  delay={index * 0.07}
                >
                  <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10 sm:rounded-[2rem]">
                    <div className="relative h-52 overflow-hidden sm:h-56">
                      <ParallaxImage
                        src={program.image}
                        alt={program.title}
                        className="h-full w-full transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="text-lg font-black sm:text-xl">
                        {program.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-6 text-gray-600 sm:mt-3">
                        {program.text}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          openBooking(program.title)
                        }
                        className="mt-auto pt-5 text-left text-sm font-black text-lime-600 transition group-hover:translate-x-1"
                      >
                        Learn More →
                      </button>
                    </div>
                  </article>
                </ScaleIn>
              ),
            )}
          </div>
        </section>

        {/* =================================================
            STATS
        ================================================= */}

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-black/[0.04] bg-[#f2f5ef] p-4 shadow-xl shadow-black/5 sm:rounded-[2.5rem] sm:p-7 lg:rounded-[2.75rem] lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-lime-200/20 opacity-40 blur-2xl" />

            <div className="pointer-events-none absolute -bottom-20 -right-20 size-52 rounded-full bg-lime-200/30 blur-3xl" />

            <div className="relative grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {stats.map(
                (stat, index) => (
                  <ScaleIn
                    key={stat.label}
                    delay={index * 0.06}
                  >
                    <div className="group flex h-full flex-col items-center justify-center rounded-[1.25rem] border border-black/5 bg-white/85 p-4 text-center backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-lime-200/40 sm:rounded-[1.75rem] sm:p-6 lg:rounded-[2rem] lg:p-7">
                      <div className="mx-auto mb-3 flex size-11 items-center justify-center rounded-xl bg-lime-100 text-lime-700 transition duration-300 group-hover:scale-105 group-hover:bg-lime-500 group-hover:text-black sm:mb-5 sm:size-14 sm:rounded-2xl">
                        {stat.icon}
                      </div>

                      <h3 className="text-2xl font-black tracking-tight text-black sm:text-4xl">
                        <Counter
                          value={stat.value}
                          suffix={stat.suffix}
                        />
                      </h3>

                      <p className="mt-1.5 text-[10px] font-semibold leading-tight text-gray-500 sm:mt-2 sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </ScaleIn>
                ),
              )}
            </div>
          </div>
        </section>

        {/* =================================================
            RESULTS / TRANSFORMATIONS
        ================================================= */}

        <section
          id="results"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
        >
          <div className="grid items-center gap-7 sm:gap-9 lg:grid-cols-[0.8fr_1.2fr_1fr] lg:gap-10">
            {/* INTRO */}
            <FadeUp>
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-lime-600 sm:text-sm">
                  Member Progress
                </p>

                <h2 className="mt-2.5 text-[2rem] font-black leading-[1.05] tracking-[-0.04em] sm:mt-3 sm:text-4xl lg:text-5xl">
                  Show the journey.
                  <span className="block">
                    Celebrate the progress.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-6 text-gray-600 sm:mt-5 sm:text-base sm:leading-7">
                  A finished fitness website can showcase
                  genuine member stories and approved
                  transformation results to help build trust
                  with future clients.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    openBooking("Free Consultation")
                  }
                  className="mt-5 rounded-xl border border-gray-300 bg-white px-5 py-3 text-xs font-black transition hover:-translate-y-0.5 hover:shadow-lg sm:mt-7 sm:rounded-2xl sm:px-6 sm:text-sm"
                >
                  Start Your Journey →
                </button>
              </div>
            </FadeUp>

            {/* BEFORE / AFTER */}
            <ScaleIn delay={0.1}>
              <div className="group overflow-hidden rounded-[1.5rem] bg-white shadow-xl shadow-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 sm:rounded-[2rem]">
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tIndex}
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -30,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                      }}
                      className="grid grid-cols-2"
                    >
                      <div className="relative h-[235px] overflow-hidden sm:h-[300px] lg:h-[320px]">
                        <img
                          src={t.before}
                          alt="Sample before fitness image"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        <span className="absolute left-2.5 top-2.5 rounded-full bg-black/70 px-2.5 py-1 text-[8px] font-bold uppercase text-white backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:text-[10px]">
                          Sample Before
                        </span>
                      </div>

                      <div className="relative h-[235px] overflow-hidden sm:h-[300px] lg:h-[320px]">
                        <img
                          src={t.after}
                          alt="Sample after fitness image"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        <span className="absolute right-2.5 top-2.5 rounded-full bg-lime-500 px-2.5 py-1 text-[8px] font-bold uppercase text-black sm:right-4 sm:top-4 sm:px-3 sm:text-[10px]">
                          Sample After
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* ARROWS - FIXED INSIDE IMAGE */}
                  <div className="absolute bottom-3 right-3 flex gap-2 sm:bottom-4 sm:right-4">
                    <button
                      type="button"
                      aria-label="Previous sample story"
                      onClick={() =>
                        setTIndex((previous) =>
                          previous === 0
                            ? transformations.length - 1
                            : previous - 1,
                        )
                      }
                      className="grid size-9 place-items-center rounded-full bg-white text-sm font-black shadow-lg transition hover:bg-lime-500 sm:size-10"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      aria-label="Next sample story"
                      onClick={() =>
                        setTIndex((previous) =>
                          previous ===
                          transformations.length - 1
                            ? 0
                            : previous + 1,
                        )
                      }
                      className="grid size-9 place-items-center rounded-full bg-white text-sm font-black shadow-lg transition hover:bg-lime-500 sm:size-10"
                    >
                      →
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div>
                    <h3 className="text-lg font-black sm:text-xl">
                      {t.result}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      {t.plan}
                    </p>
                  </div>

                  <span className="w-fit rounded-xl bg-lime-100 px-3 py-2 text-[10px] font-black text-lime-700 sm:rounded-2xl sm:px-4 sm:text-sm">
                    {t.stats}
                  </span>
                </div>
              </div>
            </ScaleIn>

            {/* SAMPLE TESTIMONIAL LAYOUT */}
            <ScaleIn delay={0.2}>
              <div className="rounded-[1.5rem] bg-white p-5 shadow-xl shadow-black/5 sm:rounded-[2rem] sm:p-7 lg:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-lime-100 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.13em] text-lime-700 sm:text-[9px]">
                    Sample Testimonial
                  </span>

                  <span className="text-4xl font-black leading-none text-lime-500 sm:text-5xl">
                    “
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={tIndex}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="mt-4 text-sm leading-7 text-gray-700 sm:text-base"
                  >
                    {t.comment}
                  </motion.p>
                </AnimatePresence>

                <div className="mt-5 flex items-center gap-3 sm:mt-6 sm:gap-4">
                  <img
                    src={t.client}
                    alt="Sample member profile"
                    className="size-11 rounded-full object-cover sm:size-12"
                  />

                  <div>
                    <h4 className="text-sm font-black sm:text-base">
                      {t.name}
                    </h4>

                    <p className="mt-0.5 text-[10px] font-semibold text-lime-600 sm:text-xs">
                      Demonstration profile
                    </p>
                  </div>
                </div>

                {/* NO FAKE STAR REVIEW */}
                <div className="mt-5 rounded-xl border border-black/5 bg-[#f7f8f5] px-4 py-3 sm:mt-6">
                  <p className="text-[10px] leading-5 text-gray-500 sm:text-xs">
                    On a real client website, this area would
                    display genuine feedback supplied and
                    approved by the business.
                  </p>
                </div>

                <div className="mt-5 flex gap-2">
                  {transformations.map(
                    (_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`View sample story ${
                          index + 1
                        }`}
                        onClick={() =>
                          setTIndex(index)
                        }
                        className={`h-2.5 rounded-full transition-all ${
                          tIndex === index
                            ? "w-8 bg-lime-500"
                            : "w-2.5 bg-gray-200"
                        }`}
                      />
                    ),
                  )}
                </div>
              </div>
            </ScaleIn>
          </div>

          {/* DISCLOSURE */}
          <div className="mt-5 flex justify-center sm:mt-7">
            <div className="max-w-3xl rounded-xl border border-black/5 bg-white/75 px-4 py-3 text-center text-[9px] leading-4 text-gray-400 sm:rounded-2xl sm:px-5 sm:text-xs sm:leading-5">
              <strong className="font-bold text-gray-500">
                Demo content:
              </strong>{" "}
              Names, testimonials, photographs and
              transformation examples shown here are used for
              design demonstration only. A finished website
              would use genuine, approved client content.
            </div>
          </div>
        </section>

        {/* =================================================
            PRICING
        ================================================= */}

        <section
          id="pricing"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
        >
          <FadeUp>
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-wide text-lime-600 sm:text-sm">
                Membership Plans
              </p>

              <h2 className="mx-auto mt-2.5 max-w-3xl text-[2rem] font-black leading-[1.05] tracking-[-0.04em] sm:mt-3 sm:text-4xl lg:text-5xl">
                Simple plans.
                <span className="block sm:inline">
                  {" "}
                  Serious progress.
                </span>
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
                Choose the level of training and support that
                best fits your goals.
              </p>
            </div>
          </FadeUp>

          <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-3 lg:mt-12 lg:gap-6">
            {pricingPlans.map(
              (plan, index) => {
                const popular =
                  plan.popular === true;

                return (
                  <ScaleIn
                    key={plan.name}
                    delay={index * 0.08}
                  >
                    <div
                      onClick={() => {
                        setActivePlan(plan.name);
                        setSelectedPlan(plan.name);
                      }}
                      className={`relative flex h-full cursor-pointer flex-col rounded-[1.5rem] bg-white p-6 transition duration-300 hover:-translate-y-1 sm:rounded-[2rem] sm:p-7 lg:p-8 ${
                        activePlan === plan.name ||
                        popular
                          ? "border-2 border-lime-500 shadow-[0_20px_50px_rgba(132,204,22,0.22)]"
                          : "border border-black/5 shadow-xl shadow-black/5 hover:border-lime-300 hover:shadow-2xl"
                      }`}
                    >
                      {popular && (
                        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-lime-500 px-3.5 py-1 text-[9px] font-black text-black sm:-top-4 sm:px-4 sm:text-xs">
                          Most Popular
                        </span>
                      )}

                      <h3 className="text-lg font-black sm:text-xl">
                        {plan.name}
                      </h3>

                      <p className="mt-2.5 text-3xl font-black sm:mt-3 sm:text-4xl">
                        {plan.price}

                        <span className="text-base font-medium text-gray-500 sm:text-lg">
                          /month
                        </span>
                      </p>

                      <ul className="mt-5 space-y-3 text-sm text-gray-600 sm:mt-6">
                        {plan.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2"
                          >
                            <Check
                              size={16}
                              className="mt-0.5 shrink-0 text-lime-600"
                            />

                            {item}
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();

                          setActivePlan(plan.name);
                          setSelectedPlan(plan.name);
                          setOpen(true);
                        }}
                        className={`mt-auto pt-7`}
                      >
                        <span
                          className={`flex min-h-11 w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-black transition ${
                            popular
                              ? "bg-lime-500 text-black shadow-lg shadow-lime-200 hover:bg-lime-400"
                              : "border border-gray-300 bg-white hover:border-lime-300 hover:shadow-lg"
                          }`}
                        >
                          Get Started
                        </span>
                      </button>
                    </div>
                  </ScaleIn>
                );
              },
            )}
          </div>

          <p className="mt-5 text-center text-[9px] leading-4 text-gray-400 sm:mt-7 sm:text-xs sm:leading-5">
            Membership names, features and prices are sample
            content used for this website design
            demonstration.
          </p>
        </section>

        {/* =================================================
            FITNESS BUSINESS CTA
        ================================================= */}

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
          <FadeUp>
            <div className="relative overflow-hidden rounded-[1.75rem] bg-lime-500 p-6 shadow-2xl shadow-lime-200 sm:rounded-[2.25rem] sm:p-8 lg:rounded-[2.5rem] lg:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/30 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-black/10 blur-3xl" />

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-lime-900 sm:text-sm">
                    Ready to start?
                  </p>

                  <h2 className="mt-2.5 max-w-xl text-[2rem] font-black leading-[1.05] tracking-[-0.04em] text-black sm:mt-3 sm:text-4xl lg:text-5xl">
                    Your best self is one workout away.
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    "Flexible Plans",
                    "Expert Coaching",
                    "Friendly Support",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/35 px-3 py-2 text-[10px] font-bold backdrop-blur-sm sm:px-4 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    openBooking("Free Trial")
                  }
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-black px-6 py-3.5 text-sm font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#101510] active:scale-[0.98] sm:rounded-2xl sm:px-7 sm:py-4"
                >
                  Start Free Trial →
                </button>
              </motion.div>
            </div>
          </FadeUp>
        </section>
      </main>

      {/* =====================================================
          AXIS STUDIO BOTTOM CTA
      ====================================================== */}

      <section className="bg-[#f7f8f5] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#090909] px-5 py-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.16)] sm:rounded-[2rem] sm:px-8 sm:py-9 lg:px-12 lg:py-11">
            {/* GLOWS */}
            <div className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-lime-400/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-28 left-[28%] size-64 rounded-full bg-lime-400/[0.06] blur-3xl" />

            <div className="relative grid items-center gap-7 sm:gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
              {/* LEFT */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-lime-500 px-3 py-1 text-[8px] font-black uppercase tracking-[0.15em] text-black sm:text-[9px]">
                    Axis Studio Demo
                  </span>

                  <span className="text-[9px] font-medium text-white/40 sm:text-[10px]">
                    Fitness Studio
                  </span>
                </div>

                <h2 className="mt-4 text-[1.85rem] font-black leading-[1.04] tracking-[-0.045em] text-white sm:text-[2.5rem] lg:text-[3rem]">
                  Like this website?

                  <span className="block text-lime-400">
                    Make this design yours.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                  Axis Studio can customise this design with
                  your business name, branding, colours,
                  programs, membership options, images,
                  content and contact details — then help
                  prepare everything for launch.
                </p>

                <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-3">
                  {[
                    "Customised for your business",
                    "Mobile-friendly",
                    "Setup & launch included",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 text-xs font-bold text-white/65 sm:text-sm"
                    >
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-lime-400/10 text-lime-400">
                        <Check
                          size={11}
                          strokeWidth={3}
                        />
                      </span>

                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4 sm:rounded-[1.4rem] sm:p-5">
                  <p className="text-[9px] font-black uppercase tracking-[0.17em] text-lime-400">
                    Interested In This Design?
                  </p>

                  <h3 className="mt-2 text-lg font-black tracking-[-0.025em] text-white sm:text-xl lg:text-2xl">
                    Start with the Fitness Studio website
                    style.
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
                    Tell us about your business and
                    we&apos;ll explain how this design can be
                    customised for you.
                  </p>

                  <div className="mt-5 grid gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setTemplateModalOpen(true)
                      }
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 py-3 text-sm font-black text-black shadow-[0_12px_28px_rgba(163,230,53,0.18)] transition hover:-translate-y-0.5 hover:bg-lime-300"
                    >
                      Start With This Design

                      <ArrowRight className="size-4" />
                    </button>

                    <a
                      href="https://axistudio.studio/templates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-black text-white transition hover:border-lime-400/35 hover:bg-white/[0.08]"
                    >
                      View More Designs

                      <ArrowRight className="size-4" />
                    </a>
                  </div>

                  <p className="mt-3 text-center text-[9px] leading-4 text-white/25 sm:mt-4">
                    This website is an Axis Studio
                    demonstration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* FITNESS BUSINESS MODAL */}
      <BookingModal
        open={open}
        setOpen={setOpen}
        selectedPlan={selectedPlan}
      />

      {/* AXIS TEMPLATE ENQUIRY MODAL */}
      <FitnessTemplateEnquiryModal
        open={templateModalOpen}
        onClose={() =>
          setTemplateModalOpen(false)
        }
      />
    </>
  );
}
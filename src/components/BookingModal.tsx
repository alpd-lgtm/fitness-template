"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Mail, Phone, User, X } from "lucide-react";
import { useState } from "react";

export default function BookingModal({
  open,
  setOpen,
  selectedPlan,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  selectedPlan: string;
}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");

    existing.push({
      ...data,
      createdAt: new Date().toISOString(),
    });

    localStorage.setItem("bookings", JSON.stringify(existing));

    setLoading(false);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setOpen(false);
    }, 1600);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_30px_90px_rgba(0,0,0,0.22)]"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime-200/60 blur-3xl" />

            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
            >
              <X size={18} />
            </button>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-14 text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-500 text-3xl font-black text-black">
                  ✓
                </div>
                <h2 className="mt-6 text-3xl font-black">Booking Saved</h2>
                <p className="mt-3 text-gray-600">
                  Demo booking has been stored successfully.
                </p>
              </motion.div>
            ) : (
              <>
                <p className="text-sm font-black uppercase tracking-wide text-lime-600">
                  Free Consultation
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight">
                  Book your fitness session
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
                  Tell us your goal and preferred time. 
                  Our team will get back to you shortly to confirm your session.
                </p>

                <div className="mt-4 rounded-2xl bg-lime-100 px-4 py-3 text-sm font-black text-lime-700">
  Selected Plan: {selectedPlan}
</div>

                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                    <input type="hidden" name="plan" value={selectedPlan} />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field icon={<User size={18} />}>
                      <input
                        name="name"
                        placeholder="Full name"
                        className="field-input"
                        required
                      />
                    </Field>

                    <Field icon={<Mail size={18} />}>
                      <input
                        name="email"
                        type="email"
                        placeholder="Email address"
                        className="field-input"
                        required
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field icon={<Phone size={18} />}>
                      <input
                        name="phone"
                        placeholder="Phone number"
                        className="field-input"
                      />
                    </Field>

                    <select name="goal" className="input-premium">
                      <option>Strength</option>
                      <option>Fat Loss</option>
                      <option>Mobility</option>
                      <option>General Fitness</option>
                    </select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field icon={<Calendar size={18} />}>
                      <input name="date" type="date" className="field-input" />
                    </Field>

                    <Field icon={<Clock size={18} />}>
                      <input name="time" type="time" className="field-input" />
                    </Field>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Tell us about your fitness goal..."
                    className="input-premium h-28 resize-none"
                  />

                  <button
                    disabled={loading}
                    className="w-full rounded-2xl bg-lime-500 py-4 font-black text-black shadow-xl shadow-lime-200 transition duration-300 hover:-translate-y-1 hover:bg-lime-400 disabled:opacity-60"
                  >
                    {loading ? "Saving..." : "Confirm Booking"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-lime-500 focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(132,204,22,0.15)]">
      <span className="text-gray-400">{icon}</span>
      {children}
    </div>
  );
}
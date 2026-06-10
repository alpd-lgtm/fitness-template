"use client";

import { ArrowRight, Dumbbell, Globe, Mail, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f7f8f5] px-6 pb-10 pt-10">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-black/5 bg-white p-10 shadow-xl shadow-black/5">
        <div className="grid gap-10 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-500 text-black shadow-md shadow-lime-200">
                <Zap size={20} fill="currentColor" />
              </div>
              <span className="text-xl font-black tracking-tight">
                VitalFit
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
              Stronger every day. Premium fitness programs built for real
              results.
            </p>

            <div className="mt-6 flex gap-3">
              <a className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:-translate-y-1 hover:border-lime-400 hover:text-black hover:shadow-md hover:shadow-lime-200/40">
                <Dumbbell size={16} />
              </a>

              <a className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:-translate-y-1 hover:border-lime-400 hover:text-black hover:shadow-md hover:shadow-lime-200/40">
                <Globe size={16} />
              </a>

              <a className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:-translate-y-1 hover:border-lime-400 hover:text-black hover:shadow-md hover:shadow-lime-200/40">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wide text-gray-800">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              {["Home", "Programs", "Coaches", "Pricing"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition hover:translate-x-1 hover:text-black"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wide text-gray-800">
              Support
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              {["Contact", "FAQs", "Privacy Policy", "Terms"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition hover:translate-x-1 hover:text-black"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wide text-gray-800">
              Newsletter
            </h4>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              Get fitness tips, offers, and updates.
            </p>

            <div className="mt-5 flex overflow-hidden rounded-2xl border border-gray-200 bg-[#f7f8f5] transition focus-within:border-lime-400 focus-within:shadow-md focus-within:shadow-lime-200/40">
              <input
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-3 text-sm outline-none"
              />

              <button className="flex items-center justify-center bg-lime-500 px-4 text-black transition hover:bg-lime-400">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 VitalFit. All rights reserved.</p>

          <div className="flex gap-5">
            <span className="cursor-pointer transition hover:text-black">
              Privacy
            </span>
            <span className="cursor-pointer transition hover:text-black">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useState } from "react";

const inquiryTypes = [
  "Parent — I want My ROBATO for my child",
  "School / Educator — Curriculum partnership",
  "Investor — Strategic interest",
  "Partner — Brand or content collaboration",
  "Press — Media inquiry",
  "Other",
];

const contactPoints = [
  { icon: "✉", label: "General",    value: "hello@myrobato.com" },
  { icon: "⊙", label: "Educators",  value: "schools@myrobato.com" },
  { icon: "◎", label: "Investors",  value: "invest@myrobato.com" },
  { icon: "⬡", label: "Location",   value: "Remote-first · Manila, Philippines" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: inquiryTypes[0], message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-mint-400/7 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint-400 mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-5">
            We&apos;d love to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-gold-300">
              hear from you.
            </span>
          </h1>
          <p className="text-xl text-white/40 leading-relaxed max-w-xl mx-auto">
            Whether you are a parent, educator, investor, or partner — there is a conversation here for you.
          </p>
        </div>
      </section>

      {/* ── Contact body ── */}
      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-14">

          {/* Info col */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-stone-900 tracking-tight mb-8">Get in touch</h2>

            <div className="space-y-5 mb-10">
              {contactPoints.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center justify-center text-stone-500 flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 mb-0.5">{c.label}</p>
                    <p className="text-sm text-stone-700">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Who we talk to */}
            <div className="bg-navy-900 rounded-3xl p-6 border border-white/8">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-mint-400 mb-4">Who reaches out</p>
              <ul className="space-y-2.5">
                {["Parents ready to give their child the best start", "Schools looking for a meaningful curriculum partner", "Investors who believe in the future of personalized education", "Brands and creators aligned with the ROBATO world"].map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-sm text-white/50">
                    <span className="text-mint-400 mt-0.5 flex-shrink-0">→</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form col */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-3xl border border-stone-100 shadow-sm h-full flex flex-col items-center justify-center text-center py-20 px-8">
                <div className="w-16 h-16 rounded-full bg-mint-100 flex items-center justify-center text-mint-500 text-2xl font-bold mb-5">✓</div>
                <h3 className="text-2xl font-black text-stone-900 tracking-tight mb-3">Message received.</h3>
                <p className="text-stone-400 text-sm leading-relaxed max-w-xs mb-8">
                  Thank you for reaching out. Our team will get back to you within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", type: inquiryTypes[0], message: "" }); }}
                  className="px-5 py-2.5 text-sm font-semibold text-stone-700 bg-white border border-stone-200 rounded-full hover:border-stone-300 hover:bg-stone-50 transition-all shadow-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-stone-100 shadow-sm p-8 space-y-5">
                {[
                  { id: "name",  label: "Your name",     type: "text",  placeholder: "Full name" },
                  { id: "email", label: "Email address",  type: "email", placeholder: "you@example.com" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 mb-1.5">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required
                      value={form[f.id as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      className="w-full rounded-xl border border-stone-200 bg-cream px-4 py-3 text-sm text-stone-900 placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-mint-400 focus:border-transparent transition"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="type" className="block text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 mb-1.5">
                    I am reaching out as a
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-stone-200 bg-cream px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-mint-400 focus:border-transparent transition"
                  >
                    {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind…"
                    className="w-full rounded-xl border border-stone-200 bg-cream px-4 py-3 text-sm text-stone-900 placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-mint-400 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-bold text-white bg-mint-500 rounded-full hover:bg-mint-600 transition-colors shadow-sm"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

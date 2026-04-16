"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const contactReasons = [
  "General inquiry",
  "Program question",
  "Technical support",
  "Partnership",
  "Press",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: contactReasons[0],
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to backend / email service
    setSubmitted(true);
  }

  return (
    <>
      {/* Page hero */}
      <section className="bg-stone-50 pt-20 pb-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            We&apos;d love to hear from you.
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Have a question, idea, or just want to say hello? Our team usually
            responds within one business day.
          </p>
        </div>
      </section>

      {/* Contact layout */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2 className="text-xl font-bold text-stone-900 mb-6">
              Get in touch
            </h2>
            <div className="space-y-6">
              {[
                {
                  label: "Email",
                  value: "hello@robato.com",
                  icon: "✉",
                },
                {
                  label: "Support",
                  value: "support@robato.com",
                  icon: "⊙",
                },
                {
                  label: "Office",
                  value: "Manila, Philippines · Remote-first",
                  icon: "◎",
                },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-sm text-stone-700">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-indigo-50 border border-indigo-100 p-6">
              <p className="text-sm font-semibold text-indigo-900 mb-1">
                Looking for faster answers?
              </p>
              <p className="text-sm text-indigo-700">
                Browse our FAQ on the{" "}
                <a href="/programs" className="underline underline-offset-2">
                  Programs page
                </a>{" "}
                — most questions are answered there.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  Message received!
                </h3>
                <p className="text-stone-500 text-sm mb-6">
                  Thanks for reaching out. We&apos;ll get back to you within
                  one business day.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      subject: contactReasons[0],
                      message: "",
                    });
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-1.5"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                  >
                    {contactReasons.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-1.5"
                  >
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
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

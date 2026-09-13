import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { WhatsAppIcon } from "../components/Navbar";

const PHONE = "916374392488";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hi Skanda's Naturals, I'd like to place an order or ask a question.")}`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Skanda's Naturals — Pollachi Cold Pressed Oils" },
      {
        name: "description",
        content:
          "Contact Skanda's Naturals in Pollachi, Tamil Nadu. Order pure wood cold pressed oils via WhatsApp or send us an inquiry.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "", product: "Coconut Oil" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20 sm:pt-24 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 min-h-screen">
      {/* Contact Hero Section */}
      <section className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center space-y-4">
        <p className="section-tag mb-2">Get In Touch</p>

        <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-stone-900 dark:text-stone-100">
          We'd Love To Hear From You
        </h1>

        <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto font-sans leading-relaxed">
          Whether you want to place a quick order, ask about our wood cold pressing process, or explore bulk orders across India.
        </p>
      </section>

      {/* Main Grid: Contact Details & Form */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-stone-900 text-stone-100 border border-white/10 shadow-2xl space-y-6">
              <p className="text-lime-400 text-xs font-mono uppercase tracking-widest">
                Fastest Way To Order
              </p>

              <h2 className="text-2xl font-display font-medium">
                Order Directly Via WhatsApp
              </h2>

              <p className="text-sm text-stone-300 font-sans leading-relaxed">
                Connect directly with founder <strong className="text-white">Yuva Priya</strong> for instant order confirmation and home delivery details.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-lime-400 text-stone-950 text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-lime-300 transition-all duration-200"
              >
                <WhatsAppIcon className="w-5 h-5 fill-stone-950 text-stone-950" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Address & Info Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-start gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-lime-400/20 text-lime-700 dark:text-lime-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-stone-900 dark:text-stone-100">
                    Location & Heritage
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 font-sans">
                    Skanda's Naturals, Pollachi, Tamil Nadu — 642001, India
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-start gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-lime-400/20 text-lime-700 dark:text-lime-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-stone-900 dark:text-stone-100">
                    Phone & WhatsApp
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 font-sans">
                    +91 63743 92488
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-start gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-lime-400/20 text-lime-700 dark:text-lime-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-stone-900 dark:text-stone-100">
                    Operating Hours
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 font-sans">
                    Monday – Saturday: 9:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-lg">
              <h2 className="text-2xl font-display font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Send Us A Message
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-400 font-sans mb-8">
                Fill out your details below and we will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-lime-500/10 border border-lime-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-lime-400 text-stone-950 flex items-center justify-center mx-auto">
                    <Send className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-stone-900 dark:text-stone-100">
                    Thank You! Message Received.
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300">
                    We will respond to your query at {formData.phone || "your phone number"} shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyadarshini"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                      Product Of Interest
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                    >
                      <option value="Coconut Oil">Wood Cold Pressed Coconut Oil</option>
                      <option value="Groundnut Oil">Wood Cold Pressed Groundnut Oil</option>
                      <option value="Sesame Oil">Wood Cold Pressed Sesame Oil</option>
                      <option value="All Oils / Custom Pack">All Oils / Custom Gift Box</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                      Message or Inquiry
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us what you'd like to order or ask..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-lime-400 text-stone-950 text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-lime-300 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

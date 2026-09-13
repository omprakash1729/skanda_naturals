import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, Eye, Mail, Phone, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#090f0a] text-stone-100 py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 hover:text-lime-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-stone-100">
            Privacy Policy
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Last updated: September 13, 2026. At <strong>Skanda's Naturals</strong>, we value your privacy and are committed to protecting your personal information.
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-10 text-stone-300 text-sm sm:text-base leading-relaxed">
          <section className="p-8 rounded-2xl bg-[#0e1610] border border-white/10 space-y-4 shadow-md">
            <div className="flex items-center gap-3 text-lime-400">
              <ShieldCheck className="w-6 h-6" />
              <h2 className="text-xl font-display font-semibold text-stone-100">1. Information We Collect</h2>
            </div>
            <p>
              When you browse our website or place an order via WhatsApp, we may collect basic details necessary to fulfill your request:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-300 pl-2">
              <li>Your name and contact phone number (WhatsApp).</li>
              <li>Delivery address for shipping our wood cold pressed oils.</li>
              <li>Order details (selected oil variety and bottle sizes).</li>
            </ul>
          </section>

          <section className="p-8 rounded-2xl bg-[#0e1610] border border-white/10 space-y-4 shadow-md">
            <div className="flex items-center gap-3 text-lime-400">
              <Lock className="w-6 h-6" />
              <h2 className="text-xl font-display font-semibold text-stone-100">2. How We Use Your Data</h2>
            </div>
            <p>
              Your information is used strictly to process orders, communicate shipment statuses, answer customer support queries, and ensure smooth delivery across South India and India.
            </p>
            <p>
              We <strong>never sell, trade, or share</strong> your personal details with third-party marketers or data brokers.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-[#0e1610] border border-white/10 space-y-4 shadow-md">
            <div className="flex items-center gap-3 text-lime-400">
              <Eye className="w-6 h-6" />
              <h2 className="text-xl font-display font-semibold text-stone-100">3. WhatsApp Communication & Security</h2>
            </div>
            <p>
              Orders are placed directly through WhatsApp Web / App. WhatsApp communications are end-to-end encrypted according to WhatsApp's standard security policies.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-[#0e1610] border border-white/10 space-y-4 shadow-md">
            <div className="flex items-center gap-3 text-lime-400">
              <Phone className="w-6 h-6" />
              <h2 className="text-xl font-display font-semibold text-stone-100">4. Contacting Us</h2>
            </div>
            <p>
              If you have any questions regarding our Privacy Policy or wish to update your order information, please reach out directly:
            </p>
            <div className="pt-2 text-sm text-stone-300 space-y-1">
              <p><strong>Founder:</strong> Yuva Priya</p>
              <p><strong>Location:</strong> Pollachi, Tamil Nadu, India</p>
              <p><strong>Phone / WhatsApp:</strong> +91 63743 92488</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

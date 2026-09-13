import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, Truck, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
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
            Terms & Conditions
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Last updated: September 13, 2026. Welcome to <strong>Skanda's Naturals</strong>. By purchasing or inquiring about our wood cold pressed oils, you agree to the following terms.
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-10 text-stone-300 text-sm sm:text-base leading-relaxed">
          <section className="p-8 rounded-2xl bg-[#0e1610] border border-white/10 space-y-4 shadow-md">
            <div className="flex items-center gap-3 text-lime-400">
              <CheckCircle2 className="w-6 h-6" />
              <h2 className="text-xl font-display font-semibold text-stone-100">1. Product Quality & Authenticity</h2>
            </div>
            <p>
              All Skanda's Naturals Groundnut, Sesame, and Coconut oils are 100% unrefined, wood cold-pressed (Chekku / Mara Chekku) extracted in Pollachi, Tamil Nadu.
            </p>
            <p>
              Because our oils are unrefined and free from artificial bleaching or chemical refining agents, slight natural sedimentation at the bottom of the bottle is normal and proof of pure traditional extraction.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-[#0e1610] border border-white/10 space-y-4 shadow-md">
            <div className="flex items-center gap-3 text-lime-400">
              <Truck className="w-6 h-6" />
              <h2 className="text-xl font-display font-semibold text-stone-100">2. Order Processing & Shipping</h2>
            </div>
            <p>
              Orders placed through WhatsApp are confirmed upon details verification. Dispatch takes place within 1-2 business days from Pollachi.
            </p>
            <p>
              Delivery times range between 2 to 5 business days depending on destination location within Tamil Nadu or across India.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-[#0e1610] border border-white/10 space-y-4 shadow-md">
            <div className="flex items-center gap-3 text-lime-400">
              <AlertCircle className="w-6 h-6" />
              <h2 className="text-xl font-display font-semibold text-stone-100">3. Packaging & Shelf Life</h2>
            </div>
            <p>
              Store your wood cold pressed oils in a cool, dry place away from direct sunlight. Unopened bottles maintain optimal fresh aroma and quality for up to 6 months.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-[#0e1610] border border-white/10 space-y-4 shadow-md">
            <div className="flex items-center gap-3 text-lime-400">
              <Scale className="w-6 h-6" />
              <h2 className="text-xl font-display font-semibold text-stone-100">4. Returns & Replacement Policy</h2>
            </div>
            <p>
              If a bottle is damaged during transit, please inform us on WhatsApp (+91 63743 92488) with an unboxing photo/video within 24 hours of delivery. We will immediately process a fresh replacement.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Award, ShieldCheck } from "lucide-react";
import coconutImage from "../assets/ChatGPT Image Sep 13, 2026, 04_06_56 PM.png";
import { WhatsAppIcon } from "../components/Navbar";

const PHONE = "916374392488";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hi Yuva Priya & Skanda's Naturals, I'd like to learn more about your cold-pressed oils.")}`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Skanda's Naturals — Pollachi Wood Cold Pressed Oils" },
      {
        name: "description",
        content:
          "Learn about Skanda's Naturals founded by Yuva Priya in Pollachi, Tamil Nadu. Traditional wood cold pressed oils crafted with unrefined purity.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="pt-24 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 min-h-screen">
      {/* Editorial Hero Section */}
      <section className="relative min-h-screen lg:h-screen flex flex-col justify-center py-12 lg:py-0 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        <p className="section-tag mb-4">Pollachi, Tamil Nadu</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-tight leading-[1.05] text-stone-900 dark:text-stone-100">
              Rooted in Pollachi.<br />
              <span className="text-lime-600 dark:text-lime-400">Crafted by Yuva Priya.</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 font-sans leading-relaxed max-w-2xl">
              Skanda's Naturals was born out of a simple belief: everyday cooking oil should be clean, honest, and pressed slowly without compromising its natural living character.
            </p>

            <p className="text-base text-stone-500 dark:text-stone-400 leading-relaxed max-w-2xl">
              Surrounded by the lush coconut palm groves and mineral-rich soils of Pollachi, founder <strong>Yuva Priya</strong> revived traditional Vaagai wood cold-press extraction (Mara Chekku) to bring unrefined purity back into South Indian homes.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-lime-400 text-stone-950 text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-lime-300 transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4 fill-stone-950 text-stone-950" />
                <span>Connect with Us</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-2xl aspect-[4/5] bg-stone-900">
              <img
                src={coconutImage}
                alt="Pollachi coconut groves and wood cold pressed oil bottle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-stone-900/80 backdrop-blur-md border border-white/10 text-stone-100">
                <p className="text-xs font-mono uppercase tracking-widest text-lime-400 mb-1">
                  Founder Spotlight
                </p>
                <h3 className="font-display font-semibold text-lg">Yuva Priya</h3>
                <p className="text-xs text-stone-300">
                  Championing small-batch, heat-free wood cold pressed oils.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="min-h-screen lg:h-screen flex flex-col justify-center py-12 lg:py-0 px-6 sm:px-8 lg:px-12 bg-stone-100 dark:bg-stone-900/40 border-y border-stone-200 dark:border-stone-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-tag mb-2">Our Philosophy</p>
            <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-stone-900 dark:text-stone-100">
              Why Wood Cold Pressing Matters
            </h2>
            <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base">
              Unlike industrial high-heat extraction that strips natural oils of vital nutrients, our traditional method keeps temperatures natural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-lime-400/20 text-lime-700 dark:text-lime-400 flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-stone-900 dark:text-stone-100">
                100% Native Sourcing
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                We select premium sun-dried copra, groundnuts, and sesame harvested locally in Pollachi, ensuring unmatched flavor and rich aroma.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-stone-900 dark:text-stone-100">
                Vaagai Wood Mortar
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                Vaagai wood naturally absorbs excess heat during pressing, maintaining low ambient temperatures so active antioxidants and fats remain intact.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-stone-900 dark:text-stone-100">
                Zero Preservatives
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                No chemical bleaching, deodorizing, or paraffin additions. Our oils are simply gravity settled and hand-bottled for ultimate freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

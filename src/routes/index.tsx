import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Leaf, ShieldCheck, Droplet, Sun } from "lucide-react";
import { useState } from "react";

import groundnutImage from "../assets/ChatGPT Image Sep 13, 2026, 04_06_56 PM.png";
import sesameImage from "../assets/ChatGPT Image Sep 13, 2026, 04_15_14 PM.png";
import coconutImage from "../assets/ChatGPT Image Sep 13, 2026, 04_16_59 PM.png";
import heroVideo from "../assets/create_a_video_kind_of_a_doll (online-video-cutter.com).mp4";
import { Bottle3DViewer } from "../components/Bottle3DViewer";
import { FaqSection } from "../components/FaqSection";
import { WhatsAppIcon } from "../components/Navbar";

const PHONE = "916374392488";
const sizes = ["250 ml", "500 ml", "1 L"];

const oils = [
  {
    name: "Coconut Oil",
    image: coconutImage,
    note: "Clean, aromatic, and pressed from fresh Pollachi coconuts for everyday South Indian cooking.",
    origin: "Pollachi Groves",
  },
  {
    name: "Groundnut Oil",
    image: groundnutImage,
    note: "A warm, nutty staple wood-pressed slowly for deep flavour, heat tolerance, and kitchen versatility.",
    origin: "Harvest Fields",
  },
  {
    name: "Sesame Oil",
    image: sesameImage,
    note: "Rich, aromatic, and distinctive, retaining authentic character and traditional wellness benefits.",
    origin: "Selected Seeds",
  },
];

function whatsappUrl(product?: string, size?: string) {
  const message = product
    ? `Hi Skanda's Naturals, I'd like to order ${product} — ${size}.`
    : "Hi Skanda's Naturals, I'd like to know more about your wood cold pressed oils.";
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skanda's Naturals | Wood Cold Pressed Oils from Pollachi" },
      {
        name: "description",
        content:
          "Pure wood cold pressed coconut, groundnut and sesame oils crafted in small batches in Pollachi. Available in 250 ml, 500 ml and 1 L sizes.",
      },
      { property: "og:title", content: "Skanda's Naturals | Pure Wood Cold Pressed Oils" },
      {
        property: "og:description",
        content: "Traditionally crafted coconut, groundnut and sesame oils from Pollachi for your everyday kitchen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ProductCard({ oil, index }: { oil: (typeof oils)[number]; index: number }) {
  const [size, setSize] = useState("500 ml");
  const selectedIndex = sizes.indexOf(size);

  return (
    <article className="product-card group flex flex-col justify-between overflow-hidden rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Image Container with Black Gradient Overlay & Layered Title */}
      <div className="relative aspect-[1.25] w-full overflow-hidden bg-stone-950">
        <img
          src={oil.image}
          alt={`${oil.name} bottle above its plant roots`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Deep Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/45 to-transparent" />

        {/* Product Name & Details Layered Over Image */}
        <div className="absolute bottom-3.5 left-4 right-4 space-y-0.5 text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest text-lime-400">
            Wood Cold Pressed
          </p>
          <h3 className="text-2xl font-display font-medium text-white tracking-tight drop-shadow-md">
            {oil.name}
          </h3>
          <p className="text-[11px] text-stone-300 line-clamp-1 font-sans font-light">
            {oil.note}
          </p>
        </div>
      </div>

      {/* Size Picker & WhatsApp Order Button */}
      <div className="p-3.5 sm:p-4 bg-white dark:bg-stone-900">
        <div className="size-area">
          <span className="size-title mb-1.5">Choose size</span>
          
          {/* Smooth Sliding Pill Size Picker */}
          <div className="size-picker-wrap" aria-label={`Choose ${oil.name} size`}>
            <div
              className="size-slider-pill"
              style={{
                width: "calc((100% - 6px) / 3)",
                transform: `translateX(${selectedIndex * 100}%)`,
              }}
            />
            <div className="size-picker">
              {sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={size === option ? "size-option active" : "size-option"}
                  onClick={() => setSize(option)}
                  aria-pressed={size === option}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <a
            className="order-link group mt-2.5"
            href={whatsappUrl(oil.name, size)}
            target="_blank"
            rel="noreferrer"
          >
            <span className="flex items-center gap-2">
              <WhatsAppIcon className="w-4 h-4 fill-stone-950 text-stone-950 transition-transform group-hover:scale-110" />
              <span>ORDER NOW</span>
            </span>
            <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Index() {
  return (
    <main className="bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 overflow-hidden">
      {/* Hero Section - Scaled to fit 100vh viewport */}
      <section id="top" className="hero-section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={coconutImage}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="hero-kicker">
            <span /> Pure by tradition • Pollachi, Tamil Nadu
          </p>
          <h1>
            Rooted in nature.<br />Pressed with patience.
          </h1>
          <p>
            Wood cold pressed oils made with simple ingredients, slow Vaagai press extraction, and purity you can trust.
          </p>
          <a className="hero-action" href="#oils">
            <span>Explore Collection</span>
            <ArrowDownRight size={18} />
          </a>
        </div>
        <div className="hero-foot">
          <span>Skanda's Naturals</span>
          <span>Pure Wood Cold Pressed • Pollachi</span>
        </div>
      </section>

      {/* Section 2: Our Belief & Interactive 3D Bottle Model */}
      <section id="story" className="py-16 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <p className="section-tag mb-3 sm:mb-4">01 / Our Craft & Heritage</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Story Copy & Feature Badges */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <h2 className="text-2.5xl xs:text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight leading-[1.1] text-stone-900 dark:text-stone-100">
              Good oil begins long before the press.
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl font-sans">
              Founded by <strong className="text-stone-900 dark:text-stone-100 font-semibold">Yuva Priya</strong> in Pollachi, Tamil Nadu, Skanda's Naturals honors age-old wood cold-press traditions. We source raw ingredients from nearby family groves and crush them slowly using unheated Vaagai wood mortars.
            </p>

            <p className="text-xs sm:text-sm lg:text-base text-stone-500 dark:text-stone-400 leading-relaxed max-w-2xl">
              Nothing refined. Nothing bleached or chemically altered. Just pure, golden oils crafted for conscious everyday kitchens.
            </p>

            {/* Mobile-only 3D Bottle Showcase (portrait mode) */}
            <div className="lg:hidden relative flex flex-col items-center justify-center my-4 p-3 bg-white dark:bg-stone-900/60 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-md">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1">
                ✦ Drag to rotate 3D bottle
              </span>
              <Bottle3DViewer modelPath="/bottle-model.glb" className="w-full h-[260px] xs:h-[300px] sm:h-[360px]" />
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 shadow-sm flex items-start gap-3">
                <div className="p-2 sm:p-2.5 rounded-lg bg-lime-400/20 text-lime-700 dark:text-lime-400 shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                    100% Wood Pressed
                  </h4>
                  <p className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400 mt-0.5 leading-tight">
                    Unheated Vaagai mortar extraction
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 shadow-sm flex items-start gap-3">
                <div className="p-2 sm:p-2.5 rounded-lg bg-amber-400/20 text-amber-700 dark:text-amber-400 shrink-0">
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                    Pollachi Roots
                  </h4>
                  <p className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400 mt-0.5 leading-tight">
                    Harvested from pristine groves
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 shadow-sm flex items-start gap-3">
                <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-400/20 text-emerald-700 dark:text-emerald-400 shrink-0">
                  <Droplet className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                    Unrefined Purity
                  </h4>
                  <p className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400 mt-0.5 leading-tight">
                    No chemical solvents or heat
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 shadow-sm flex items-start gap-3">
                <div className="p-2 sm:p-2.5 rounded-lg bg-sky-400/20 text-sky-700 dark:text-sky-400 shrink-0">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                    Small Batches
                  </h4>
                  <p className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400 mt-0.5 leading-tight">
                    Pressed with patience & care
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop-only 3D Bottle Canvas */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
            <Bottle3DViewer modelPath="/bottle-model.glb" className="w-full h-[460px]" />
          </div>
        </div>
      </section>

      {/* Section 3: The Collection */}
      <section id="oils" className="products-section">
        <div className="products-heading">
          <div>
            <p className="section-tag">02 / The Collection</p>
            <h2>Three oils.<br />One honest process.</h2>
          </div>
          <p>
            Choose your everyday essential oil in 250 ml, 500 ml, or 1 Litre sizes and order directly via WhatsApp.
          </p>
        </div>
        <div className="product-list">
          {oils.map((oil, index) => (
            <ProductCard key={oil.name} oil={oil} index={index} />
          ))}
        </div>
      </section>

      {/* Section 4: Our Process */}
      <section id="process" className="process-section">
        <div className="process-image">
          <img
            src={sesameImage}
            alt="Sesame oil and flowering sesame plant with roots beneath the soil"
            loading="lazy"
          />
        </div>
        <div className="process-copy">
          <p className="section-tag">03 / Our Process</p>
          <h2>From seed to bottle, thoughtfully.</h2>
          <ol>
            <li>
              <span>01</span>
              <div>
                <h3>Choose well</h3>
                <p>We select top-grade seeds and coconuts grown in the sun-drenched soils of Pollachi.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Press slowly</h3>
                <p>Traditional wood presses (Ghani) extract oil without heat build-up or friction noise.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Bottle simply</h3>
                <p>Gravity-settled unrefined oil is filled into recyclable containers ready for your home.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Section 5: FAQ Section */}
      <FaqSection />

      {/* Section 6: Contact Banner */}
      <section className="contact-section">
        <p className="section-tag">From our roots in Pollachi to your table</p>
        <h2>Bring honest oil<br />into your kitchen.</h2>
        <a href={whatsappUrl()} target="_blank" rel="noreferrer">
          <WhatsAppIcon className="w-5 h-5 fill-white text-white" />
          <span>Chat with us on WhatsApp</span>
        </a>
      </section>
    </main>
  );
}
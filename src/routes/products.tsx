import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Leaf, Droplet } from "lucide-react";
import { useState } from "react";

import plantHeroImage from "../assets/ChatGPT Image Sep 13, 2026, 04_16_59 PM.png";
import groundnutImage from "../assets/ChatGPT Image Sep 13, 2026, 04_06_56 PM.png";
import sesameImage from "../assets/ChatGPT Image Sep 13, 2026, 04_15_14 PM.png";
import coconutImage from "../assets/ChatGPT Image Sep 13, 2026, 04_16_59 PM.png";
import { WhatsAppIcon } from "../components/Navbar";

const PHONE = "916374392488";
const sizes = ["250 ml", "500 ml", "1 L"];

const fullProducts = [
  {
    id: "coconut",
    name: "Wood Cold Pressed Coconut Oil",
    image: coconutImage,
    tagline: "Pure Pollachi Coconut • Unrefined & Aromatic",
    description:
      "Extracted from fresh, sun-dried coconut copra using traditional Vaagai wood ghanis. Ideal for authentic South Indian cooking, hair care, and daily wellness.",
    origin: "Pollachi Coconut Groves",
    notes: ["Zero Chemical Refining", "Rich in Lauric Acid", "Natural Fresh Coconut Aroma"],
  },
  {
    id: "groundnut",
    name: "Wood Cold Pressed Groundnut Oil",
    image: groundnutImage,
    tagline: "Nutty Staple • High Smoke Point",
    description:
      "Pressed slowly from hand-selected groundnuts. Delivers a deep, nutty flavour and high stability for frying, roasting, and everyday traditional curries.",
    origin: "Harvest Seed Fields",
    notes: ["Heart-Healthy Fats", "Unrefined Golden Tone", "No Artificial Solvents"],
  },
  {
    id: "sesame",
    name: "Wood Cold Pressed Sesame Oil",
    image: sesameImage,
    tagline: "Gingelly Tradition • Rich & Distinctive",
    description:
      "Crafted from premium sesame seeds wood-pressed with natural jaggery notes. Known for distinct warmth, deep culinary character, and Ayurvedic benefits.",
    origin: "Selected Sesame Harvests",
    notes: ["Rich in Sesamol Antioxidants", "Authentic Gingelly Taste", "Traditional Cold Extraction"],
  },
];

function whatsappUrl(product: string, size: string) {
  const message = `Hi Skanda's Naturals, I'd like to order ${product} — ${size}.`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Our Products | Skanda's Naturals — Wood Cold Pressed Oils" },
      {
        name: "description",
        content:
          "Explore 100% pure wood cold pressed Coconut, Groundnut, and Sesame oils from Skanda's Naturals. Available in 250 ml, 500 ml, and 1 L sizes.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductCardItem({ product, index }: { product: (typeof fullProducts)[number]; index: number }) {
  const [size, setSize] = useState("500 ml");
  const selectedIndex = sizes.indexOf(size);

  return (
    <article className="product-card group flex flex-col justify-between overflow-hidden rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-lg hover:shadow-xl transition-all duration-300">
      <div>
        {/* Image Container with Black Gradient Overlay & Layered Title */}
        <div className="relative aspect-[1.25] w-full overflow-hidden bg-stone-950">
          <img
            src={product.image}
            alt={`${product.name} bottle above plant roots`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Deep Black Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/45 to-transparent" />

          {/* Product Name & Tagline Layered Over Image */}
          <div className="absolute bottom-3.5 left-4 right-4 space-y-0.5 text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-lime-400">
              {product.tagline}
            </p>
            <h3 className="text-2xl font-display font-medium text-white tracking-tight drop-shadow-md">
              {product.name}
            </h3>
          </div>
        </div>

        <div className="p-4 sm:p-5 space-y-3">
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans line-clamp-2">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {product.notes.map((note) => (
              <span
                key={note}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-[10px] font-medium text-stone-700 dark:text-stone-300"
              >
                <Droplet className="w-2.5 h-2.5 text-lime-500" />
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 pt-0 space-y-3">
        <div className="border-t border-stone-200 dark:border-stone-800 pt-3">
          <span className="size-title mb-1.5">Select Bottle Size</span>

          {/* Smooth Sliding Pill Size Picker */}
          <div className="size-picker-wrap" aria-label={`Choose ${product.name} size`}>
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
            className="order-link group mt-3"
            href={whatsappUrl(product.name, size)}
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

function ProductsPage() {
  return (
    <main className="bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 min-h-screen">
      {/* Hero Section using Plant Cross-Section Image with Sky Content Overlay */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-start justify-center overflow-hidden bg-stone-950">
        <img
          src={plantHeroImage}
          alt="Cross section of oil bottle with deep roots beneath plant in soil"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        {/* Subtle gradient overlay to enhance sky text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/30 to-stone-950/80" />

        {/* Minimal & Premium Hero Content inside Sky Portion */}
        <div className="relative z-10 pt-32 sm:pt-36 px-6 max-w-3xl text-center space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="section-tag text-lime-400">02 / The Collection</p>

          <h1 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight leading-[1.08] drop-shadow-md">
            Pure From Soil To Bottle.
          </h1>

          <p className="text-base sm:text-lg text-stone-200 font-sans max-w-xl mx-auto font-light leading-relaxed drop-shadow">
            Unrefined wood cold pressed oils. Zero chemicals, zero high-temperature heating — just honest nature.
          </p>
        </div>

        <div className="absolute bottom-6 left-0 right-0 z-10 text-center">
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-300 backdrop-blur-sm px-4 py-1 rounded-full bg-stone-950/40 border border-white/10">
            Scroll to view sizes & order
          </span>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-stone-900 dark:text-stone-100">
            Our Products
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base">
            Select your preferred bottle size (250 ml, 500 ml, or 1 Litre) and place your order directly through WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fullProducts.map((product, index) => (
            <ProductCardItem key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

    </main>
  );
}

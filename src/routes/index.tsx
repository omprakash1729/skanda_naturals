import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Leaf, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

import coconutAsset from "../assets/coconut-oil-roots.png.asset.json";
import groundnutAsset from "../assets/groundnut-oil-roots.png.asset.json";
import heroAsset from "../assets/skandas-hero.mp4.asset.json";
import logoDarkAsset from "../assets/skandas-logo-dark.png.asset.json";
import logoLightAsset from "../assets/skandas-logo-light.png.asset.json";
import sesameAsset from "../assets/sesame-oil-roots.png.asset.json";

const PHONE = "916374392488";
const sizes = ["250 ml", "500 ml", "1 L"];

const oils = [
  {
    name: "Coconut Oil",
    image: coconutAsset.url,
    note: "Clean, aromatic and made for everyday South Indian cooking.",
    origin: "Coconut groves",
  },
  {
    name: "Groundnut Oil",
    image: groundnutAsset.url,
    note: "A warm, nutty staple pressed for deep flavour and versatility.",
    origin: "Groundnut fields",
  },
  {
    name: "Sesame Oil",
    image: sesameAsset.url,
    note: "Rich and distinctive, with the character of carefully chosen sesame.",
    origin: "Sesame harvests",
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
      { title: "Skanda's Naturals | Wood Cold Pressed Oils" },
      { name: "description", content: "Shop pure wood cold pressed coconut, groundnut and sesame oils from Skanda's Naturals in 250 ml, 500 ml and 1 L sizes." },
      { property: "og:title", content: "Skanda's Naturals | Wood Cold Pressed Oils" },
      { property: "og:description", content: "Traditionally crafted coconut, groundnut and sesame oils for your everyday kitchen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ProductCard({ oil, index }: { oil: (typeof oils)[number]; index: number }) {
  const [size, setSize] = useState("500 ml");
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={oil.image} alt={`${oil.name} bottle above its plant roots`} loading="lazy" className="product-image" />
        <span className="product-number">0{index + 1}</span>
        <span className="origin-label"><Leaf size={13} aria-hidden="true" /> {oil.origin}</span>
      </div>
      <div className="product-copy">
        <div>
          <p className="eyebrow">Wood cold pressed</p>
          <h3>{oil.name}</h3>
          <p className="product-note">{oil.note}</p>
        </div>
        <div className="size-area">
          <span className="size-title">Choose size</span>
          <div className="size-picker" aria-label={`Choose ${oil.name} size`}>
            {sizes.map((option) => (
              <button key={option} type="button" className={size === option ? "size-option active" : "size-option"} onClick={() => setSize(option)} aria-pressed={size === option}>
                {option}
              </button>
            ))}
          </div>
          <a className="order-link" href={whatsappUrl(oil.name, size)} target="_blank" rel="noreferrer">
            Order on WhatsApp <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand-link" aria-label="Skanda's Naturals home">
          <img src={logoDarkAsset.url} alt="Skanda's Naturals" className="header-logo" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">Our story</a><a href="#oils">Our oils</a><a href="#process">Our process</a>
        </nav>
        <a className="nav-order" href={whatsappUrl()} target="_blank" rel="noreferrer">Order now <ArrowDownRight size={16} /></a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a onClick={() => setMenuOpen(false)} href="#story">Our story</a><a onClick={() => setMenuOpen(false)} href="#oils">Our oils</a><a onClick={() => setMenuOpen(false)} href="#process">Our process</a><a href={whatsappUrl()} target="_blank" rel="noreferrer">Order on WhatsApp</a></nav>}
      </header>

      <section id="top" className="hero-section">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={coconutAsset.url}>
          <source src={heroAsset.url} type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="hero-kicker"><span /> Pure by tradition</p>
          <h1>Rooted in nature.<br />Pressed with patience.</h1>
          <p>Wood cold pressed oils made with simple ingredients, a slower process, and care you can taste.</p>
          <a className="hero-action" href="#oils">Explore our oils <ArrowDownRight size={18} /></a>
        </div>
        <div className="hero-foot"><span>Skanda's Naturals</span><span>Scroll to discover</span></div>
      </section>

      <section id="story" className="story-section">
        <div className="section-tag">01 / Our belief</div>
        <div className="story-grid">
          <h2>Good oil begins long before the press.</h2>
          <div className="story-copy">
            <p>We keep the process close to its roots—selecting familiar ingredients and pressing them slowly in wood to preserve their natural character.</p>
            <p>Nothing loud. Nothing overworked. Just honest oils made for real kitchens and everyday food.</p>
          </div>
        </div>
        <div className="principles" aria-label="Our principles">
          <span>Carefully sourced</span><span>Wood cold pressed</span><span>Made in small batches</span><span>Kitchen essentials</span>
        </div>
      </section>

      <section id="oils" className="products-section">
        <div className="products-heading">
          <div><p className="section-tag">02 / The collection</p><h2>Three oils.<br />One honest process.</h2></div>
          <p>Choose your everyday essential and order the right size directly through WhatsApp.</p>
        </div>
        <div className="product-list">{oils.map((oil, index) => <ProductCard key={oil.name} oil={oil} index={index} />)}</div>
      </section>

      <section id="process" className="process-section">
        <div className="process-image"><img src={sesameAsset.url} alt="Sesame oil and flowering sesame plant with roots beneath the soil" loading="lazy" /></div>
        <div className="process-copy">
          <p className="section-tag">03 / Our process</p>
          <h2>From seed to bottle, thoughtfully.</h2>
          <ol>
            <li><span>01</span><div><h3>Choose well</h3><p>We begin with ingredients selected for their natural aroma and character.</p></div></li>
            <li><span>02</span><div><h3>Press slowly</h3><p>The traditional wood press takes its time, without rushing the ingredient.</p></div></li>
            <li><span>03</span><div><h3>Bottle simply</h3><p>The finished oil is packed for the everyday rhythms of your kitchen.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="contact-section">
        <p className="section-tag">From our roots to your table</p>
        <h2>Bring honest oil<br />into your kitchen.</h2>
        <a href={whatsappUrl()} target="_blank" rel="noreferrer">Chat with us on WhatsApp <MessageCircle size={20} /></a>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-brand"><img src={logoLightAsset.url} alt="Skanda's Naturals" /><p>Wood cold pressed oils, made with patience and rooted in everyday goodness.</p></div>
          <div className="footer-links"><div><h3>Our oils</h3><a href="#oils">Coconut oil</a><a href="#oils">Groundnut oil</a><a href="#oils">Sesame oil</a></div><div><h3>Explore</h3><a href="#story">Our story</a><a href="#process">Our process</a><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp us</a></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Skanda's Naturals</span><span>Pure by tradition</span><span>+91 63743 92488</span></div>
      </footer>
    </main>
  );
}
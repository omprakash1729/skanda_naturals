import { Link } from "@tanstack/react-router";
import logoWhiteImage from "../assets/ChatGPT Image Sep 13, 2026, 04_18_57 PM.png";
import { WhatsAppIcon } from "./Navbar";

const PHONE = "916374392488";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hi Skanda's Naturals, I'd like to place an order or know more about your wood cold pressed oils.")}`;

export function Footer() {
  return (
    <footer className="bg-[#0e1610] text-stone-100 border-t border-stone-800/80 pt-16 pb-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-stone-800/60">
        {/* Brand & Logo Column */}
        <div className="md:col-span-5 space-y-4">
          <Link to="/" className="inline-block">
            <img
              src={logoWhiteImage}
              alt="Skanda's Naturals"
              style={{ filter: "brightness(0) invert(1)" }}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-stone-300 max-w-sm font-sans leading-relaxed">
            Wood cold pressed oils, made with patience and rooted in South Indian everyday goodness. Founded by <strong>Yuva Priya</strong> in Pollachi, Tamil Nadu.
          </p>
          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-lime-400 text-stone-950 text-xs font-bold uppercase tracking-wider shadow-md hover:bg-lime-300 transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 fill-stone-950 text-stone-950" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-4">
              Our Oils
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link to="/products" className="hover:text-lime-400 transition-colors">
                  Coconut Oil
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-lime-400 transition-colors">
                  Groundnut Oil
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-lime-400 transition-colors">
                  Sesame Oil
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link to="/" className="hover:text-lime-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-lime-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-lime-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-lime-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-lime-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-lime-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-lime-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-4">
              Location
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed font-sans">
              Skanda's Naturals<br />
              Pollachi, Tamil Nadu — 642001<br />
              India
            </p>
            <p className="text-xs font-semibold text-lime-400 mt-3">
              +91 63743 92488
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400 uppercase tracking-wider font-mono">
        <span>© 2026 Skanda's Naturals • Founder Yuva Priya</span>
        <div className="flex items-center gap-4">
          <Link to="/privacy" className="hover:text-stone-200 transition-colors">Privacy</Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-stone-200 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

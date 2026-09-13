import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import logoWhiteImage from "../assets/ChatGPT Image Sep 13, 2026, 04_18_57 PM.png";

const PHONE = "916374392488";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hi Skanda's Naturals, I'd like to place an order or know more about your wood cold pressed oils.")}`;

export function WhatsAppIcon({ className = "w-4 h-4 fill-current" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.333 5.004L2 22l5.129-1.341a9.96 9.96 0 0 0 4.881 1.325h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.039-5.176-2.924-7.062A9.928 9.928 0 0 0 12.012 2zm.004 18.232h-.003a8.27 8.27 0 0 1-4.22-1.157l-.303-.18-3.136.821.837-3.054-.197-.314a8.267 8.267 0 0 1-1.267-4.364c0-4.568 3.717-8.283 8.288-8.283 2.213 0 4.293.863 5.857 2.428a8.23 8.23 0 0 1 2.427 5.86c0 4.569-3.717 8.283-8.285 8.283zm4.542-6.205c-.249-.125-1.472-.726-1.7-.809-.228-.083-.394-.125-.561.125-.166.249-.645.809-.79 1.058-.145.249-.291.27-.54.145-.249-.125-1.052-.388-2.003-1.236-.74-.66-1.24-1.475-1.385-1.724-.145-.249-.015-.384.109-.508.112-.112.249-.291.374-.436.125-.145.166-.249.249-.415.083-.166.042-.312-.021-.436-.062-.125-.561-1.351-.769-1.85-.202-.486-.407-.42-.561-.428l-.478-.008c-.166 0-.436.062-.664.312-.228.249-.872.852-.872 2.079 0 1.226.893 2.41 1.018 2.576.125.166 1.757 2.684 4.256 3.763.595.257 1.06.41 1.423.525.598.19 1.142.163 1.572.099.479-.071 1.472-.602 1.68-1.184.208-.582.208-1.08.145-1.184-.062-.104-.228-.166-.477-.291z" />
    </svg>
  );
}

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Products", to: "/products" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3.5 bg-[#0e1610]/95 backdrop-blur-xl border-b-2 border-lime-400/50 shadow-2xl shadow-black/40"
          : "py-5 bg-gradient-to-b from-stone-950/90 via-stone-950/40 to-transparent backdrop-blur-[4px] border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - White Version */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logoWhiteImage}
            alt="Skanda's Naturals"
            style={{ filter: "brightness(0) invert(1)" }}
            className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation with Smooth Sliding Pill */}
        <nav
          className="hidden md:grid grid-cols-5 gap-1 p-1.5 rounded-xl bg-stone-950/70 border border-white/15 backdrop-blur-md shadow-inner relative w-[520px]"
          aria-label="Main Navigation"
        >
          {/* Animated Pill */}
          {(() => {
            const activeIndex = navItems.findIndex((item) =>
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to)
            );
            if (activeIndex === -1) return null;
            return (
              <div
                className="absolute top-1.5 bottom-1.5 rounded-lg bg-lime-400 shadow-lg shadow-lime-400/30 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none z-0"
                style={{
                  width: `calc((100% - 0.75rem) / 5 - 2px)`,
                  left: `calc(0.375rem + ${activeIndex} * ((100% - 0.75rem) / 5))`,
                }}
              />
            );
          })()}

          {navItems.map((item) => {
            const isActive =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative z-10 py-2.5 text-center text-xs font-semibold tracking-wider uppercase transition-colors duration-200 rounded-lg ${
                  isActive
                    ? "text-stone-950 font-bold"
                    : "text-stone-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* WhatsApp CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-lg bg-lime-400 text-stone-950 text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-lime-300 transition-all duration-200 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-4 h-4 fill-stone-950 text-stone-950" />
            <span>Order Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2.5 rounded-lg bg-stone-900/90 border border-white/20 text-stone-100 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Glass Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-5 rounded-2xl bg-[#0e1610]/95 border-2 border-lime-400/40 backdrop-blur-2xl shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => {
            const isActive =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-semibold tracking-wide rounded-lg flex items-center justify-between ${
                  isActive
                    ? "bg-lime-400 text-stone-950 font-bold"
                    : "text-stone-200 hover:bg-white/10"
                }`}
              >
                <span>{item.label}</span>
                {isActive && <div className="w-2 h-2 rounded-full bg-stone-950" />}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-white/10 mt-1">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-lg bg-lime-400 text-stone-950 text-sm font-bold uppercase tracking-wider shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5 fill-stone-950 text-stone-950" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

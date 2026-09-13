import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#090f0a] text-stone-100 flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-lg w-full text-center relative z-10 p-8 sm:p-12 rounded-3xl bg-[#0e1610]/80 border border-lime-400/20 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider">
          404 Error
        </div>

        <h1 className="text-7xl sm:text-8xl font-display font-medium text-stone-100 tracking-tight">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-display font-semibold text-lime-400">
          Page Not Found
        </h2>

        <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
          The requested route does not exist. Return home or browse our wood cold pressed oil collection.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-lime-400 text-stone-950 text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-lime-300 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Go Back Home</span>
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-stone-900 border border-white/10 text-stone-200 text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-all duration-200"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Our Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

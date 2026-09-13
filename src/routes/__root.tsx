import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { ArrowLeft, Home, RefreshCw, ShoppingBag } from "lucide-react";

import appCss from "../styles.css?url";
import { reportAppError } from "../lib/error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-[#090f0a] text-stone-100 flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      {/* Subtle background glow */}
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
          The page you are looking for does not exist, has been renamed, or moved. Return home to explore our pure wood cold pressed oils.
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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen bg-[#090f0a] text-stone-100 flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      <div className="max-w-lg w-full text-center relative z-10 p-8 sm:p-12 rounded-3xl bg-[#0e1610]/80 border border-red-500/20 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
          System Notice
        </div>

        <h1 className="text-3xl font-display font-semibold text-stone-100">
          Something Went Wrong
        </h1>

        <p className="text-stone-300 text-sm leading-relaxed">
          An unexpected error occurred while rendering this page. You can retry loading or return to the main showcase.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-lime-400 text-stone-950 text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-lime-300 transition-all duration-200"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-stone-900 border border-white/10 text-stone-200 text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Skanda's Naturals — Wood Cold Pressed Oils | Pollachi" },
      { name: "description", content: "Authentic, 100% pure wood cold pressed Groundnut, Sesame, and Coconut oils from Pollachi, Tamil Nadu. Traditional extraction, zero additives, direct WhatsApp delivery." },
      { name: "author", content: "Skanda's Naturals" },
      { name: "keywords", content: "wood cold pressed oil, cold pressed groundnut oil, sesame oil, coconut oil, Pollachi, Tamil Nadu, Yuva Priya, natural oils" },
      { property: "og:title", content: "Skanda's Naturals — Pure Wood Cold Pressed Oils" },
      { property: "og:description", content: "Traditionally extracted wood cold pressed Groundnut, Sesame, and Coconut oils from Pollachi. Order directly on WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/favicon.png" },
      { property: "og:url", content: "https://skandas-naturals.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Skanda's Naturals — Pure Wood Cold Pressed Oils" },
      { name: "twitter:description", content: "Traditional wood cold pressed oils from Pollachi, Tamil Nadu." },
      { name: "twitter:image", content: "/favicon.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Space+Grotesk:wght@400;500;600&display=swap" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <div key={pathname} className="animate-in fade-in duration-300">
        <Outlet />
      </div>
      <Footer />
    </QueryClientProvider>
  );
}

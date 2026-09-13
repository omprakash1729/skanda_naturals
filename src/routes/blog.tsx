import { createFileRoute } from "@tanstack/react-router";
import { Clock, ArrowUpRight } from "lucide-react";
import coconutImage from "../assets/ChatGPT Image Sep 13, 2026, 04_06_56 PM.png";
import groundnutImage from "../assets/ChatGPT Image Sep 13, 2026, 04_15_14 PM.png";
import sesameImage from "../assets/ChatGPT Image Sep 13, 2026, 04_16_59 PM.png";
import { WhatsAppIcon } from "../components/Navbar";

const PHONE = "916374392488";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hi Skanda's Naturals, I'd like to ask a question about your cold-pressed oil blog articles.")}`;

const articles = [
  {
    id: "wood-press-vs-refined",
    title: "Why Wood Cold Pressing (Mara Chekku) Preserves Essential Nutrients",
    excerpt:
      "Unlike modern expeller machines that create temperatures exceeding 100°C, traditional Vaagai wood mortars absorb heat, keeping oil extraction naturally cool.",
    category: "Heritage & Craft",
    readTime: "4 min read",
    date: "September 10, 2026",
    image: coconutImage,
  },
  {
    id: "pollachi-coconuts",
    title: "Pollachi's Soil & Climate: Why Our Coconuts Produce Superior Oil",
    excerpt:
      "Nestled at the foothills of the Western Ghats, Pollachi receives abundant monsoon showers and mineral-rich coconut groves, resulting in high lauric acid copra.",
    category: "Origin Story",
    readTime: "3 min read",
    date: "August 28, 2026",
    image: sesameImage,
  },
  {
    id: "sesame-oil-wellness",
    title: "5 Traditional Culinary & Ayurvedic Uses of Wood Pressed Sesame Oil",
    excerpt:
      "From daily South Indian tempering (tadka) to oil pulling and wellness massages, wood-pressed gingelly oil has been a South Indian household staple for centuries.",
    category: "Wellness & Kitchen",
    readTime: "5 min read",
    date: "August 15, 2026",
    image: groundnutImage,
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights | Skanda's Naturals — Cold Pressed Oil Traditions" },
      {
        name: "description",
        content:
          "Read articles on wood cold pressed oils, Pollachi coconut harvesting, unrefined oil health benefits, and traditional cooking tips.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <main className="pt-24 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 min-h-screen">
      {/* Blog Hero Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center space-y-4">
        <p className="section-tag mb-2">03 / Journal & Articles</p>

        <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-stone-900 dark:text-stone-100">
          Wisdom Rooted In Nature
        </h1>

        <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto font-sans leading-relaxed">
          Explore stories of Pollachi coconut groves, traditional Vaagai wood cold-press science, and mindful kitchen practices.
        </p>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-stone-900/80 backdrop-blur-md text-lime-400 text-[10px] font-bold uppercase tracking-wider border border-white/10">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400 font-mono">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-display font-semibold text-stone-900 dark:text-stone-100 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-sans line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-lime-700 dark:text-lime-400 hover:underline"
                >
                  <span>Read Article & Ask Questions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-20 px-6 sm:px-8 max-w-4xl mx-auto text-center space-y-6">
        <div className="p-10 rounded-3xl bg-stone-900 text-stone-100 border border-white/10 shadow-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display font-medium">
            Have Questions About Pure Cold Pressed Oils?
          </h2>
          <p className="text-sm text-stone-300 max-w-lg mx-auto font-sans">
            Connect directly with founder Yuva Priya on WhatsApp to ask about extraction methods, shelf life, or custom orders.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-lime-400 text-stone-950 text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-lime-300 transition-all duration-200"
          >
            <WhatsAppIcon className="w-4 h-4 fill-stone-950 text-stone-950" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

    </main>
  );
}

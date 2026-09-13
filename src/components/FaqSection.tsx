import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What makes wood cold-pressed oil different from standard commercial oils?",
    answer:
      "Wood cold pressing (Mara Chekku) uses traditional Vaagai wood mortars that crush seeds at low ambient temperatures without chemical refining, bleaching, or artificial heat. This preserves natural antioxidants, authentic flavor, and key nutrients lost in factory processing.",
  },
  {
    question: "Where are Skanda's Naturals oils sourced and crafted?",
    answer:
      "Our ingredients are sourced directly from pristine agricultural groves in Pollachi, Tamil Nadu — famous worldwide for coconut quality and rich soil. Every batch is pressed locally in small, artisanal quantities.",
  },
  {
    question: "What is the shelf life of unrefined cold-pressed oil?",
    answer:
      "Because our oils contain zero preservatives or chemical stabilizers, they remain at peak freshness for 6 to 9 months when stored in a cool, dark place away from direct heat and sunlight.",
  },
  {
    question: "Is natural sediment at the bottom of the bottle normal?",
    answer:
      "Yes, absolutely. Fine sediment at the bottle base is natural fiber particle settling from traditional gravity filtration. It is 100% safe, edible, and a hallmark of authentic, unrefined cold-pressed oil.",
  },
  {
    question: "How do I order and what bottle sizes are available?",
    answer:
      "We offer 250 ml, 500 ml, and 1 Litre bottles. You can select your desired size on our website and click 'Order on WhatsApp' to connect directly with us for swift doorstep delivery.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen lg:h-screen flex flex-col justify-center py-12 lg:py-0 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="section-tag mb-2">04 / Questions & Answers</p>
        <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-stone-900 dark:text-stone-100">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base">
          Everything you need to know about our traditional wood cold press extraction, purity, and ordering.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-stone-900 text-stone-100 border-lime-400/40 shadow-xl shadow-lime-950/10"
                  : "bg-stone-50 dark:bg-stone-900/40 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base sm:text-lg font-medium pr-4">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "bg-lime-400 text-stone-950 rotate-180"
                      : "bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
                  }`}
                >
                  <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 pb-6 px-6" : "grid-rows-[0fr] opacity-0 px-6"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm sm:text-base leading-relaxed text-stone-300 dark:text-stone-300 font-sans border-t border-stone-800/80 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

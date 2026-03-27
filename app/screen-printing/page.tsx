import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Screen Printing | Big Green T's",
  description:
    "Custom screen printing in Lebanon, NH. Up to 6 colors, teams, businesses, events, and more. Serving the Upper Valley since 1987.",
};

export default function ScreenPrintingPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-3">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Screen Printing
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Clean, durable prints across every order — for teams, businesses,
            events, and organizations of all sizes.
          </p>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Screen printing is what we&apos;ve built our reputation on for
              nearly 40 years. It&apos;s the most cost-effective method for
              larger quantities, produces vibrant and durable results, and works
              on virtually any garment type.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Whether you&apos;re outfitting a youth sports team, ordering staff
              shirts for your business, or running event apparel for hundreds of
              attendees — screen printing delivers consistent quality at the
              right price.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="font-semibold text-gray-900 mb-3">
                  What we print on
                </h2>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {[
                    "T-shirts (short and long sleeve)",
                    "Hoodies and sweatshirts",
                    "Athletic jerseys and shorts",
                    "Tank tops",
                    "Tote bags",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#00693e]">–</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900 mb-3">
                  Who we work with
                </h2>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {[
                    "Youth and adult athletic teams",
                    "Schools and parent organizations",
                    "Recreation departments",
                    "Businesses and restaurants",
                    "Farms and local organizations",
                    "Event organizers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#00693e]">–</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="font-semibold text-gray-900 mb-2">
                Print Specifications
              </h2>
              <p className="text-gray-600 text-sm">
                We print up to{" "}
                <strong className="text-gray-900">6 colors</strong> per design.
                Minimum order quantities vary — contact us for details based on
                your project. We work with your artwork files or can help with
                design preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATALOGS ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Browse Our Supplier Catalogs
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Not sure what style or garment you&apos;re looking for? Browse our
            two primary suppliers below — then reach out and we&apos;ll help
            you pick the right product for your order.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            <a
              href="https://www.ssactivewear.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-[#00693e] hover:shadow-sm transition-all"
            >
              <p className="text-xs font-semibold text-[#00693e] uppercase tracking-widest mb-2">
                Supplier Catalog
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00693e] transition-colors">
                S&amp;S Activewear
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A huge selection of blank apparel — t-shirts, hoodies, polos,
                hats, and more from top brands like Gildan, Next Level, and
                Port &amp; Company.
              </p>
              <span className="text-[#00693e] font-semibold text-sm">
                Browse catalog &rarr;
              </span>
            </a>
            <a
              href="https://www.sanmar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-[#00693e] hover:shadow-sm transition-all"
            >
              <p className="text-xs font-semibold text-[#00693e] uppercase tracking-widest mb-2">
                Supplier Catalog
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00693e] transition-colors">
                Sanmar
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Premium wholesale apparel including Port Authority, Sport-Tek,
                District, and more — great for corporate, team, and event
                orders.
              </p>
              <span className="text-[#00693e] font-semibold text-sm">
                Browse catalog &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-[#00693e]">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get a Quote?
          </h2>
          <p className="text-green-100 mb-8 max-w-md mx-auto text-lg">
            Tell us about your project — quantity, garment type, colors, and
            timeline. We&apos;ll get back to you with a straight answer.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#00693e] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}

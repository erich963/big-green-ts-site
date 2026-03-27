import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Embroidery | Big Green T's",
  description:
    "Custom embroidery in Lebanon, NH. Polos, hats, jackets, and more for businesses, teams, and organizations. Serving the Upper Valley since 1987.",
};

export default function EmbroideryPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-3">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Embroidery
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            A polished, professional finish that holds up — for businesses,
            teams, and anyone who wants their brand to look sharp.
          </p>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              When you need a polished, professional finish — think uniforms,
              corporate gear, or branded giveaways — embroidery is the right
              choice. The stitching holds up wash after wash and looks sharp on
              any garment.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Embroidery elevates how your brand looks. Whether it&apos;s a
              company logo on a polo, a team name on a hat, or staff jackets for
              a business — the result is clean, durable, and professional every
              time.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="font-semibold text-gray-900 mb-3">
                  What we embroider
                </h2>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {[
                    "Polo shirts",
                    "Hats and caps",
                    "Jackets and fleece",
                    "Button-down shirts",
                    "Bags and accessories",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#00693e]">–</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900 mb-3">Best for</h2>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {[
                    "Corporate and business branding",
                    "Staff and team uniforms",
                    "Coach and staff apparel",
                    "Premium gifts and awards",
                    "Country clubs and hospitality",
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
                What to Know
              </h2>
              <p className="text-gray-600 text-sm">
                Embroidery works best for logos and text with clean lines and
                defined shapes. We&apos;ll digitize your artwork for stitching
                and review a proof with you before anything is produced.
                Contact us with your logo and garment ideas and we&apos;ll
                walk you through the options.
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
                A huge selection of blank apparel — polos, hats, jackets, and
                more from top brands like Gildan, Next Level, and Port
                &amp; Company.
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
                and District — great for corporate polos, staff jackets, and
                branded headwear.
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
            Send us your logo, tell us what you&apos;re looking for, and
            we&apos;ll take it from there.
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

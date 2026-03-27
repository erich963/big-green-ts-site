import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Big Green T's",
  description:
    "Custom screen printing and embroidery in Lebanon, NH. Serving the Upper Valley — New Hampshire and Vermont — since 1987.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            We keep it straightforward. Three core services, done well — for
            every kind of group, organization, and business across the Upper
            Valley and beyond.
          </p>
        </div>
      </section>

      {/* ── SCREEN PRINTING ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#e8f5ee] text-[#00693e] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded mb-4">
              Primary Service
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Screen Printing
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Screen printing is what we&apos;ve built our reputation on for
              nearly 40 years. It&apos;s the most cost-effective method for
              larger quantities, produces vibrant and durable results, and
              works on virtually any garment type.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  What we print on
                </h3>
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
                <h3 className="font-semibold text-gray-900 mb-3">
                  Who we work with
                </h3>
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

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">
                Print Specifications
              </h3>
              <p className="text-gray-600 text-sm">
                We print up to{" "}
                <strong className="text-gray-900">6 colors</strong> per design.
                Minimum order quantities vary — contact us for details based on
                your project. We work with your artwork files or can help with
                design preparation.
              </p>
            </div>

            <Link href="/contact" className="btn-primary">
              Get a Screen Printing Quote
            </Link>
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
            two primary suppliers below — then reach out and we&apos;ll help you
            pick the right product for your order.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            <a
              href="https://www.ssactivewear.com/catalog"
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
              href="https://www.sanmar.com/catalog"
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

      {/* ── EMBROIDERY ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Embroidery
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              When you need a polished, professional finish — think uniforms,
              corporate gear, or branded giveaways — embroidery is the right
              choice. The stitching holds up wash after wash and looks sharp on
              any garment.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  What we embroider
                </h3>
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
                <h3 className="font-semibold text-gray-900 mb-3">
                  Best for
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {[
                    "Corporate and business branding",
                    "Staff and team uniforms",
                    "Coach and staff apparel",
                    "Premium gifts and awards",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#00693e]">–</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href="/contact" className="btn-primary">
              Get an Embroidery Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="border-t border-gray-200" />

      {/* ── EVENTS ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#e8f5ee] text-[#00693e] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded mb-4">
              On-Site Service
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Events &amp; On-Site Apparel
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Beyond print-and-ship orders, we offer a full on-site event
              merchandising service. We pre-print your apparel in advance and
              show up to your event as a vendor — stocked, set up, and ready to
              personalize shirts for attendees on the spot, including adding
              names and numbers for kids.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  What we bring
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {[
                    "Pre-printed event apparel by size",
                    "On-site personalization equipment",
                    "Live name and number application",
                    "A professional vendor setup",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#00693e]">–</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Great for
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {[
                    "Youth sports tournaments",
                    "School field days and fundraisers",
                    "Town festivals and fairs",
                    "Running races and athletic events",
                    "Corporate outings",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#00693e]">–</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href="/event-merch" className="btn-primary">
              Learn More About Event Merch
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="section bg-gray-50 border-t border-gray-200">
        <div className="container-content text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Not Sure Which Is Right for You?
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            We&apos;ll point you in the right direction. Tell us what
            you&apos;re looking for and we&apos;ll give you an honest
            recommendation.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Big Green T's",
  description:
    "Custom screen printing, embroidery, and on-site event apparel in Lebanon, NH. Serving the Upper Valley and Richmond, VA since 1987.",
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
            Three core services, done well — for businesses, organizations,
            teams, and events across the Upper Valley and Richmond, VA.
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
              larger quantities, produces vibrant and durable results, and works
              on virtually any garment type.
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

      {/* ── DIVIDER ── */}
      <div className="border-t border-gray-200" />

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
                <h3 className="font-semibold text-gray-900 mb-3">Best for</h3>
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

      {/* ── EVENT APPAREL & VENDING ── */}
      <section className="section bg-[#f4fbf7] border-y-2 border-[#00693e]">
        <div className="container-content">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#00693e] text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded mb-4">
              On-Site Service
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Event Apparel &amp; On-Site Vending
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              This is what sets us apart. Beyond print-and-ship orders, we offer
              a full on-site event vending service — we pre-print your custom
              apparel, show up to your event, and sell or distribute shirts
              directly to attendees with live personalization on the spot.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Kids get their name or number added right there. No leftover
              inventory. No generic bulk order that nobody asked for. Just a
              professional vendor presence that makes your event more memorable
              — and easier to manage.
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
                    "Community events",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#00693e]">–</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href="/event-merch" className="btn-primary">
              Learn More About Event Apparel
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="section bg-white border-t border-gray-200">
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

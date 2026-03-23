import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Big Green T's",
  description:
    "Family-owned custom screen printing and embroidery in Lebanon, NH since 1987. Everything done in-house — no outsourcing, no middlemen. Serving the Upper Valley and Richmond, VA.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Big Green T&apos;s
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Nearly four decades of printing shirts, building relationships, and
            doing right by the people we work with.
          </p>
        </div>
      </section>

      {/* ── MAIN STORY ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Since 1987
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Big Green T&apos;s has been part of the Upper Valley community
                since 1987. Based in Lebanon, NH, what started as a small custom
                printing operation has grown into one of the most trusted names
                in custom apparel in the region — serving schools, sports teams,
                businesses, and community organizations across New Hampshire and
                Vermont for nearly 40 years.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Dartmouth Roots
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our name comes from our roots near Dartmouth College — and the
                green that&apos;s woven through everything we do. The connection
                to that community shaped how we think about work: do it well,
                stand behind it, and build something lasting.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Family-Owned, Relationship-Driven
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We&apos;re a family business, and that matters. We&apos;re not a
                large print company with a ticket number and a call center. When
                you work with us, you talk to people who care about getting your
                order right — and who want to still be working with you ten years
                from now.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                Many of our customers have been coming back for decades. That
                doesn&apos;t happen by accident. It happens because we&apos;re
                honest about timelines, fair with pricing, and consistent with
                quality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Everything Done In-House
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We don&apos;t outsource. Every order is printed or embroidered
                by our team — which means we control the quality, the timeline,
                and the result. When something needs to be fixed, we fix it.
                There&apos;s no third party to blame and no middleman slowing
                things down.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                How We Work
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We keep things simple. You tell us what you need, we give you a
                straight answer on cost and timeline, and we get it done. No
                surprises, no runaround. We review a proof with you before
                anything is printed, and we don&apos;t consider a job done until
                you&apos;re satisfied with the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES STRIP ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                heading: "Dependability",
                body: "If we say it will be ready, it will be ready. We don't over-promise and under-deliver.",
              },
              {
                heading: "Honest Pricing",
                body: "Sensible rates, no hidden fees. We tell you what something costs before you commit.",
              },
              {
                heading: "Quality Work",
                body: "Every order gets the same attention — small or large, first-time customer or longtime account.",
              },
              {
                heading: "No Outsourcing",
                body: "We do everything in-house. You get our work, our standards, and direct accountability.",
              },
            ].map(({ heading, body }) => (
              <div key={heading}>
                <div className="w-10 h-1 bg-[#00693e] mb-4 rounded" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {heading}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Work Together?
            </h2>
            <p className="text-gray-600 mb-6">
              Whether it&apos;s your first order or your hundredth, we treat
              every request the same way — with care and a straight answer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/services" className="btn-outline">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

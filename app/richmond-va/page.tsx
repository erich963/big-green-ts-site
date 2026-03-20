import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event T-Shirts & On-Site Apparel | Richmond, VA | Big Green T's",
  description:
    "Big Green T's brings event t-shirts and on-site custom apparel to Richmond, VA. Pre-printed event shirts with live personalization — names and numbers added on the spot. Perfect for tournaments, festivals, and community events.",
};

export default function RichmondVAPage() {
  const idealEvents = [
    "Youth and adult sports tournaments",
    "Running races and athletic events",
    "School field days and fundraisers",
    "Music festivals and outdoor events",
    "Town and neighborhood gatherings",
    "Corporate outings and team events",
    "Charity events and awareness walks",
  ];

  const steps = [
    {
      step: "1",
      heading: "Tell Us About Your Event",
      body: "Reach out early. We'll talk through your event, expected attendance, shirt styles, and design.",
    },
    {
      step: "2",
      heading: "We Pre-Print Your Apparel",
      body: "All event shirts are produced in advance — printed, sorted by size, and ready to go before your event day.",
    },
    {
      step: "3",
      heading: "We Show Up",
      body: "Our team arrives with a full setup: apparel stocked, equipment ready, and everything organized so we're not in your way.",
    },
    {
      step: "4",
      heading: "Live Personalization On-Site",
      body: "Attendees pick their size and we add names, numbers, or other personalization right there — including for kids.",
    },
  ];

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-3">
            Richmond, Virginia
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event T-Shirts &amp; On-Site Custom Apparel
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            We bring a professional event apparel setup directly to your event
            in the Richmond, VA area — pre-printed shirts, live personalization,
            and a vendor presence that makes your event more memorable.
          </p>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Event Shirts Done Right
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Most events end up with a pile of leftover shirts in the wrong
              sizes — or nobody gets one at all. We do it differently.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We pre-print your custom event t-shirts in advance, show up to
              your Richmond event as a vendor, and personalize each shirt on the
              spot. Attendees choose their size. Kids get their name or number
              added right there. Everyone walks away with something they
              actually want to wear.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              It&apos;s a simple setup that makes a real difference — and
              it&apos;s one less thing for organizers to worry about.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {steps.map(({ step, heading, body }) => (
              <div key={step} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#00693e] text-white font-bold flex items-center justify-center text-sm">
                  {step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {heading}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              What&apos;s Included
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Custom Event T-Shirts
                </h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  {[
                    "Your design, your colors, your event",
                    "Pre-printed before event day",
                    "Available in a full size range",
                    "Quality garments that hold up",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#00693e] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  On-Site Personalization
                </h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  {[
                    "Names and numbers added on the spot",
                    "Great for kids' sports events",
                    "Fast turnaround per shirt — no long waits",
                    "Professional vendor setup at your venue",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#00693e] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IDEAL EVENTS ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ideal For
            </h2>
            <p className="text-gray-600 mb-8">
              If you&apos;re bringing a crowd together in Richmond, we can help
              make it something people remember.
            </p>
            <ul className="space-y-3">
              {idealEvents.map((event) => (
                <li key={event} className="flex items-start gap-3">
                  <span className="text-[#00693e] font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">{event}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── ABOUT THE BUSINESS ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              About Big Green T&apos;s
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We&apos;re a family-owned custom screen printing and embroidery
              business based in Lebanon, NH, serving the Upper Valley region
              since 1987. Over the years, we&apos;ve expanded our event apparel
              services to reach organizers and communities beyond New England —
              including the Richmond, VA area.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We&apos;re not a large print shop with a ticket system. When you
              work with us, you talk to people who care about getting it right
              and who want to still be working with you next year.
            </p>
            <Link
              href="/about"
              className="text-[#00693e] font-semibold hover:underline"
            >
              More about us &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-[#00693e]">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Planning an Event in Richmond?
          </h2>
          <p className="text-green-100 mb-8 max-w-md mx-auto text-lg">
            Reach out early — the more lead time we have, the better we can
            prepare. We&apos;ll walk through the details with you and make it
            easy.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#00693e] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Merch | Big Green T's",
  description:
    "On-site event merchandising and live personalization for tournaments, festivals, and large events across the Upper Valley — New Hampshire and Vermont.",
};

export default function EventMerchPage() {
  const idealEvents = [
    "Youth and adult sports tournaments",
    "School field days and fundraisers",
    "Ski and hockey tournaments",
    "Running races and athletic events",
    "Town festivals and community gatherings",
    "Corporate outings and team-building events",
    "Fairs and agricultural events",
  ];

  const steps = [
    {
      step: "1",
      heading: "Plan Your Event",
      body: "Contact us early. We&apos;ll talk through your event, expected attendance, and what apparel makes sense.",
    },
    {
      step: "2",
      heading: "Pre-Print Your Apparel",
      body: "We produce all of your event apparel in advance — shirts, hoodies, whatever your event calls for.",
    },
    {
      step: "3",
      heading: "We Show Up",
      body: "Our team brings a full professional setup to your event location and gets everything ready before attendees arrive.",
    },
    {
      step: "4",
      heading: "Live Personalization",
      body: "Attendees choose their size and we add names, numbers, or any personalization on the spot.",
    },
  ];

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-3">
            A Cut Above the Standard Order
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            On-Site Event Merch &amp; Personalization
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            We pre-print your event apparel and bring a professional setup to
            personalize names and numbers live — so every attendee walks away
            with something that&apos;s truly theirs.
          </p>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Makes It Different
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Ordering event shirts in bulk is the standard approach — but it
              leaves people with a shirt that may not fit, doesn&apos;t have
              their name on it, and feels generic. Our on-site setup changes
              that.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We come to your event fully prepared: apparel is pre-printed,
              inventory is organized by size, and our equipment is set up to
              personalize garments quickly. Participants get fitted, personalized
              apparel without waiting in long lines.
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
                  <p
                    className="text-gray-600 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IDEAL EVENTS ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ideal For
            </h2>
            <p className="text-gray-600 mb-8">
              We&apos;ve done this for all kinds of events. If you&apos;re
              bringing a crowd together, we can help make it memorable.
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

      {/* ── CTA ── */}
      <section className="section bg-[#00693e]">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Talk About Your Event
          </h2>
          <p className="text-green-100 mb-8 max-w-md mx-auto text-lg">
            The earlier you get in touch, the more we can do. Reach out and
            we&apos;ll walk through the details together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#00693e] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Book an Event
          </Link>
        </div>
      </section>
    </>
  );
}

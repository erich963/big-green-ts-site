import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Apparel & On-Site Vending | Big Green T's",
  description:
    "We show up to your event with pre-printed apparel and personalize shirts on the spot — names, numbers, and more. Serving the Upper Valley and Richmond, VA.",
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
    "Charity events and awareness walks",
  ];

  const steps = [
    {
      step: "1",
      heading: "Tell Us About Your Event",
      body: "Reach out early. We'll talk through your event, expected attendance, shirt styles, and design. The more lead time we have, the better.",
    },
    {
      step: "2",
      heading: "We Pre-Print Your Apparel",
      body: "All event shirts are produced in advance — printed, sorted by size, and ready before your event day. No scrambling the morning of.",
    },
    {
      step: "3",
      heading: "We Show Up",
      body: "Our team arrives with a full vendor setup: apparel stocked, equipment ready, and everything organized so we're not in your way.",
    },
    {
      step: "4",
      heading: "Live Personalization On-Site",
      body: "Attendees pick their size and we add names, numbers, or other personalization right there — including for kids. Fast, clean, and professional.",
    },
  ];

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-3">
            A Better Way to Do Event Shirts
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event Apparel &amp; On-Site Vending
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            We pre-print your event apparel and show up as a vendor — so
            attendees get fitted, personalized shirts on the spot, and you
            don&apos;t have to deal with the logistics.
          </p>
        </div>
      </section>

      {/* ── WHAT MAKES IT DIFFERENT ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Turn Your Event Into an Experience
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Most events end up with a pile of leftover shirts in the wrong
              sizes — or nobody gets one at all. Pre-ordering a fixed quantity
              means guessing, and guessing wrong is expensive.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We do it differently. We come fully prepared with pre-printed
              custom event t-shirts in a range of sizes, set up a professional
              vendor station at your venue, and personalize each shirt on the
              spot. Participants choose their size. Kids get their name or number
              added right there. Everyone walks away with something they
              actually want to wear.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              It&apos;s one less thing for organizers to manage — and it makes
              the event feel more professional without adding work on your end.
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

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              What You Get
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Custom Event Apparel
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
                    "Fast turnaround — no long waits",
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

            <div className="bg-[#f4fbf7] border border-[#00693e] rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Revenue Share Available
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                For qualifying events, we offer a revenue share arrangement —
                meaning organizers can earn from the apparel sales without
                handling any of the inventory or logistics themselves. Ask us
                about this when you reach out.
              </p>
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

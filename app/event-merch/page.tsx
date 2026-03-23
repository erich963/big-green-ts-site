import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "On-Site Event Apparel & Vendor Services | Big Green T's",
  description:
    "We show up to your event as a full apparel vendor — custom event tees, sport and theme merchandise, and live on-site personalization with names and numbers. Serving the Upper Valley and beyond.",
};

const trustLogos = [
  "Rowing News",
  "Stateline Sports",
  "Edgewater Farm",
  "Dartmouth College",
  "Lebanon Recreation Department",
];

const steps = [
  {
    step: "1",
    heading: "Tell Us About Your Event",
    body: "Reach out early. We'll talk through your event type, expected attendance, apparel needs, and what personalization options make sense.",
  },
  {
    step: "2",
    heading: "We Design & Print Your Apparel",
    body: "We produce your custom event tees in advance and curate a selection of additional sport or theme merchandise suited to your event.",
  },
  {
    step: "3",
    heading: "We Set Up at Your Venue",
    body: "We arrive with a full vendor setup — organized inventory, heat press station, and everything ready before your first attendee walks in.",
  },
  {
    step: "4",
    heading: "Attendees Shop & Personalize",
    body: "People browse, pick their size, and get their name or number pressed on right there. Fast, clean, and something they'll actually keep.",
  },
];

const idealEvents = [
  "Youth and adult sports tournaments",
  "Gymnastics meets and competitions",
  "Ski and hockey tournaments",
  "Running races and athletic events",
  "School field days and fundraisers",
  "Town festivals and community gatherings",
  "Rowing regattas and aquatic events",
  "Fairs, farms, and agricultural events",
  "Corporate outings and team-building events",
];

export default function EventMerchPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-3">
            More Than a Bulk Order
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            On-Site Event Apparel &amp; Vendor Services
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            We show up to your event as a full apparel vendor — custom event
            tees, sport and theme merchandise, and a live heat press station for
            on-site personalization. Your attendees leave with something real.
            Your event looks like it means business.
          </p>
        </div>
      </section>

      {/* ── WHAT WE BRING ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What We Bring to Your Event
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We don&apos;t just drop off a box of shirts. We show up with a
              full vendor setup and stay for the duration. Here&apos;s what that
              looks like:
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">
                  Custom Event Tees
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pre-printed with your event&apos;s design, branding, and
                  date. Sorted by size and ready to go. These are the shirts
                  that make your event feel official.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">
                  Sport &amp; Theme Apparel
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Beyond the event shirt, we bring additional merchandise
                  curated for your crowd — sport-specific designs, regional
                  prints, and themed apparel that fits the vibe of your event.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">
                  Heat Press Station
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We run a live heat press for on-site personalization — names,
                  numbers, and custom transfers applied directly to garments
                  while attendees wait. Kids especially love it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE VALUE ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why It Makes Your Event Better
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A real apparel vendor on-site does something a pre-packed shirt
              bag can&apos;t — it adds energy, legitimacy, and a professional
              layer to your event that attendees notice.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  heading: "It Feels Official",
                  body: "A staffed vendor booth signals that your event is well-organized and worth showing up to. It raises the perceived quality of the whole thing.",
                },
                {
                  heading: "It's Personal",
                  body: "A kid walking away with a tournament shirt that has their name and number on the back? That's a memory. On-site personalization creates that.",
                },
                {
                  heading: "It's Hands-Off for You",
                  body: "We handle everything — inventory, setup, sales, and personalization. You focus on running your event, not managing a merch table.",
                },
                {
                  heading: "It Can Give Back",
                  body: "Depending on the arrangement, a portion of proceeds can go back to your organization. We're flexible — vendor fee, revenue share, or a donation model all work.",
                },
              ].map(({ heading, body }) => (
                <div key={heading} className="flex gap-3">
                  <span className="text-[#00693e] font-bold mt-0.5 shrink-0">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      {heading}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section bg-white">
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

      {/* ── IDEAL EVENTS ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ideal For
            </h2>
            <p className="text-gray-600 mb-8">
              We&apos;ve worked events of all sizes and types. If you&apos;re
              bringing a crowd together, we can make it more memorable.
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

      {/* ── CREDENTIALS ── */}
      <section className="section bg-white">
        <div className="container-content">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-8">
            Official Vendor Credentials
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Replace these with official badge images when available */}
            {[
              { org: "USA Gymnastics", role: "Licensed Vendor" },
              { org: "Richmond Recreation Department", role: "Official Vendor" },
              { org: "Lebanon Recreation Department", role: "Official Vendor" },
            ].map(({ org, role }) => (
              <div
                key={org}
                className="border-2 border-[#00693e] rounded-lg px-8 py-5 text-center min-w-[180px]"
              >
                <p className="text-[#00693e] font-bold text-sm">{org}</p>
                <p className="text-gray-500 text-xs mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST CAROUSEL ── */}
      <section className="border-y border-gray-200 py-8 bg-gray-50 overflow-hidden">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-6">
          Trusted By
        </p>
        <div className="overflow-hidden">
          <div className="animate-marquee">
            {[...trustLogos, ...trustLogos].map((name, i) => (
              <span
                key={i}
                className="inline-flex items-center mx-10 text-gray-400 font-semibold text-sm tracking-wide uppercase"
              >
                {name}
              </span>
            ))}
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
            The earlier you reach out, the more we can do. We&apos;ll walk
            through the details, figure out the right setup, and make it easy
            on you.
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

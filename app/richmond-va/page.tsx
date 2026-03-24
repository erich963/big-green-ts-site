import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "On-Site Event Apparel & Vendor Services | Richmond, VA | Big Green T's",
  description:
    "Big Green T's brings a full event apparel vendor setup to Richmond, VA — custom event tees, sport and theme merchandise, and live on-site personalization with names and numbers. Perfect for tournaments, festivals, and community events.",
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
    body: "Reach out early. We'll talk through your event type, expected attendance, apparel needs, and what personalization options make sense for your crowd.",
  },
  {
    step: "2",
    heading: "We Design & Print Your Apparel",
    body: "We produce your custom event tees in advance and curate a selection of additional sport or theme merchandise suited to your event.",
  },
  {
    step: "3",
    heading: "We Set Up in Richmond",
    body: "We travel to your Richmond venue with a full vendor setup — organized inventory, heat press station, and everything ready before your first attendee walks in.",
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
  "Basketball and soccer tournaments",
  "Running races and athletic events",
  "School field days and fundraisers",
  "Town festivals and neighborhood events",
  "Charity events and awareness walks",
  "Corporate outings and team-building events",
  "Rowing regattas and aquatic events",
];

export default function RichmondVAPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-3">
            Richmond, Virginia
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            On-Site Event Apparel &amp; Vendor Services
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            We travel to Richmond, VA and set up as a full event apparel
            vendor — custom event tees, sport and theme merchandise, and a live
            heat press station for on-site personalization. Your attendees leave
            with something real. Your event looks like it means business.
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
              We don&apos;t just drop off a box of shirts. We make the trip,
              set up a full vendor booth, and stay for the duration. Here&apos;s
              what that looks like:
            </p>
            <div className="grid sm:grid-cols-3 gap-5 md:gap-8">
              <div className="border border-gray-200 rounded-lg p-4 md:p-6">
                <h3 className="font-bold text-gray-900 mb-3">
                  Custom Event Tees
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pre-printed with your event&apos;s design, branding, and
                  date. Sorted by size and ready to go. These are the shirts
                  that make your event feel official.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 md:p-6">
                <h3 className="font-bold text-gray-900 mb-3">
                  Sport &amp; Theme Apparel
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Beyond the event shirt, we bring additional merchandise
                  curated for your crowd — sport-specific designs, themed
                  apparel, and prints that fit the vibe of your event.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 md:p-6">
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
              Why It Makes Your Richmond Event Better
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A real apparel vendor on-site does something a pre-packed shirt
              bag can&apos;t — it adds energy, legitimacy, and a professional
              layer that attendees notice and remember.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  heading: "It Feels Official",
                  body: "A staffed vendor booth signals that your event is well-organized and worth showing up to. It raises the perceived quality of the whole thing.",
                },
                {
                  heading: "It's Personal",
                  body: "A kid walking away from a tournament with a shirt that has their name and number on the back? That's a memory. On-site personalization creates that.",
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
              If you&apos;re bringing a crowd together in the Richmond area, we
              can help make it something people remember.
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

      {/* ── REVIEWS ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Event Organizers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Your review will appear here.",
                name: "Event Organizer",
                event: "Event Name, Richmond VA",
              },
              {
                quote: "Your review will appear here.",
                name: "Event Organizer",
                event: "Event Name, Richmond VA",
              },
              {
                quote: "Your review will appear here.",
                name: "Event Organizer",
                event: "Event Name, Richmond VA",
              },
            ].map(({ quote, name, event }, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-4"
              >
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT THE BUSINESS ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              About Big Green T&apos;s
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We&apos;re a family-owned screen printing and embroidery business
              based in Lebanon, NH — serving the Upper Valley since 1987. Over
              the years, we&apos;ve taken our event apparel and vendor service
              on the road, including to Richmond, VA, where we work with event
              organizers, sports organizations, and community groups.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We&apos;re not a large print shop. When you work with us,
              you&apos;re working directly with the people who print, press, and
              show up. That means a real conversation, a flexible arrangement,
              and someone who&apos;s invested in making your event go well.
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

      {/* ── TRUST CAROUSEL ── */}
      <section className="border-b border-gray-200 py-8 bg-white overflow-hidden">
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
            Planning an Event in Richmond?
          </h2>
          <p className="text-green-100 mb-8 max-w-md mx-auto text-lg">
            Reach out early — the more lead time we have, the better we can
            prepare. We&apos;ll walk through the details together and figure out
            the right setup for your event.
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

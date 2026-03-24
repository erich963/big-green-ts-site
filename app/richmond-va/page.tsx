import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event T-Shirts & Custom Apparel in Richmond, VA | Big Green T's",
  description:
    "Big Green T's provides on-site event apparel and live customization for tournaments, races, gymnastics meets, and community events in Richmond, Virginia. Custom screen printing and embroidery also available.",
};

const trustLogos = [
  "Rowing News",
  "Stateline Sports",
  "Edgewater Farm",
  "Dartmouth College",
  "Lebanon Recreation Department",
];

const richmondEvents = [
  "Sports Tournaments & Jamborees",
  "Gymnastics Meets & Competitions",
  "Rowing Regattas",
  "5Ks, 10Ks & Half Marathons",
  "School Field Days & Fundraisers",
  "Neighborhood & Community Events",
  "Corporate Outings",
  "Charity Events & Awareness Walks",
];

export default function RichmondVAPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-3">
            Serving Richmond, Virginia
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 max-w-2xl leading-tight">
            Event T-Shirts &amp; Custom Apparel for Richmond, VA
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
            We travel to Richmond with a full vendor setup — event-specific
            apparel, sport and theme merchandise, and a live heat press station
            for on-site personalization. Your event gets a professional touch.
            Your attendees get something they&apos;ll actually keep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Book an Event in Richmond
            </Link>
            <Link href="/event-merch" className="btn-outline">
              How Our Events Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO IN RICHMOND ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              What We Bring to Richmond Events
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We&apos;re a family-owned custom apparel business from Lebanon, NH
              with decades of experience running on-site vendor setups at events
              across New England — and we bring that same service to Richmond,
              Virginia.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Whether it&apos;s a gymnastics meet, a youth basketball tournament,
              or a community 5K, we arrive fully prepared so you don&apos;t have
              to think about the merchandise.
            </p>
            <div className="grid sm:grid-cols-3 gap-5 md:gap-8">
              <div className="border border-gray-200 rounded-lg p-4 md:p-6">
                <h3 className="font-bold text-gray-900 mb-3">
                  Custom Event Tees
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pre-printed with your Richmond event&apos;s design and
                  branding, sorted by size, and ready to sell from the moment
                  doors open.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 md:p-6">
                <h3 className="font-bold text-gray-900 mb-3">
                  Sport &amp; Theme Merch
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We bring additional merchandise curated for your event type —
                  sport-specific and themed apparel that fits your crowd and adds
                  energy to your vendor area.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 md:p-6">
                <h3 className="font-bold text-gray-900 mb-3">
                  Live Heat Press
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Names, numbers, and custom transfers applied on-site while
                  attendees wait. One of the most popular parts of the setup —
                  especially for kids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Richmond Event Organizers Work With Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A well-run merch booth adds credibility, energy, and a memorable
              element to your event — without adding work for your team.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  heading: "Professional Presence",
                  body: "A staffed vendor booth with organized inventory and a live heat press signals that your Richmond event is well-run and worth attending.",
                },
                {
                  heading: "Personal for Attendees",
                  body: "Getting a name or number pressed onto a shirt on-site creates a moment people remember — especially kids at sports events.",
                },
                {
                  heading: "Hands-Off for You",
                  body: "We handle setup, inventory, sales, and personalization. You run your event; we run the merch.",
                },
                {
                  heading: "Flexible Arrangements",
                  body: "Revenue share, vendor fee, or a donation model — we work with Richmond organizers to find an arrangement that makes sense for your event.",
                },
              ].map(({ heading, body }) => (
                <div key={heading} className="flex gap-3">
                  <span className="text-[#00693e] font-bold mt-0.5 shrink-0">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{heading}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
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
            {[
              {
                step: "1",
                heading: "Tell Us About Your Richmond Event",
                body: "Reach out early. We'll talk through your event type, expected attendance, and what apparel and personalization options make sense.",
              },
              {
                step: "2",
                heading: "We Design & Print Your Apparel",
                body: "We produce your custom Richmond event tees in advance and curate sport or theme merchandise suited to your crowd.",
              },
              {
                step: "3",
                heading: "We Travel to Richmond & Set Up",
                body: "We make the trip with a full vendor setup — inventory organized, heat press ready, and everything in place before your first attendee arrives.",
              },
              {
                step: "4",
                heading: "Attendees Shop & Personalize",
                body: "People browse, pick their size, and get personalized right there. Fast, clean, and something they'll actually keep.",
              },
            ].map(({ step, heading, body }) => (
              <div key={step} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#00693e] text-white font-bold flex items-center justify-center text-sm">
                  {step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{heading}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RICHMOND EVENTS ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Richmond Events We&apos;re Built For
          </h2>
          <p className="text-gray-600 mb-8">
            From youth sports to community festivals, we&apos;ve built our
            setup around the kinds of events that Richmond hosts.
          </p>
          <div className="flex flex-wrap gap-3">
            {richmondEvents.map((item) => (
              <span
                key={item}
                className="bg-white border border-[#00693e] text-[#00693e] font-medium text-sm px-4 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALSO IN RICHMOND ── */}
      <section className="section bg-white">
        <div className="container-content">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Also Serving Richmond With Custom Apparel
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Beyond events, Big Green T&apos;s provides custom screen printing
            and embroidery for Richmond-area businesses, organizations, and
            teams.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            <div className="border border-gray-200 rounded-lg p-5 md:p-6">
              <h3 className="font-bold text-gray-900 mb-2">Screen Printing</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Custom screen-printed apparel for Richmond businesses, teams,
                schools, and organizations — 1–6 color printing on t-shirts,
                hoodies, and more.
              </p>
              <Link
                href="/services"
                className="text-[#00693e] font-semibold text-sm hover:underline"
              >
                View screen printing &rarr;
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 md:p-6">
              <h3 className="font-bold text-gray-900 mb-2">Embroidery</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Embroidered polos, hats, and jackets for Richmond businesses
                and teams — clean, durable, and professional.
              </p>
              <Link
                href="/services"
                className="text-[#00693e] font-semibold text-sm hover:underline"
              >
                View embroidery &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-8">
            Official Vendor Credentials
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
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
      <section className="section bg-white">
        <div className="container-content">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Richmond Event Organizers Say
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
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col gap-4"
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

      {/* ── ABOUT ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              About Big Green T&apos;s
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We&apos;re a family-owned screen printing and embroidery business
              based in Lebanon, NH — serving the Upper Valley since 1987. We
              travel to Richmond, VA for events and work directly with organizers,
              sports organizations, and community groups throughout the area.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              When you work with us, you&apos;re talking directly to the people
              who print the shirts, run the heat press, and show up on event day.
              No middlemen. No guesswork.
            </p>
            <Link href="/about" className="text-[#00693e] font-semibold hover:underline">
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
            prepare. We&apos;ll walk through the details and make it easy.
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

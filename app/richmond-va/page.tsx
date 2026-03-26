import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "On-Site Event Apparel & Live Personalization | Richmond, VA | Big Green T's",
  description:
    "Richmond-based event apparel vendor. We bring pre-printed shirts and a live heat press to tournaments, races, gymnastics meets, and community events in and around Richmond, VA. On-site personalization — names and numbers added on the spot.",
};

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
            Richmond, Virginia
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 max-w-2xl leading-tight">
            On-Site Event Apparel &amp; Live Personalization in Richmond, VA
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
            We&apos;re based in Richmond and go directly to your event — with
            pre-printed apparel, a full vendor setup, and a live heat press for
            on-site personalization. Your attendees leave with something that
            feels made for them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Book an Event
            </Link>
            <Link href="/event-merch" className="btn-outline">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ── RICHMOND PHOTO ── */}
      <div className="w-full overflow-hidden" style={{ height: "340px" }}>
        <Image
          src="/richmond-virginia.jpg"
          alt="Richmond, Virginia"
          width={1000}
          height={700}
          className="w-full h-full object-cover object-center"
          priority
        />
      </div>

      {/* ── INTRO ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We bring a full event apparel setup directly to tournaments, races,
              meets, and community events in and around Richmond, VA.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Instead of generic merch, we offer pre-printed apparel and
              customize names and numbers on-site — creating something attendees
              actually care about and want to wear.
            </p>

            <div className="border-l-4 border-[#00693e] pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                A Better Event Merchandise Experience
              </h2>
              <p className="text-gray-600 mb-5">
                We operate as a live apparel vendor at your Richmond event,
                combining speed, quality, and personalization.
              </p>
              <ul className="space-y-3">
                {[
                  "Pre-printed shirts, hoodies, and apparel ready to sell",
                  "On-site customization — names, numbers, and more",
                  "Fast turnaround so attendees don't miss the moment",
                  "Clean, professional setup that fits seamlessly into your event",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="text-[#00693e] font-bold mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BRING ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            What We Bring to Your Event
          </h2>
          <div className="grid sm:grid-cols-3 gap-5 md:gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5 md:p-6">
              <h3 className="font-bold text-gray-900 mb-3">Custom Event Tees</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pre-printed with your event&apos;s design, branding, and date.
                Sorted by size and ready to go. The shirts that make your
                Richmond event feel official.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5 md:p-6">
              <h3 className="font-bold text-gray-900 mb-3">
                Sport &amp; Theme Apparel
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Beyond the event shirt, we bring additional merchandise curated
                for your crowd — sport-specific designs and themed apparel that
                fits the vibe of your event.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5 md:p-6">
              <h3 className="font-bold text-gray-900 mb-3">Heat Press Station</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Live heat press for on-site personalization — names, numbers,
                and custom transfers applied while attendees wait. A standout
                element at any Richmond event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section bg-[#00693e]">
        <div className="container-content">
          <h2 className="text-3xl font-bold text-white mb-3 text-center">
            Simple Setup. Seamless Execution.
          </h2>
          <p className="text-green-100 text-center mb-12 max-w-lg mx-auto">
            We handle the logistics so you can focus on running your event.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                heading: "We Prepare",
                body: "We design and print event-specific apparel ahead of time — sized, sorted, and ready for your event day in Richmond.",
              },
              {
                step: "2",
                heading: "We Show Up Ready",
                body: "We arrive at your venue with inventory, equipment, and a full vendor setup — everything in place before your first attendee walks in.",
              },
              {
                step: "3",
                heading: "We Customize On-Site",
                body: "Attendees choose their gear and personalize it on the spot. Names, numbers, and more — fast, clean, and something they'll keep.",
              },
            ].map(({ step, heading, body }) => (
              <div
                key={step}
                className="bg-white/10 border border-white/20 rounded-xl p-6 md:p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white text-[#00693e] font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Step {step} — {heading}
                </h3>
                <p className="text-green-100 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERFECT FOR ── */}
      <section className="section bg-white">
        <div className="container-content">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Richmond Events We&apos;re Built For
          </h2>
          <p className="text-gray-600 mb-8">
            From youth sports tournaments to community festivals, we work
            events of all sizes across the Richmond area.
          </p>
          <div className="flex flex-wrap gap-3">
            {richmondEvents.map((item) => (
              <span
                key={item}
                className="bg-[#f4fbf7] border border-[#00693e] text-[#00693e] font-medium text-sm px-4 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Richmond Organizers Choose Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Event merchandise should feel like part of the experience — not an
              afterthought.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We help elevate Richmond events by offering something interactive,
              memorable, and genuinely valuable to attendees. When people can
              personalize what they&apos;re taking home, it becomes more than
              just a shirt — it becomes part of the event itself.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Depending on the arrangement, a portion of proceeds can go back to
              your organization. We&apos;re flexible — vendor fee, revenue share,
              or a donation model all work.
            </p>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section bg-white">
        <div className="container-content">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Event Organizers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Your review will appear here.", name: "Event Organizer", event: "Event Name, Richmond VA" },
              { quote: "Your review will appear here.", name: "Event Organizer", event: "Event Name, Richmond VA" },
              { quote: "Your review will appear here.", name: "Event Organizer", event: "Event Name, Richmond VA" },
            ].map(({ quote, name, event }, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col gap-4">
                <p className="text-gray-600 text-sm leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-[#00693e]">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hosting an Event in Richmond?
          </h2>
          <p className="text-green-100 mb-8 max-w-md mx-auto text-lg">
            Let&apos;s bring a better apparel experience to your next Richmond
            event. Reach out early — the more lead time, the better.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#00693e] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ── OFFICIAL VENDOR ── */}
      <section className="border-t border-gray-200 py-10 bg-white">
        <div className="container-content">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-8">
            Official Vendor
          </p>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            <Image
              src="/usa-gymnastics-badge.png"
              alt="USA Gymnastics Licensed Vendor"
              width={280}
              height={180}
              className="h-44 w-auto object-contain"
            />
            <Image
              src="/richmond-rec-badge.png"
              alt="Richmond Parks & Recreation Official Vendor"
              width={280}
              height={180}
              className="h-[166px] w-auto object-contain"
            />
            <Image
              src="/aau-badge.png"
              alt="AAU Official Vendor"
              width={280}
              height={180}
              className="h-44 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── BEYOND EVENTS ── */}
      <section className="section bg-gray-50 border-t border-gray-200">
        <div className="container-content">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Beyond Events
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We also offer custom screen printing and embroidery for
            Richmond-area businesses, organizations, and teams.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            <div className="border border-gray-200 rounded-lg p-5 md:p-6 bg-white">
              <h3 className="font-bold text-gray-900 mb-2">Screen Printing</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Custom screen-printed apparel for Richmond businesses, teams,
                schools, and organizations — 1–6 color printing on t-shirts,
                hoodies, and more.
              </p>
              <Link href="/services" className="text-[#00693e] font-semibold text-sm hover:underline">
                View screen printing &rarr;
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 md:p-6 bg-white">
              <h3 className="font-bold text-gray-900 mb-2">Embroidery</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Embroidered polos, hats, and jackets for Richmond businesses
                and teams — clean, durable, and professional.
              </p>
              <Link href="/services" className="text-[#00693e] font-semibold text-sm hover:underline">
                View embroidery &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

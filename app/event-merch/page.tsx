import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "On-Site Event Apparel & Live Customization | Big Green T's",
  description:
    "We show up to your tournament, race, or community event with pre-printed apparel and customize it live — names, numbers, and more. Serving the Upper Valley and beyond since 1987.",
};

const eventLogos = [
  { src: "/event-logos/head-of-the-charles.png", alt: "Head of the Charles Regatta", dark: false },
  { src: "/event-logos/head-of-the-hooch.png", alt: "Head of the Hooch Regatta", dark: false },
  { src: "/event-logos/head-of-the-schuylkill.png", alt: "Head of the Schuylkill", dark: false },
  { src: "/event-logos/saratoga-regattas.png", alt: "Saratoga Regattas", dark: false },
  { src: "/event-logos/textile-river-regatta.png", alt: "Textile River Regatta", dark: false },
  { src: "/event-logos/hank-tenney-classic.png", alt: "Hank Tenney Classic", dark: false },
];

const perfectFor = [
  "Tournaments",
  "Jamborees",
  "Regattas",
  "Gymnastics Meets",
  "5Ks, 10Ks & Half Marathons",
  "School & Community Events",
  "Field Days & Fundraisers",
  "Festivals & Fairs",
  "And more",
];

export default function EventMerchPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              On-Site Event Apparel &amp; Live Personalization
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We show up to your event with pre-printed gear and customize it
              live — names, numbers, and more — so every attendee leaves with
              something that feels made for them.
            </p>
            <Link href="/contact" className="btn-primary">
              Book Your Event
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We bring a full event apparel setup directly to your tournament,
              race, or community event.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Instead of generic merch, we offer pre-printed apparel and
              customize names and numbers on-site — creating something attendees
              actually care about and want to wear.
            </p>

            {/* A Better Merchandise Experience */}
            <div className="border-l-4 border-[#00693e] pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                A Better Event Merchandise Experience
              </h2>
              <p className="text-gray-600 mb-5">
                We operate as a live apparel vendor at your event, combining
                speed, quality, and personalization.
              </p>
              <ul className="space-y-3">
                {[
                  "Pre-printed shirts, hoodies, and apparel ready to sell",
                  "On-site customization — names, numbers, and more",
                  "Fast turnaround so attendees don't miss the moment",
                  "Clean, professional setup that fits seamlessly into your event",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="text-[#00693e] font-bold mt-0.5 shrink-0">
                      ✓
                    </span>
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
                Sorted by size and ready to go. These are the shirts that make
                your event feel official.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5 md:p-6">
              <h3 className="font-bold text-gray-900 mb-3">
                Sport &amp; Theme Apparel
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Beyond the event shirt, we bring additional merchandise curated
                for your crowd — sport-specific designs, regional prints, and
                themed apparel that fits the vibe of your event.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5 md:p-6">
              <h3 className="font-bold text-gray-900 mb-3">Heat Press Station</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We run a live heat press for on-site personalization — names,
                numbers, and custom transfers applied directly to garments while
                attendees wait. Kids especially love it.
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
                body: "We design and print event-specific apparel ahead of time — sized, sorted, and ready for your event day.",
              },
              {
                step: "2",
                heading: "We Show Up Ready",
                body: "We arrive with inventory, equipment, and a full vendor setup — everything in place before your first attendee walks in.",
              },
              {
                step: "3",
                heading: "We Customize On-Site",
                body: "Attendees choose their gear and personalize it on the spot. Fast, clean, and something they'll actually keep.",
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
            Perfect For
          </h2>
          <p className="text-gray-600 mb-8">
            We&apos;ve worked events of all sizes and types. If you&apos;re
            bringing a crowd together, we can make it more memorable.
          </p>
          <div className="flex flex-wrap gap-3">
            {perfectFor.map((item) => (
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

      {/* ── WHY ORGANIZERS CHOOSE US ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Organizers Choose Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Event merchandise should feel like part of the experience — not an
              afterthought.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We help elevate your event by offering something interactive,
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

      {/* ── EVENT LOGO CAROUSEL ── */}
      <section className="border-y border-gray-200 py-14 bg-white overflow-hidden">
        <div className="overflow-hidden">
          <div className="animate-marquee">
            {[...eventLogos, ...eventLogos].map((logo, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center mx-16 shrink-0 h-96 w-[28rem]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={560}
                  height={560}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-white">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Make Your Event Stand Out
          </h2>
          <p className="text-gray-600 mb-8 max-w-sm mx-auto text-lg">
            Let&apos;s bring a better apparel experience to your next event.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ── OFFICIAL VENDOR (subtle footer strip) ── */}
      <section className="border-t border-gray-100 py-10 bg-white">
        <div className="container-content">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-8">
            Official Vendor
          </p>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            <Image
              src="/usa-gymnastics-badge.png"
              alt="USA Gymnastics Licensed Vendor"
              width={220}
              height={140}
              className="h-28 w-auto object-contain opacity-90"
            />
            <Image
              src="/aau-badge.png"
              alt="AAU Official Vendor"
              width={220}
              height={140}
              className="h-28 w-auto object-contain opacity-90"
            />
          </div>
        </div>
      </section>
    </>
  );
}

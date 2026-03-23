import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <div className="max-w-2xl">
            <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-4">
              Lebanon, NH &nbsp;·&nbsp; Upper Valley &nbsp;·&nbsp; Richmond, VA
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Custom Apparel That Shows Up On Time — And Actually Looks Good
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Screen printing, embroidery, and on-site event apparel and vending
              for local businesses, organizations, teams, schools, rec
              departments, clubs, tournaments, and community events across the
              Upper Valley and Richmond, VA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Request a Quote
              </Link>
              <Link href="/event-merch" className="btn-outline text-center">
                Book an Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-[#00693e] py-5">
        <div className="container-content">
          <p className="text-white text-center text-sm md:text-base font-medium tracking-wide">
            Trusted by local businesses, schools, rec departments, and community
            organizations
          </p>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="section bg-white">
        <div className="container-content">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            {/* Screen Printing */}
            <div className="border border-gray-200 rounded-lg p-8">
              <div className="inline-block bg-[#e8f5ee] text-[#00693e] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded mb-4">
                Primary Service
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Screen Printing
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                {[
                  "1–6 color printing",
                  "Team uniforms & spirit wear",
                  "Business & staff apparel",
                  "Event shirts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#00693e] mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary text-sm">
                Get a Quote
              </Link>
            </div>

            {/* Embroidery */}
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Embroidery
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                {[
                  "Polos, hats, and jackets",
                  "Clean, durable stitching",
                  "Professional finish for any application",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#00693e] mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="btn-outline text-sm">
                Learn More
              </Link>
            </div>
          </div>

          {/* Events — full-width feature card */}
          <div className="border-2 border-[#00693e] rounded-lg p-8 bg-[#f4fbf7]">
            <div className="inline-block bg-[#00693e] text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded mb-4">
              On-Site Events
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Event Apparel &amp; On-Site Vending
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              We show up to your event as a vendor — pre-printed apparel stocked
              and ready, with live on-site customization including names and
              numbers for kids. No leftover boxes of shirts in the wrong sizes.
              Just a professional setup that makes your event better.
            </p>
            <Link href="/event-merch" className="btn-primary text-sm">
              Learn About Event Apparel
            </Link>
          </div>
        </div>
      </section>

      {/* ── TURN YOUR EVENT INTO AN EXPERIENCE ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <div className="max-w-2xl">
            <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-3">
              On-Site Personalization
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Turn Your Event Into an Experience
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We pre-print your event apparel and bring a professional vendor
              setup directly to your event. Attendees pick their size. Kids get
              their name or number added right there. Everyone walks away with
              something they&apos;ll actually wear.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              It works for tournaments, school events, festivals, fundraisers,
              and community gatherings — and we can arrange a revenue share so
              organizers benefit too.
            </p>
            <Link href="/event-merch" className="btn-primary">
              Learn About Event Apparel
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="section bg-white">
        <div className="container-content">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Serving the Upper Valley and Richmond, VA
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Upper Valley — New Hampshire &amp; Vermont
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Based in Lebanon, NH, we&apos;ve served the Upper Valley for
                nearly 40 years — working with businesses, schools, athletic
                teams, rec departments, and community organizations across both
                sides of the river.
              </p>
              <p className="text-sm text-gray-500">
                Lebanon &middot; Hanover &middot; West Lebanon &middot;
                Claremont &middot; Newport &middot; Enfield &middot; White River
                Junction &middot; Woodstock &middot; Norwich &middot; Bradford
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Richmond, Virginia
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We travel to the Richmond, VA area for events — bringing the
                same on-site event apparel and vending service we&apos;ve
                provided in New England for decades. If you&apos;re organizing a
                tournament, festival, or community event in Richmond, we want to
                talk.
              </p>
              <Link
                href="/richmond-va"
                className="text-[#00693e] font-semibold hover:underline"
              >
                Richmond, VA event services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="section bg-gray-50 border-y border-gray-200">
        <div className="container-content">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A Family Business Built on the Upper Valley
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              For nearly four decades, our family-owned and operated shop in
              Lebanon, NH has built long-lasting relationships with customers
              across New Hampshire and Vermont — through dependable service,
              sensible pricing, and quality work done right.
            </p>
            <Link
              href="/about"
              className="text-[#00693e] font-semibold hover:underline"
            >
              Our story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAP ── */}
      <section className="bg-gray-100 border-y border-gray-200">
        <div className="container-content py-10">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Find Us
          </p>
          <p className="text-gray-700 font-medium mb-4">
            Lebanon, New Hampshire
          </p>
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=Lebanon,+NH+03766&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Big Green T's location — Lebanon, NH"
            />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section bg-[#00693e]">
        <div className="container-content">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                heading: "Tell Us What You Need",
                body: "Send us your idea — apparel type, quantity, and design. We'll ask the right questions.",
              },
              {
                step: "2",
                heading: "Approve Your Order",
                body: "We'll confirm details, pricing, and a proof before anything goes to press.",
              },
              {
                step: "3",
                heading: "Get Your Apparel",
                body: "We produce your order and get it to you on time, every time.",
              },
            ].map(({ step, heading, body }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-white text-[#00693e] font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{heading}</h3>
                <p className="text-green-100 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section bg-white border-t border-gray-100">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let&apos;s Get Your Order Started
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Reach out and we&apos;ll get back to you quickly. No pressure, no
            runaround — just straightforward answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <Link href="/event-merch" className="btn-outline">
              Book an Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

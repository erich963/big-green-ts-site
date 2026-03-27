import type { Metadata } from "next";
import Link from "next/link";
import { events, sports, isEventFeatured } from "@/data/store";

export const metadata: Metadata = {
  title: "Event Apparel Store | Big Green T's",
  description:
    "Shop event apparel and sport-specific gear from Big Green T's. Recent event shirts, hoodies, and more — order online and we'll handle the rest.",
};

export default function StorePage() {
  const featuredEvents = events.filter(isEventFeatured);
  const pastEvents = events.filter((e) => !isEventFeatured(e));

  return (
    <>
      {/* ── HEADER ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-3">
            Big Green T&apos;s
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event Apparel Store
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Shop recent event apparel and sport-specific gear. See something you
            like? Place an order and we&apos;ll reach out to confirm and process
            payment.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS STRIP ── */}
      <div className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="container-content">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="text-[#00693e] font-bold">1.</span> Browse and select your item + size
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#00693e] font-bold">2.</span> Submit your order request
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#00693e] font-bold">3.</span> We confirm and process payment over the phone
            </span>
          </div>
        </div>
      </div>

      {/* ── FEATURED EVENTS ── */}
      {featuredEvents.length > 0 && (
        <section className="section bg-white">
          <div className="container-content">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Featured Events
              </h2>
              <span className="bg-[#e8f5ee] text-[#00693e] text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                Available Now
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/store/events/${event.id}`}
                  className="group border border-gray-200 rounded-xl overflow-hidden hover:border-[#00693e] hover:shadow-md transition-all"
                >
                  {/* Placeholder image */}
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center px-4">
                      <p className="text-4xl mb-2">🏆</p>
                      <p className="text-gray-500 text-sm font-medium">
                        Photo coming soon
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold text-[#00693e] uppercase tracking-widest mb-1">
                      {event.sport}
                    </p>
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-[#00693e] transition-colors">
                      {event.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      {event.products.length} item
                      {event.products.length !== 1 ? "s" : ""} available
                    </p>
                    <span className="text-[#00693e] font-semibold text-sm">
                      Shop now &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SHOP BY SPORT ── */}
      <section className={`section ${featuredEvents.length > 0 ? "bg-gray-50 border-t border-gray-200" : "bg-white"}`}>
        <div className="container-content">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Shop by Sport
          </h2>
          <p className="text-gray-600 mb-8">
            Sport-specific apparel available year-round — not tied to any single
            event.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sports.map((sport) => (
              <Link
                key={sport.id}
                href={`/store/sports/${sport.id}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-[#00693e] hover:shadow-md transition-all flex flex-col"
              >
                <span className="text-4xl mb-3">{sport.emoji}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-[#00693e] transition-colors">
                  {sport.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3 flex-1">
                  {sport.description}
                </p>
                <p className="text-xs text-gray-400">
                  {sport.products.length} item
                  {sport.products.length !== 1 ? "s" : ""}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAST EVENTS ── */}
      {pastEvents.length > 0 && (
        <section className="section bg-white border-t border-gray-200">
          <div className="container-content">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Past Events
            </h2>
            <p className="text-gray-600 mb-8">
              Limited quantities may still be available — reach out to ask.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pastEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/store/events/${event.id}`}
                  className="group border border-gray-200 rounded-xl p-5 hover:border-gray-400 transition-all"
                >
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                    {event.sport}
                  </p>
                  <h3 className="font-bold text-gray-700 mb-1 group-hover:text-gray-900 transition-colors">
                    {event.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {event.products.length} item
                    {event.products.length !== 1 ? "s" : ""} &rarr;
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="section bg-[#00693e]">
        <div className="container-content text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Don&apos;t see what you&apos;re looking for?
          </h2>
          <p className="text-green-100 mb-6 max-w-md mx-auto">
            We may have additional inventory not listed here. Give us a call or
            send a message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16034485261"
              className="inline-block bg-white text-[#00693e] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
            >
              Call (603) 448-5261
            </a>
            <Link
              href="/contact"
              className="inline-block border border-white text-white font-semibold px-8 py-3 rounded hover:bg-white/10 transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events, isEventFeatured, daysRemaining } from "@/data/store";

export function generateStaticParams() {
  return events.map((e) => ({ id: e.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const event = events.find((e) => e.id === params.id);
  if (!event) return { title: "Event Not Found | Big Green T's" };
  return {
    title: `${event.name} | Big Green T's Store`,
    description: event.description,
  };
}

export default function EventStorePage({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === params.id);
  if (!event) notFound();

  const featured = isEventFeatured(event);
  const remaining = daysRemaining(event);

  return (
    <>
      {/* ── HEADER ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <Link
            href="/store"
            className="text-sm text-[#00693e] font-medium hover:underline mb-4 inline-flex items-center gap-1"
          >
            &larr; Back to Store
          </Link>
          <div className="flex items-start gap-4 flex-wrap mt-3">
            <div className="flex-1">
              <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-2">
                {event.sport}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {event.name}
              </h1>
              <p className="text-gray-600 max-w-xl">{event.description}</p>
            </div>
            {featured && (
              <div className="bg-[#e8f5ee] border border-[#00693e]/20 rounded-lg px-4 py-3 text-sm shrink-0">
                <p className="font-semibold text-[#00693e]">Available Now</p>
                <p className="text-gray-600 text-xs mt-0.5">
                  {remaining} day{remaining !== 1 ? "s" : ""} remaining
                </p>
              </div>
            )}
            {!featured && (
              <div className="bg-gray-100 rounded-lg px-4 py-3 text-sm shrink-0">
                <p className="font-semibold text-gray-600">Past Event</p>
                <p className="text-gray-400 text-xs mt-0.5">
                  Limited stock may remain
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                {/* Placeholder image */}
                <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center px-4">
                    <p className="text-5xl mb-2">👕</p>
                    <p className="text-gray-400 text-xs">Photo coming soon</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">
                    {product.description}
                  </p>
                  <p className="text-[#00693e] font-bold text-xl mb-4">
                    ${product.price}
                  </p>
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Available Sizes
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="border border-gray-300 text-gray-700 text-xs font-medium px-2 py-1 rounded"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/store/order?item=${encodeURIComponent(product.name)}&event=${encodeURIComponent(event.name)}&price=${product.price}`}
                    className="block w-full bg-[#00693e] text-white text-center font-semibold py-2.5 rounded hover:bg-[#005a34] transition-colors text-sm"
                  >
                    Order This Item
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORDER NOTE ── */}
      <div className="border-t border-gray-200 bg-gray-50 py-6">
        <div className="container-content">
          <p className="text-sm text-gray-500 text-center max-w-lg mx-auto">
            Orders are processed over the phone. After submitting your request,
            Brian will reach out to confirm availability and process payment via
            Square.
          </p>
        </div>
      </div>
    </>
  );
}

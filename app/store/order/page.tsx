"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function OrderForm() {
  const params = useSearchParams();
  const item = params.get("item") || "";
  const event = params.get("event") || "";
  const sport = params.get("sport") || "";
  const price = params.get("price") || "";

  const source = event || sport || "Store";

  return (
    <div className="max-w-xl mx-auto">
      {/* Pre-filled summary */}
      {item && (
        <div className="bg-[#e8f5ee] border border-[#00693e]/20 rounded-lg p-5 mb-8">
          <p className="text-xs font-semibold text-[#00693e] uppercase tracking-widest mb-1">
            Your Selection
          </p>
          <p className="font-bold text-gray-900 text-lg">{item}</p>
          {source && (
            <p className="text-gray-600 text-sm">{source}</p>
          )}
          {price && (
            <p className="text-[#00693e] font-semibold mt-1">${price} each</p>
          )}
        </div>
      )}

      <form
        action="https://formspree.io/f/mpqoqqvl"
        method="POST"
        className="space-y-5"
      >
        {/* Hidden fields to pass item context */}
        <input type="hidden" name="Item" value={item} />
        <input type="hidden" name="Source" value={source} />
        <input type="hidden" name="Price" value={price ? `$${price}` : ""} />
        <input type="hidden" name="_subject" value={`New Store Order — ${item}`} />

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
              First name
            </label>
            <input
              type="text"
              id="first-name"
              name="First Name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00693e] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              name="Last Name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00693e] focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            required
            className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00693e] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="Phone"
            required
            className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00693e] focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">
            Brian will call you to confirm your order and process payment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
              Size
            </label>
            <select
              id="size"
              name="Size"
              required
              className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00693e] focus:border-transparent bg-white"
            >
              <option value="">Select size</option>
              {["YS", "YM", "YL", "S", "M", "L", "XL", "2XL", "3XL"].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="Quantity"
              min="1"
              defaultValue="1"
              required
              className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00693e] focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Additional notes{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="notes"
            name="Notes"
            rows={3}
            className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00693e] focus:border-transparent resize-none"
            placeholder="Multiple items? Different sizes? Let us know here."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#00693e] text-white font-semibold py-3 rounded hover:bg-[#005a34] transition-colors"
        >
          Submit Order Request
        </button>

        <p className="text-xs text-gray-400 text-center">
          This is a request, not a charge. Brian will contact you to confirm
          availability and process payment via Square.
        </p>
      </form>
    </div>
  );
}

export default function OrderPage() {
  return (
    <>
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <Link
            href="/store"
            className="text-sm text-[#00693e] font-medium hover:underline mb-4 inline-flex items-center gap-1"
          >
            &larr; Back to Store
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-2">
            Place an Order
          </h1>
          <p className="text-gray-600 max-w-md">
            Fill out the form below and Brian will be in touch to confirm your
            order and process payment.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
            <OrderForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}

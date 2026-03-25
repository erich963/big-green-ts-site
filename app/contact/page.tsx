import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Big Green T's",
  description:
    "Get in touch with Big Green T's for custom screen printing and embroidery quotes in New Hampshire.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container-content">
          <p className="text-[#00693e] font-semibold text-sm uppercase tracking-widest mb-3">
            Let&apos;s Talk
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            We&apos;ll get back to you quickly with a straight answer. No
            pressure, no runaround.
          </p>
        </div>
      </section>

      {/* ── CONTACT CONTENT ── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+16034485261"
                    className="text-gray-900 text-lg font-medium hover:text-[#00693e] transition-colors"
                  >
                    (603) 448-5261
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@biggreents.com"
                    className="text-gray-900 text-lg font-medium hover:text-[#00693e] transition-colors"
                  >
                    info@biggreents.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Location
                  </p>
                  <p className="text-gray-900 text-lg font-medium">
                    New Hampshire
                  </p>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What to include in your message
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Type of apparel (shirts, hoodies, hats, etc.)",
                    "Approximate quantity",
                    "Number of print locations or colors",
                    "Your event date or turnaround need",
                    "Any artwork files you have ready",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#00693e] mt-0.5">–</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>
              <form className="space-y-5" action="#" method="POST">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00693e] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00693e] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00693e] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone number{" "}
                    <span className="text-gray-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00693e] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    What are you interested in?
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00693e] focus:border-transparent bg-white"
                  >
                    <option value="">Select one</option>
                    <option value="screen-printing">Screen Printing</option>
                    <option value="embroidery">Embroidery</option>
                    <option value="event-merch">Event Merch / On-Site</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00693e] focus:border-transparent resize-none"
                    placeholder="Quantity, garment type, print colors, timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

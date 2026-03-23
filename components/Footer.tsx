import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-white font-semibold text-lg mb-2">
              Big Green T&apos;s
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Custom Screen Printing &amp; Embroidery
              <br />
              Lebanon, NH &middot; Richmond, VA
              <br />
              Outfitting the Upper Valley and beyond since 1987.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white font-semibold mb-3">Pages</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/event-merch", label: "Events" },
                { href: "/richmond-va", label: "Richmond, VA" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold mb-3">Get In Touch</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+16034485261"
                  className="hover:text-white transition-colors"
                >
                  (603) 448-5261
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@biggreents.com"
                  className="hover:text-white transition-colors"
                >
                  info@biggreents.com
                </a>
              </li>
              <li className="text-gray-500 pt-1">
                85 Mechanic Street
                <br />
                Lebanon, NH 03766
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/contact" className="btn-primary text-sm py-2 px-4">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Big Green T&apos;s. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

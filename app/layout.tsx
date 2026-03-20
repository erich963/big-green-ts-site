import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Big Green T's | Custom Screen Printing & Embroidery Since 1987",
  description:
    "Family-owned custom screen printing and embroidery in Lebanon, NH since 1987. Serving the Upper Valley — New Hampshire and Vermont — and event apparel in Richmond, VA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

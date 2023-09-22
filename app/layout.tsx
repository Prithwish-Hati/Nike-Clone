import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nike Clone",
  description: "Nike Ecommerce Website Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <section className=" bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </body>
    </html>
  );
}

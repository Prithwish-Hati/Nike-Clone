import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";

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
        <StateContext>
          <Toaster />
          <Navbar />
          {children}
          <section className=" bg-black padding-x padding-t pb-8">
            <Footer />
          </section>
        </StateContext>
      </body>
    </html>
  );
}
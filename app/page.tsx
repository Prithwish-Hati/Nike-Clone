import CustomerReviews from "@/components/sections/CustomerReviews";
import Hero from "@/components/sections/Hero";
import PopularProducts from "@/components/sections/PopularProducts";
import Services from "@/components/sections/Services";
import SpecialOffer from "@/components/sections/SpecialOffer";
import Subscribe from "@/components/sections/Subscribe";
import SuperQuality from "@/components/sections/SuperQuality";

export default async function Home() {
  return (
    <main className="relative">
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      {/* <section className="padding">
        <PopularProducts />
      </section> */}
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
    </main>
  );
}

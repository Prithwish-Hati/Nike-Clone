import ProductCard from "@/components/cards/ProductCard";

const Page = () => {
  return (
    <main className="relative">
      <section className="padding-x max-container">
        <h1 className="text-4xl font-palanquin font-bold text-center">
          Our <span className="text-coral-red"> Products </span>
        </h1>
        <ProductCard />
      </section>
    </main>
  );
};

export default Page;

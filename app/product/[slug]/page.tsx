import Image from "next/image";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

import ProductInfo from "@/components/ProductInfo";

interface Props {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: Props) => {
  const product = await client.fetch(
    groq`*[_type == 'product' && slug.current == '${params.slug}'][0]`
  );
  // console.log(product);

  return (
    <main className="relative">
      <section className="padding-x max-container flex gap-10 py-10 max-lg:flex-col">
        <div>
          <Image
            src={urlForImage(product?.images[1]).url()}
            width={700}
            height={700}
            alt={product.name}
            className="object-contain rounded-lg"
          />
        </div>
        <div>
          <ProductInfo product={product} />
        </div>
      </section>
    </main>
  );
};

export default Page;

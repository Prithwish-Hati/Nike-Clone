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
    <section>
      <div>
        <Image
          src={urlForImage(product?.images[1]).url()}
          width={350}
          height={350}
          alt={product.name}
          className="object-contain"
        />
      </div>
      <div>
        <ProductInfo product={product} />
      </div>
    </section>
  );
};

export default Page;

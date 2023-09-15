import Image from "next/image";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

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
        <h1>{product.name}</h1>
        <h2>{product.categories[0]}</h2>
        <p>
          MRP: {product.currency}
          {product.price}
        </p>
        <p>incl. of taxes</p>
        <p>(Also includes all applicable duties)</p>
        <p>Colors Available:</p>
        <p>{product.colors.join(", ")}</p>
        <p>Select Size</p>
        <p>{product.sizes.join(", ")}</p>
        <p>{product.description}</p>
        {/* Add to Cart Button */}
      </div>
      
    </section>
  );
};

export default Page;

import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

const ProductCard = async () => {
  const products = await client.fetch(groq`*[_type == 'product']`);
  return (
    <div className="mt-10 mb-14 max-container flex justify-center items-center flex-wrap gap-10">
      {products.map((product: any) => (
        <Link key={product._id} href={`/product/${product.slug.current}`}>
          <div className="rounded-lg shadow-2xl">
            <Image
              src={urlForImage(product?.images[0]).url()} //To get the url of 1st image from Sanity
              height={250}
              width={270}
              alt={product?.name}
            />
            <div className="mt-3 pb-3 ml-3 font-montserrat">
              <h3 className="font-semibold ">{product?.name}</h3>
              <p className="text-slate-gray">{product?.categories[0]}</p>
              <p className="text-slate-gray">{product?.colors.length}{" "} Colors</p>
              <p className="font-semibold mt-5">
                MRP: {product?.currency}{" "}{product?.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;

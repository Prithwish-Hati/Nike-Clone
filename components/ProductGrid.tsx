import Image from "next/image";
import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

const ProductGrid = async () => {
    const products = await client.fetch(groq`*[_type == 'product']`);
  return (
    <section>
        <h2>Products</h2>
        {products.map((product: any) => (
          <Link key={product._id} href={`/product/${product.slug.current}`}>
          <div>
            <Image
              src={urlForImage(product?.images[0]).url()} //To get the url of 1st image from Sanity
              height={200}
              width={200}
              alt={product?.name}
              className="object-contain"
            />
            <h3>{product?.name}</h3>
            <p>{product?.categories[0]}</p>
            <p>MRP: {product?.currency}{product?.price}</p>
          </div>
          </Link>
          
        ))}
    </section>
  )
}

export default ProductGrid
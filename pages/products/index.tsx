/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../src/graphql/product";
import Product from "../../src/types/Product";

export default function Page() {
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);

  if (loading) return <></>
  if (error) return <p>Error!</p>

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mb-16">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.products?.products?.map((product: Product) => (
            <a key={product.id} href={`/products/${product.sku}`} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.images[0]?.url}
                  alt={product.images[0]?.description}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

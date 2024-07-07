import { useEffect, useState } from "react";
import { useGet } from "../services/api.ts";
import { Link } from "react-router-dom";
import COverlayLoading from "../components/COverlayLoading.tsx";
const Products = () => {
  interface IProduct {
    id: number;
    creationAt: string;
    description: string;
    price: number;
    title: string;
    images: string[];
  }

  const [products, setProducts] = useState([] as IProduct[]);
  const [isLoading, setIsLoading] = useState(false);
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const res = await useGet("/api/v1/products");
      setProducts(res.data?.splice(13, res.data.length));
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  //   how to get products like onMounted vue js in react js
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {isLoading && !products?.length ? (
        <COverlayLoading spinning={isLoading}></COverlayLoading>
      ) : (
        <div className="grid grid-cols-12 gap-4  align-center justify-between">
          {products.map((product) => (
            <div
              className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 col-span-3"
              key={product.id}
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.images[0]}
                  alt="Product image"
                  className="h-80 w-72 object-cover"
                />
              </Link>
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.title}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ${product.price}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      ${product.price + 50}
                    </p>
                  </del>
                  <div className="ml-auto">
                    <Link to={`/products/${product.id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Products;

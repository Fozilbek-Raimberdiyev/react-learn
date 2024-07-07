import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGet } from "../services/api.ts";
import COverlayLoading from "../components/COverlayLoading.tsx";
const SingleProduct = () => {
  interface IProduct {
    id: number;
    creationAt: string;
    description: string;
    price: number;
    title: string;
    images: string[];
  }
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({} as IProduct);
  const [isLoading, setIsLoading] = useState(false);
  const [isHasCurrentProduct, setIsHasCurrentProduct] = useState(false);
  async function getProduct() {
    try {
      setIsLoading(true);
      const res = await useGet(`/api/v1/products/${id}`);
      setCurrentProduct(res.data);
      setIsHasCurrentProduct(true);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <>
      {isLoading && !isHasCurrentProduct ? (
        <COverlayLoading spinning={true}></COverlayLoading>
      ) : (
        <div
          key={currentProduct.id}
          className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg"
        >
          <div className="relative">
            <img
              className="w-full"
              src={currentProduct?.images?.[0]}
              alt="Product Image"
            ></img>
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              SALE
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{currentProduct.title}</h3>
            <p className="text-gray-600 text-sm mb-4">
              {currentProduct.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">${currentProduct.price}</span>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;

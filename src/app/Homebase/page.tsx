"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import Header from "@/app/(components)/Header";
// import Rating from "@/app/(components)/Rating";
import CreateProductModal from "./createProductModal";

const Homebase = () => {
  const [products] = useState([
    {
      productId: 1,
      name: "Sample Product 1",
      price: 29.99,
      stockQuantity: 10,
      rating: 4.5,
    },
    {
      productId: 2,
      name: "Sample Product 2",
      price: 19.99,
      stockQuantity: 5,
      rating: 4.0,
    },
    {
      productId: 3,
      name: "Sample Product 3",
      price: 39.99,
      stockQuantity: 8,
      rating: 4.8,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateProduct = () => {
    console.log("Create Product logic goes here.");
  };

  return (
    <div className="mx-auto pb-5 w-full">
      {/* HEADER BAR */}
      {/* Uncomment the header bar if needed */}
      {/* <div className="flex justify-between items-center mb-6">
        <Header name="Products" />
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200" />
          Create Product
        </button>
      </div> */}

      {/* PRODUCT LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <Link 
            key={product.productId} 
            href={`/product/${product.productId}`} 
            passHref
          >
            <div className="border shadow rounded-md p-4 max-w-full w-full mx-auto cursor-pointer">
              <div className="flex flex-col items-center">
                <Image
                  src={`/product${Math.floor(Math.random() * 3 + 1)}.png`}
                  alt={product.name}
                  width={149}
                  height={150}
                  className="mb-3 rounded-2xl w-36 h-36"
                />
                <h3 className="text-lg text-gray-900 font-semibold">
                  {product.name}
                </h3>
                <p className="text-gray-800">${product.price.toFixed(2)}</p>
                <div className="text-sm text-gray-600 mt-1">
                  Stock: {product.stockQuantity}
                </div>
                {product.rating && (
                  <div className="flex items-center mt-2">
                    <p>{product.rating} Stars</p>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CREATE PRODUCT MODAL */}
      <CreateProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProduct}
      />
    </div>
  );
};

export default Homebase;

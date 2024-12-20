"use client";

import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// Define the Product type
interface Product {
  productId: number;
  name: string;
  price: number;
  stockQuantity: number;
  rating?: number;
  description: string;
}

// Sample product data (Replace with actual API calls later)
const sampleProducts: Product[] = [
  {
    productId: 1,
    name: "Sample Product 1",
    price: 29.99,
    stockQuantity: 10,
    rating: 4.5,
    description: "This is a detailed description of Sample Product 1.",
  },
  {
    productId: 2,
    name: "Sample Product 2",
    price: 19.99,
    stockQuantity: 5,
    rating: 4.0,
    description: "This is a detailed description of Sample Product 2.",
  },
];

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  // Find product by ID
  const product = sampleProducts.find(
    (p) => p.productId === Number(productId)
  );

  if (!product) {
    return <div className="text-center py-10">Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div>
          <Image
            src={`/product${Math.floor(Math.random() * 3 + 1)}.png`}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-700 text-lg mt-2">${product.price.toFixed(2)}</p>
          <div className="text-gray-600 mt-2">
            Stock: {product.stockQuantity}
          </div>
          {product.rating && (
            <div className="flex items-center mt-2">
              <p>{product.rating} Stars</p>
            </div>
          )}
          <p className="text-gray-700 mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

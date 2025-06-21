"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products", err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product._id} className="border rounded shadow p-4">
          <div className="relative w-full h-48 mb-3">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded"
            />
          </div>
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-500">${product.price}</p>
          <p className="text-sm mt-2">{product.description}</p>
        </div>
      ))}
    </div>
  );
}

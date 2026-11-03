"use client";

import { useState } from "react";
import { ProductCard } from "./_components/product-card";
import { Product } from "./_lib/types";

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Classic Ceramic Mug",
    price: 12500,
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=60",
    available: true,
  },
  {
    id: "prod-2",
    name: "Stainless Steel Tumbler",
    price: 85000,
    imageUrl: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?w=400&auto=format&fit=crop&q=60",
    available: false,
  },
  {
    id: "prod-3",
    name: "Drip Coffee Maker",
    price: 350000,
    imageUrl: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&auto=format&fit=crop&q=60",
    available: true,
  },
];

export default function ProductCardPage() {
  const [lastAddedId, setLastAddedId] = useState<string | null>(null);

  const handleAdd = (productId: string) => {
    setLastAddedId(productId);
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-2xl font-bold tracking-tight">
        Challenge 4: Product Card Component
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Uji interaktivitas, format harga IDR, semantic HTML, dan disabled state.
      </p>

      {lastAddedId && (
        <div className="mt-6 rounded-lg bg-green-50 p-4 text-sm font-medium text-green-800 dark:bg-green-950/40 dark:text-green-300">
          Last added product ID: <span className="font-mono font-bold">{lastAddedId}</span>
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {SAMPLE_PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={handleAdd}
          />
        ))}
      </div>
    </main>
  );
}
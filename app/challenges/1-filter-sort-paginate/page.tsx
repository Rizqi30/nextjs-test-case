"use client";

import { useState } from "react";
import { searchProducts } from "./_lib/search-products";
import { Product } from "./_lib/types";

const SAMPLE_PRODUCTS: Product[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Pear" },
  { id: 3, name: "Apricot" },
  { id: 4, name: "Banana" },
  { id: 5, name: "Grape" },
  { id: 6, name: "Pineapple" },
  { id: 7, name: "Avocado" },
  { id: 8, name: "Papaya" },
  { id: 9, name: "Mango" },
  { id: 10, name: "Dragonfruit" },
];

export default function FilterSortPaginatePage() {
  const [query, setQuery] = useState("ap");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const results = searchProducts(SAMPLE_PRODUCTS, query, page, pageSize);

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl font-bold tracking-tight">
        Challenge 1: Filter, Sort &amp; Paginate
      </h1>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Query
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            className="rounded-md border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Page
          </span>
          <input
            type="number"
            value={page}
            onChange={(e) => setPage(Number(e.target.value))}
            className="rounded-md border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Page Size
          </span>
          <input
            type="number"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="rounded-md border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </label>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">
          Results ({results.length})
        </h2>
        {results.length === 0 ? (
          <p className="mt-3 text-zinc-500">No products found.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {results.map((product) => (
              <li
                key={product.id}
                className="rounded-md border border-zinc-200 px-4 py-3 dark:border-zinc-800"
              >
                <span className="font-mono text-sm text-zinc-400">
                  #{product.id}
                </span>
                <span className="ml-2 font-medium">{product.name}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-10 rounded-lg bg-zinc-50 p-5 dark:bg-zinc-900">
        <h2 className="text-sm font-semibold text-zinc-500">Sample Products</h2>
        <p className="mt-1 text-sm text-zinc-400">
          {SAMPLE_PRODUCTS.map((p) => p.name).join(", ")}
        </p>
      </section>
    </main>
  );
}
"use client";

import { JSX } from "react";
import { ProductCardProps } from "../_lib/types";
import { formatIDR } from "../_lib/format";

export function ProductCard({ product, onAdd }: ProductCardProps): JSX.Element {
  const isAvailable = product.available;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-square w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {!isAvailable && (
          <span className="absolute right-3 top-3 rounded-md bg-zinc-900/80 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm dark:bg-black/80">
            Out of stock
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {product.name}
        </h3>

        <p className="mt-2 text-base font-bold text-zinc-700 dark:text-zinc-300">
          {formatIDR(product.price)}
        </p>

        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={() => onAdd(product.id)}
            disabled={!isAvailable}
            className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-500 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:disabled:bg-zinc-800 dark:disabled:text-zinc-600"
          >
            {isAvailable ? "Add to cart" : "Out of stock"}
          </button>
        </div>
      </div>
    </article>
  );
}
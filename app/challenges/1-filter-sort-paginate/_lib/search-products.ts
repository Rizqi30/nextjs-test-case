import { Product } from "./types";

export function searchProducts(
  products: Product[],
  query: string,
  page: number,
  pageSize: number
): Product[] {
  if (pageSize < 1) {
    return [];
  }

  const safePage = Math.max(1, page);

  const lowerQuery = query.toLowerCase();
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(lowerQuery)
  );

  const sorted = filtered.slice().sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );

  const start = (safePage - 1) * pageSize;
  const end = start + pageSize;

  return sorted.slice(start, end);
}
import Link from "next/link";

const challenges = [
  { id: 1, slug: "1-filter-sort-paginate", title: "Filter, Sort & Paginate Products" },
  { id: 2, slug: "2-route-matching", title: "Resolve Best Matching Route" },
  { id: 3, slug: "3-breadcrumb", title: "Build a Safe Breadcrumb Trail" },
  { id: 4, slug: "4-product-card", title: "Build a Product Card Component" },
  { id: 5, slug: "5-tabs", title: "Build an Accessible Tabs Component" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">
        Coding Assessment
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        5 challenges — 20 points each
      </p>

      <nav className="mt-10">
        <ul className="space-y-3">
          {challenges.map((c) => (
            <li key={c.id}>
              <Link
                href={`/challenges/${c.slug}`}
                className="block rounded-lg border border-zinc-200 px-5 py-4 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              >
                <span className="font-mono text-sm text-zinc-400">
                  {String(c.id).padStart(2, "0")}
                </span>
                <span className="ml-3 font-medium">{c.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
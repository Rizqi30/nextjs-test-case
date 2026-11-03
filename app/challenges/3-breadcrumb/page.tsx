"use client";

import { useState } from "react";
import { buildBreadcrumbs } from "./_lib/build-breadcrumbs";

const DEFAULT_PATHNAME = "/products/blue%20mug";
const DEFAULT_LABELS = JSON.stringify({ products: "Shop" }, null, 2);

export default function BreadcrumbPage() {
  const [pathname, setPathname] = useState(DEFAULT_PATHNAME);
  const [labelsInput, setLabelsInput] = useState(DEFAULT_LABELS);
  const [error, setError] = useState("");

  let labels: Record<string, string> = {};
  try {
    labels = JSON.parse(labelsInput);
    if (error) setError("");
  } catch {
    if (!error) setError("Invalid JSON");
  }

  const breadcrumbs = error ? [] : buildBreadcrumbs(pathname, labels);

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl font-bold tracking-tight">
        Challenge 3: Breadcrumb Trail
      </h1>

      <div className="mt-8 space-y-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Pathname
          </span>
          <input
            type="text"
            value={pathname}
            onChange={(e) => setPathname(e.target.value)}
            className="rounded-md border border-zinc-300 px-3 py-2 font-mono dark:border-zinc-700 dark:bg-zinc-900"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Labels (JSON)
          </span>
          <textarea
            rows={4}
            value={labelsInput}
            onChange={(e) => setLabelsInput(e.target.value)}
            className="rounded-md border border-zinc-300 px-3 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
          {error && (
            <span className="text-sm text-red-500">{error}</span>
          )}
        </label>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Breadcrumbs</h2>
        {breadcrumbs.length === 0 ? (
          <p className="mt-3 text-zinc-500">No breadcrumbs (empty array).</p>
        ) : (
          <nav className="mt-3">
            <ol className="flex flex-wrap items-center gap-1 text-sm">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1">
                  {i > 0 && (
                    <span className="text-zinc-400">/</span>
                  )}
                  <span className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
                    {crumb.label}
                  </span>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </section>

      <section className="mt-8 rounded-lg bg-zinc-50 p-5 dark:bg-zinc-900">
        <h2 className="text-sm font-semibold text-zinc-500">Raw Output</h2>
        <pre className="mt-2 overflow-x-auto text-xs text-zinc-600 dark:text-zinc-400">
          {JSON.stringify(breadcrumbs, null, 2)}
        </pre>
      </section>
    </main>
  );
}
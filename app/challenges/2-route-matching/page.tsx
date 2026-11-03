"use client";

import { useState } from "react";
import { findRoute } from "./_lib/find-route";

const DEFAULT_PATTERNS = [
  "/products",
  "/products/:id",
  "/products/:id/reviews",
  "/about",
  "/users/:userId/posts/:postId",
];

export default function RouteMatchingPage() {
  const [patterns, setPatterns] = useState(DEFAULT_PATTERNS.join("\n"));
  const [pathname, setPathname] = useState("/products/42");

  const patternList = patterns
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  const result = findRoute(patternList, pathname);

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl font-bold tracking-tight">
        Challenge 2: Route Matching
      </h1>

      <div className="mt-8 space-y-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Route Patterns (one per line)
          </span>
          <textarea
            rows={6}
            value={patterns}
            onChange={(e) => setPatterns(e.target.value)}
            className="rounded-md border border-zinc-300 px-3 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </label>

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
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Result</h2>
        <div className="mt-3 rounded-md border border-zinc-200 px-5 py-4 dark:border-zinc-800">
          {result === -1 ? (
            <p className="text-zinc-500">No matching route found (-1)</p>
          ) : (
            <div>
              <p className="font-medium">
                Matched index:{" "}
                <span className="font-mono text-green-600 dark:text-green-400">
                  {result}
                </span>
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Pattern: {patternList[result]}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="mt-8 rounded-lg bg-zinc-50 p-5 dark:bg-zinc-900">
        <h2 className="text-sm font-semibold text-zinc-500">Parsed Patterns</h2>
        <ol className="mt-2 space-y-1">
          {patternList.map((p, i) => (
            <li key={i} className="text-sm font-mono">
              <span className="text-zinc-400">[{i}]</span>{" "}
              <span className={i === result ? "text-green-600 dark:text-green-400 font-semibold" : ""}>
                {p}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
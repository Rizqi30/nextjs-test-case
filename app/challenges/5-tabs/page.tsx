"use client";

import { useState } from "react";
import { Tabs } from "./_components/tabs";
import { TabItem } from "./_lib/types";
import { StarIcon } from "./_components/star-icon";

const DEMO_TABS: TabItem[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <div className="space-y-2">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Product Overview</h3>
        <p className="text-sm">
          This product is crafted with premium materials designed for daily use and longevity.
        </p>
      </div>
    ),
  },
  {
    id: "specs",
    label: "Specifications",
    content: (
      <div className="space-y-2">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Technical Specs</h3>
        <ul className="list-inside list-disc text-sm space-y-1">
          <li>Material: 100% Ceramic</li>
          <li>Capacity: 350ml</li>
          <li>Dishwasher &amp; Microwave Safe</li>
        </ul>
      </div>
    ),
  },
  {
    id: "reviews",
    label: "Reviews",
    content: (
      <div className="space-y-3">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Customer Reviews</h3>
        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Budi S.</span>
            <div className="flex items-center gap-0.5" aria-label="Rating 5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
          </div>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Sangat bagus, finishing rapi dan packing aman sekali.
          </p>
        </div>
      </div>
    ),
  },
];

export default function TabsPage() {
  const [activeTabId, setActiveTabId] = useState("reviews");

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl font-bold tracking-tight">
        Challenge 5: Accessible Tabs Component
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Komponen tabs terkontrol dengan atribut WAI-ARIA dan keyboard support.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <span className="text-sm font-medium text-zinc-500">Active Tab State:</span>
        <code className="rounded bg-zinc-100 px-2 py-1 font-mono text-xs font-bold text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
          {activeTabId}
        </code>
      </div>

      <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <Tabs
          tabs={DEMO_TABS}
          activeId={activeTabId}
          onChange={(newId) => setActiveTabId(newId)}
        />
      </div>
    </main>
  );
}
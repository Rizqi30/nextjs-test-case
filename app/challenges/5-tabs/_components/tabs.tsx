"use client";

import { JSX } from "react";
import { TabsProps } from "../_lib/types";

export function Tabs({ tabs, activeId, onChange }: TabsProps): JSX.Element {
  const activeTab = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Tabs"
        className="flex border-b border-zinc-200 dark:border-zinc-800"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              type="button"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChange(tab.id)}
              className={`relative -mb-px px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 ${
                isActive
                  ? "border-b-2 border-zinc-950 font-semibold text-zinc-950 dark:border-zinc-100 dark:text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab && (
        <div
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          tabIndex={0}
          className="pt-4 text-zinc-700 outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 dark:text-zinc-300"
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
}
import { Breadcrumb } from "./types";

export function buildBreadcrumbs(
  pathname: string,
  labels: Record<string, string>
): Breadcrumb[] {
  const trimmed = pathname.endsWith("/") && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;

  const rawSegments = trimmed.split("/").filter(Boolean);

  if (rawSegments.length === 0) {
    return [];
  }

  return rawSegments.map((rawSegment, index) => {
    const decoded = decodeURIComponent(rawSegment);

    const label = labels[decoded] ?? decoded.replaceAll("-", " ");

    const href = "/" + rawSegments.slice(0, index + 1).join("/");

    return { label, href };
  });
}
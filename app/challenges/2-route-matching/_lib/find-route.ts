// split path ke segments
function toSegments(path: string): string[] {
  return path.split("/").filter(Boolean);
}

// checking 
function isMatch(pattern: string, pathname: string): boolean {
  const patternSegments = toSegments(pattern);
  const pathSegments = toSegments(pathname);

  if (patternSegments.length !== pathSegments.length) {
    return false;
  }

  return patternSegments.every((seg, i) => {
    if (seg.startsWith(":")) {
      return true;
    }
    return seg === pathSegments[i];
  });
}

// return index of first match pattern
export function findRoute(patterns: string[], pathname: string): number {
  for (let i = 0; i < patterns.length; i++) {
    if (isMatch(patterns[i], pathname)) {
      return i
    }
  }
  return -1;
}
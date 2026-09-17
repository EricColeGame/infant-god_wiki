export interface NavigationItem {
  key: string;
  path: string;
  isContentType?: boolean;
}

export const NAVIGATION_CONFIG: readonly NavigationItem[] = [] as const;

export const CONTENT_TYPES: readonly string[] = [] as const;

export interface FetchResponse<T> {
  count: number;
  results: T[];
  // previous?: string;
  next?: string | null;
}

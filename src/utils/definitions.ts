export interface EventResponse {
  _id: string;
  title: string;
  description: string;
  category: string;
  country: string;
  date: string;
  endDate: string;
}

export interface ResponseList<T> {
  total: number;
  page: number;
  pages: number;
  limit: number;
  results: T[];
}

export interface EventsParams {
  title?: string;
  category?: string;
  country?: string;
  date?: string;
  page?: number;
  limit?: number;
}

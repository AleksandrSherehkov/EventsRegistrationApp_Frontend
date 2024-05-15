export interface EventResponse {
  _id: string;
  title: string;
  description: string;
  category: string;
  country: string;
  date: string;
}

export interface ResponseList<T> {
  total: number;
  page: number;
  pages: number;
  limit: number;
  data: T[];
}

export interface EventsParams {
  title?: string;
  category?: string;
  country?: string;
  date?: string;
  page?: number;
  limit?: number;
}

export interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

export interface UserResponse {
  email: string;
  name: string;
  _idEvents?: string[];
  _id: string;
}

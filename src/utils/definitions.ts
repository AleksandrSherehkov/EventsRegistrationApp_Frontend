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
  category?: string | null;
  filterQuery?: string;
  date?: string | null;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
}

export interface UserQueryParams {
  page?: number;
  limit?: number;
  filterQuery?: string;
}

export interface RegisterParams {
  name: string;
  email: string;
  birthDate: string;
  referralSource: string;
  eventId: string;
}

export interface RegisterUserResponse {
  success: boolean;
  data: UserResponse | string;
}

export interface UserResponse {
  _id: string;
  name: string;
  email: string;
  birthDate: string;
  referralSource: string;
  eventIds: string[];
}

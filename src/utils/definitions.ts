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

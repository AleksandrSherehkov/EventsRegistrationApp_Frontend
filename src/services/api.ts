'use server';

import axios from 'axios';
import { handleError } from './errorHandler';
import {
  EventResponse,
  ResponseList,
  EventsParams,
  RegisterParams,
  UserResponse,
} from '@/utils/definitions';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getEvents = async (
  params: EventsParams
): Promise<ResponseList<EventResponse>> => {
  try {
    const { data } = await instance.get<ResponseList<EventResponse>>(
      '/events',
      {
        params,
      }
    );
    console.log(`data:`, data);
    return data;
  } catch (error: unknown) {
    handleError(error);
    throw error;
  }
};

export const registerUser = async (
  params: RegisterParams
) => {
  try {
    const { data } = await instance.post<UserResponse>(
      '/users/register',
      params
    );

    return data;
  } catch (error: unknown) {
    handleError(error);
    throw error;
  }
};

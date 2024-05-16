'use server';

import axios from 'axios';
import { handleError } from './errorHandler';
import {
  EventResponse,
  ResponseList,
  EventsParams,
  RegisterParams,
  UserResponse,
  RegisterUserResponse,
  UserQueryParams,
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
): Promise<RegisterUserResponse> => {
  try {
    const { data } = await instance.post<UserResponse>('/users', params);

    return { success: true, data };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (
        error.response?.data.message.includes(
          'You are already registered for this event.'
        )
      ) {
        return {
          success: false,
          data: 'You are already registered for this event.',
        };
      } else {
        return {
          success: false,
          data: 'An error occurred during registration.',
        };
      }
    } else {
      return {
        success: false,
        data: 'An error occurred during registration.',
      };
    }
  }
};

export const getUserByEventId = async (
  eventId: string,
  params?: UserQueryParams
): Promise<ResponseList<UserResponse>> => {
  try {
    const { data } = await instance.get<ResponseList<UserResponse>>(
      `/users/event/${eventId}`,
      {
        params,
      }
    );
    console.log('Fetched event details successfully:');
    return data;
  } catch (error: unknown) {
    handleError(error);
    throw error;
  }
};

export const getEventId = async (eventId: string): Promise<EventResponse> => {
  try {
    const { data } = await instance.get<EventResponse>(`/events/${eventId}`);
    console.log('Fetched event details successfully:');
    return data;
  } catch (error: unknown) {
    handleError(error);
    throw error;
  }
};

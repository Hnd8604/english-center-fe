/**
 * Storage utilities for localStorage and sessionStorage
 */

import { STORAGE_KEYS } from '@/constants';

/**
 * Get item from localStorage
 */
export const getStorageItem = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error getting item from storage:', error);
    return null;
  }
};

/**
 * Set item in localStorage
 */
export const setStorageItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting item in storage:', error);
  }
};

/**
 * Remove item from localStorage
 */
export const removeStorageItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item from storage:', error);
  }
};

/**
 * Clear all items from localStorage
 */
export const clearStorage = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing storage:', error);
  }
};

/**
 * Get access token from storage
 */
export const getAccessToken = (): string | null => {
  return getStorageItem<string>(STORAGE_KEYS.ACCESS_TOKEN);
};

/**
 * Set access token in storage
 */
export const setAccessToken = (token: string): void => {
  setStorageItem(STORAGE_KEYS.ACCESS_TOKEN, token);
};

/**
 * Remove access token from storage
 */
export const removeAccessToken = (): void => {
  removeStorageItem(STORAGE_KEYS.ACCESS_TOKEN);
};

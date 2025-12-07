/**
 * Date formatting utilities
 */

import { format, parseISO } from 'date-fns';
import { DATE_FORMAT } from '@/constants';

/**
 * Format a date to display format (dd/MM/yyyy)
 */
export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, DATE_FORMAT.DISPLAY);
};

/**
 * Format a date to API format (yyyy-MM-dd)
 */
export const formatDateForAPI = (date: Date): string => {
  return format(date, DATE_FORMAT.API);
};

/**
 * Format a date with time
 */
export const formatDateTime = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, DATE_FORMAT.DATETIME);
};

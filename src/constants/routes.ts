/**
 * Application route constants
 */

export const ROUTES = {
  // Public routes
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  
  // Admin routes
  ADMIN: {
    ROOT: '/admin',
    DASHBOARD: '/admin/dashboard',
    USERS: '/admin/users',
    CLASSES: '/admin/classes',
    BANNER: '/admin/banner',
    FEES: '/admin/fees',
    REPORTS: '/admin/reports',
    SETTINGS: '/admin/settings',
    PROFILE: '/admin/profile',
    NOTIFICATIONS: '/admin/notifications',
  },
  
  // Teacher routes
  TEACHER: {
    ROOT: '/teacher',
    DASHBOARD: '/teacher/dashboard',
    CLASSES: '/teacher/classes',
    ATTENDANCE: '/teacher/attendance',
    SCHEDULE: '/teacher/schedule',
    PAYMENT: '/teacher/payment',
    PROFILE: '/teacher/profile',
    SETTINGS: '/teacher/settings',
  },
  
  // Student routes
  STUDENT: {
    ROOT: '/student',
    DASHBOARD: '/student/dashboard',
    ATTENDANCE: '/student/attendance',
    SCHEDULE: '/student/schedule',
    FEES: '/student/fees',
    PROFILE: '/student/profile',
    SETTINGS: '/student/settings',
  },
  
  // Parent routes
  PARENT: {
    ROOT: '/parent',
    DASHBOARD: '/parent/dashboard',
    CHILDREN: '/parent/children',
    SCHEDULE: '/parent/schedule',
    FEES: '/parent/fees',
    PROFILE: '/parent/profile',
    SETTINGS: '/parent/settings',
  },
} as const;

/**
 * Admin feature barrel export
 */

// API
export * from './api/userApi';

// Components
export { default as ProfileForm } from './components/ProfileForm';
export { default as AvatarEditor } from './components/AvatarEditor';
export { default as AvatarMenu } from './components/AvatarMenu';

// Pages
export { default as AdminDashboard } from './pages/Dashboard';
export { default as UsersPage } from './pages/Users';
export { default as ProfilePage } from './pages/Profile';
export { default as SettingsPage } from './pages/Settings';
export { default as ReportsPage } from './pages/Reports';
export { default as NotificationsPage } from './pages/Notifications';

// Types
export * from './types/user';

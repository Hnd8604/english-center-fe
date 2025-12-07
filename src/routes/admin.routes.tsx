import { RouteObject, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import { ProtectedRoute } from './ProtectedRoute';
import AdminClasses from '@/features/classes/pages/Classes';
import AdminFees from '@/features/payment/pages/Fees';
import AdminReports from '@/features/admin/pages/Reports';
import AdminNotifications from '@/features/admin/pages/Notifications';
import AdminSettings from '@/features/admin/pages/Settings';
import Users from '@/features/admin/pages/Users';
import Banner from '@/features/banner/pages/Banner';
import AdminProfile from '@/features/admin/pages/Profile';
// Admin pages
const AdminDashboard = lazy(() => import('@/features/admin/pages/Dashboard'));

export const adminRoutes: RouteObject = {
    path: '/admin',
    element: (
        <ProtectedRoute allowedRoles={['admin']} redirectPath="/login">
            <AdminLayout />
        </ProtectedRoute>
    ),
    children: [
        {
            index: true,
            element: <Navigate to="/admin/dashboard" replace />,
        },
        {
            path: 'dashboard',
            element: <AdminDashboard />,
        },
        {
            path: 'classes',
            element: <AdminClasses />,
        },
        {
            path: 'users',
            element: <Users />,
        },
        {
            path: 'fees',
            element: <AdminFees />,
        },
        {
            path: 'reports',
            element: <AdminReports />,
        },
        {
            path: 'notifications',
            element: <AdminNotifications />,
        },
        {
            path: 'settings',
            element: <AdminSettings />,
        },
        {
            path: 'banner',
            element: <Banner />,
        },
        {
            path: 'profile',
            element: <AdminProfile />,
        }
    ],
}; 

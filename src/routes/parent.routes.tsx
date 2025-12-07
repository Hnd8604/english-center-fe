import { RouteObject, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ParentLayout from '@/layouts/ParentLayout';
import { ProtectedRoute } from './ProtectedRoute';
import ParentChildren from '@/features/parent/pages/Children';
import ParentFees from '@/features/parent/pages/Fees';
import ParentSchedule from '@/features/parent/pages/Schedule';
import ParentSettings from '@/features/parent/pages/Settings';
import ParentProfile from '@/features/parent/pages/Profile';

// Loading component
const Loading = () => <div className="min-h-screen flex items-center justify-center">Loading...</div>;

// Parent pages
const ParentDashboard = lazy(() => import('@/features/parent/pages/Dashboard'));

export const parentRoutes: RouteObject = {
    path: '/parent',
    element: (
        <ProtectedRoute allowedRoles={['parent']} redirectPath="/login">
            <ParentLayout />
        </ProtectedRoute>
    ),
    children: [
        {
            index: true,
            element: <Navigate to="/parent/dashboard" replace />,
        },
        {
            path: 'dashboard',
            element: <ParentDashboard />,
        },
        {
            path: 'children',
            element: <ParentChildren />,
        },
        {
            path: 'fees',
            element: <ParentFees />,
        },
        {
            path: 'schedule',
            element: <ParentSchedule />,
        },
        {
            path: 'settings',
            element: <ParentSettings />,
        },
        {
            path: 'profile',
            element: <ParentProfile />,
        }
    ],
}; 

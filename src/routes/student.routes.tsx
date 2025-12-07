import { RouteObject, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import StudentLayout from '@/layouts/StudentLayout';
import { ProtectedRoute } from './ProtectedRoute';
import StudentAttendance from '@/features/student/pages/Attendance';
import StudentFees from '@/features/student/pages/Fees';
import StudentSchedule from '@/features/student/pages/Schedule';
import StudentSettings from '@/features/student/pages/Settings';
import StudentProfile from '@/features/student/pages/Profile';

// Student pages
const StudentDashboard = lazy(() => import('@/features/student/pages/Dashboard'));

export const studentRoutes: RouteObject = {
    path: '/student',
    element: (
        <ProtectedRoute allowedRoles={['student']} redirectPath="/login">
            <StudentLayout />
        </ProtectedRoute>
    ),
    children: [
        {
            index: true,
            element: <Navigate to="/student/dashboard" replace />,
        },
        {
            path: 'dashboard',
            element: <StudentDashboard />,
        },
        {
            path: 'attendance',
            element: <StudentAttendance />,
        },
        {
            path: 'fees',
            element: <StudentFees />,
        },
        {
            path: 'schedule',
            element: <StudentSchedule />,
        },
        {
            path: 'settings',
            element: <StudentSettings />,
        },
        {
            path: 'profile',
            element: <StudentProfile />,
        }
    ],
}; 

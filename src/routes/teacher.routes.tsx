import { RouteObject, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import TeacherLayout from '@/layouts/TeacherLayout';
import { ProtectedRoute } from './ProtectedRoute';
import TeacherClasses from '@/features/teacher/pages/Classes';
import TeacherAttendance from '@/features/teacher/pages/Attendance';
import TeacherSchedule from '@/features/teacher/pages/Schedule';
import TeacherSettings from '@/features/teacher/pages/Settings';
import TeacherProfile from '@/features/teacher/pages/Profile';
import TeacherPayment from '@/features/teacher/pages/Payment';

// Teacher pages
const TeacherDashboard = lazy(() => import('@/features/teacher/pages/Dashboard'));

export const teacherRoutes: RouteObject = {
    path: '/teacher',
    element: (
        <ProtectedRoute allowedRoles={['teacher']} redirectPath="/login">
            <TeacherLayout />
        </ProtectedRoute>
    ),
    children: [
        {
            index: true,
            element: <Navigate to="/teacher/dashboard" replace />,
        },
        {
            path: 'dashboard',
            element: <TeacherDashboard />,
        },
        {
            path: 'classes',
            element: <TeacherClasses />,
        },
        {
            path: 'attendance',
            element: <TeacherAttendance />,
        },
        {
            path: 'schedule',
            element: <TeacherSchedule />,
        },
        {
            path: 'settings',
            element: <TeacherSettings />,
        },
        {
            path: 'profile',
            element: <TeacherProfile />,
        },
        {
            path: 'payment',
            element: <TeacherPayment />,
        }
    ],
}; 

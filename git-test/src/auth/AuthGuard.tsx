import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard: React.FC = () => {
    const isAuthenticated = !!localStorage.getItem('access_token');

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};
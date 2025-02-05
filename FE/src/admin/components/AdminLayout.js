import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminRoutes from '../routes';

const AdminLayout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminInfo');
        navigate('/admin/login');
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-4">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
                </div>
                <nav className="mt-4">
                    <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/admin/products"
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                        Products
                    </Link>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow">
                    <div className="px-4 py-3 flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    <AdminRoutes />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout; 
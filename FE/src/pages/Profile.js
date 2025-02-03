import React, { useState } from 'react';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('profile');

    // Placeholder user data
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+84 123 456 789',
        address: '69/68 Đ. Đặng Thuỳ Trâm, Phường 13, Bình Thạnh, Hồ Chí Minh'
    };

    // Placeholder order history
    const orders = [
        {
            id: '#ORD001',
            date: '2024-01-15',
            total: 299.97,
            status: 'Delivered',
            items: [
                { name: 'Nike Air Max', quantity: 1, price: 129.99 },
                { name: 'Adidas Ultraboost', quantity: 1, price: 169.98 }
            ]
        },
        {
            id: '#ORD002',
            date: '2024-01-10',
            total: 109.99,
            status: 'Processing',
            items: [
                { name: 'Puma RS-X', quantity: 1, price: 109.99 }
            ]
        }
    ];

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Profile Header */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                                <i className="fas fa-user text-3xl text-gray-400"></i>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">{user.name}</h1>
                                <p className="text-gray-600">{user.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="flex border-b mb-6">
                        <button
                            className={`px-6 py-2 ${activeTab === 'profile' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            Profile
                        </button>
                        <button
                            className={`px-6 py-2 ${activeTab === 'orders' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('orders')}
                        >
                            Orders
                        </button>
                    </div>

                    {/* Profile Information */}
                    <div className={activeTab === 'profile' ? 'block' : 'hidden'}>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={user.name}
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            defaultValue={user.email}
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            defaultValue={user.phone}
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={user.address}
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
                                >
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Order History */}
                    <div className={activeTab === 'orders' ? 'block' : 'hidden'}>
                        <div className="space-y-6">
                            {orders.map((order) => (
                                <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <h3 className="font-semibold">Order {order.id}</h3>
                                            <p className="text-sm text-gray-600">
                                                Placed on {new Date(order.date).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <div className="border-t pt-4">
                                        {order.items.map((item, index) => (
                                            <div key={index} className="flex justify-between items-center py-2">
                                                <div>
                                                    <p className="font-medium">{item.name}</p>
                                                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                                </div>
                                                <p className="font-medium">${item.price}</p>
                                            </div>
                                        ))}
                                        <div className="border-t mt-4 pt-4 flex justify-between items-center">
                                            <span className="font-semibold">Total</span>
                                            <span className="font-semibold">${order.total}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile; 
import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Products */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-gray-500 text-sm font-medium">Total Products</h2>
                    <p className="text-3xl font-bold mt-2">120</p>
                    <div className="text-green-500 text-sm mt-2">
                        <span>↑ 12% from last month</span>
                    </div>
                </div>

                {/* Total Orders */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-gray-500 text-sm font-medium">Total Orders</h2>
                    <p className="text-3xl font-bold mt-2">45</p>
                    <div className="text-green-500 text-sm mt-2">
                        <span>↑ 8% from last month</span>
                    </div>
                </div>

                {/* Total Revenue */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-gray-500 text-sm font-medium">Total Revenue</h2>
                    <p className="text-3xl font-bold mt-2">$12,450</p>
                    <div className="text-green-500 text-sm mt-2">
                        <span>↑ 15% from last month</span>
                    </div>
                </div>
            </div>

            {/* Recent Orders */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">#12345</td>
                                <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                                <td className="px-6 py-4 whitespace-nowrap">Nike Air Max 270</td>
                                <td className="px-6 py-4 whitespace-nowrap">$150.00</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Completed
                                    </span>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 
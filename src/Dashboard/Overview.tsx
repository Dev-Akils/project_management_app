import { useNavigate } from "react-router-dom";
import SalesChart from "./chart/SalesChart";



const Overview = () => {
    const stats = [
        { title: "Total Sales", value: "₹1,24,500", change: "+12%" },
        { title: "Orders", value: "320", change: "+8%" },
        { title: "Customers", value: "210", change: "+5%" },
        { title: "Revenue", value: "₹78,900", change: "+15%" },
    ];
    const navigate = useNavigate()
    return (
        <div className="p-6 space-y-6  bg-slate-200 w-screen h-auto">
            {/* Header */}

            <div className="flex justify-between px-5">
                <h1 className="text-2xl font-semibold">Sales Overview</h1>
                <button className="px-4 rounded-lg mr-5 text-sm bg-gray-500/70 hover:bg-gray-600/80 text-white py-2" onClick={() => navigate(-1)}>Go Back</button>
            </div>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm p-4 border"
                    >
                        <p className="text-sm text-gray-500">{item.title}</p>
                        <h2 className="text-2xl font-bold text-gray-800">{item.value}</h2>
                        <span className="text-green-500 text-sm">{item.change}</span>
                    </div>
                ))}
            </div>

            {/* Chart + Recent Orders */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">




                {/* Sales Chart Placeholder */}
                <div className="lg:col-span-2 bg-white rounded-xl p-2 shadow-sm border">
                    <h2 className="text-lg font-semibold mb-4">Sales Trend</h2>
                    {/* Chart */}
                    <SalesChart />

                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-xl p-2 shadow-sm border">
                    <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
                    <ul className="space-y-2">
                        <li className="flex justify-between text-sm">
                            <span>#ORD001</span>
                            <span className="text-green-500">₹2,500</span>
                        </li>
                        <li className="flex justify-between text-sm">
                            <span>#ORD002</span>
                            <span className="text-green-500">₹1,800</span>
                        </li>
                        <li className="flex justify-between text-sm">
                            <span>#ORD003</span>
                            <span className="text-green-500">₹3,200</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Overview;

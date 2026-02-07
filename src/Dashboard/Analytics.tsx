import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const monthlySalesOptions = {
    chart: { type: "area", backgroundColor: "transparent" },
    title: { text: "" },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      title: { text: "Revenue (₹)" },
    },
    series: [
      {
        name: "Sales",
        data: [12000, 15000, 18000, 22000, 26000, 31000],
      },
    ],
    credits: { enabled: false },
  };

  const categoryOptions = {
    chart: { type: "column", backgroundColor: "transparent" },
    title: { text: "" },
    xAxis: {
      categories: ["Electronics", "Fashion", "Groceries", "Furniture"],
    },
    yAxis: {
      title: { text: "Sales (₹)" },
    },
    series: [
      {
        name: "Categories",
        data: [45000, 30000, 20000, 15000],
      },
    ],
    credits: { enabled: false },
  };

  const customerOptions = {
    chart: { type: "pie", backgroundColor: "transparent" },
    title: { text: "" },
    series: [
      {
        name: "Customers",
        data: [
          { name: "New Customers", y: 60 },
          { name: "Returning Customers", y: 40 },
        ],
      },
    ],
    credits: { enabled: false },
  };

  const stats = [
    { title: "Growth Rate", value: "+18%" },
    { title: "Best Product", value: "iPhone 15" },
    { title: "Top Region", value: "Chennai" },
  ];
  const navigate = useNavigate();
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between px-5">
        <h1 className="text-2xl font-semibold">Sales Analytics</h1>
        <button className="px-4 rounded-lg  text-sm bg-gray-500/70 hover:bg-gray-600/80 text-white py-2" onClick={() => navigate(-1)}>Go Back</button>
      </div>


      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow-sm border"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <h2 className="text-xl font-bold">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Monthly Sales Chart */}
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Monthly Sales Trend</h2>
        <HighchartsReact
          highcharts={Highcharts}
          options={monthlySalesOptions}
        />
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Sales by Category</h2>
          <HighchartsReact
            highcharts={Highcharts}
            options={categoryOptions}
          />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Customer Type</h2>
          <HighchartsReact
            highcharts={Highcharts}
            options={customerOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;

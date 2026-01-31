const Reports = () => {
  const reportsData = [
    {
      id: "#ORD001",
      customer: "Ramesh",
      amount: "₹2,500",
      date: "2026-01-25",
      status: "Completed",
    },
    {
      id: "#ORD002",
      customer: "Suresh",
      amount: "₹1,800",
      date: "2026-01-26",
      status: "Pending",
    },
    {
      id: "#ORD003",
      customer: "Priya",
      amount: "₹3,200",
      date: "2026-01-27",
      status: "Completed",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Sales Reports</h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border flex flex-wrap gap-4">
        <input
          type="date"
          className="border rounded-md px-3 py-2 text-sm"
        />
        <input
          type="date"
          className="border rounded-md px-3 py-2 text-sm"
        />

        <select className="border rounded-md px-3 py-2 text-sm">
          <option>All Status</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>

        <input
          type="text"
          placeholder="Search Order / Customer"
          className="border rounded-md px-3 py-2 text-sm flex-1 min-w-[200px]"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
          Export
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">Order ID</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {reportsData.map((item, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3">{item.customer}</td>
                <td className="px-4 py-3">{item.amount}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;

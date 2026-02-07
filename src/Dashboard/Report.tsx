import  { useState } from "react";
import { useNavigate } from "react-router-dom";


const Reports = () => {
  // 1. Original Data (usually from an API)

  const navigate=useNavigate();
  const reportsData = [
    { id: "#ORD001", customer: "Ramesh", amount: "₹2,500", date: "2026-01-25", status: "Completed" },
    { id: "#ORD002", customer: "Suresh", amount: "₹1,800", date: "2026-01-26", status: "Pending" },
    { id: "#ORD003", customer: "Priya", amount: "₹3,200", date: "2026-01-27", status: "Completed" },
    { id: "#ORD004", customer: "Anjali", amount: "₹4,100", date: "2026-02-01", status: "Cancelled" },
  ];

  // 2. Filter States
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [searchQuery, setSearchQuery] = useState("");

  // 3. Logic: Filtering the Data
  const filteredData = reportsData.filter((item) => {
    const matchesStatus = statusFilter === "All Status" || item.status === statusFilter;
    const matchesSearch = 
      item.customer.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Date Filtering Logic
    const itemDate = new Date(item.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    const matchesDate = (!start || itemDate >= start) && (!end || itemDate <= end);

    return matchesStatus && matchesSearch && matchesDate;
  });

  // 4. Export Functionality (Simple CSV Export)
  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + ["Order ID,Customer,Amount,Date,Status", ...filteredData.map(r => `${r.id},${r.customer},${r.amount},${r.date},${r.status}`)].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "sales_report.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="w-full justify-between flex">
      <h1 className="text-2xl font-semibold">Sales Reports</h1>
      <button className="px-4 rounded-lg mr-5 text-sm bg-gray-500/70 hover:bg-gray-600/80 text-white py-2" onClick={()=>navigate(-1)}>Go Back</button>
      </div>


      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border flex flex-wrap gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase font-bold text-gray-400">From</label>
          <input 
            type="date" 
            className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase font-bold text-gray-400">To</label>
          <input 
            type="date" 
            className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" 
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase font-bold text-gray-400">Status</label>
          <select 
            className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
        </div>

        <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
          <label className="text-[10px] uppercase font-bold text-gray-400">Search</label>
          <input
            type="text"
            placeholder="Search Order / Customer"
            className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button 
          onClick={handleExport}
          className="self-end bg-gray-500/70 hover:bg-gray-600/80 text-white px-6 py-2 rounded-md text-sm transition-colors shadow-md active:scale-95"
        >
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 border-b">
            <tr>
              <th className="px-4 py-4 text-left font-medium">Order ID</th>
              <th className="px-4 py-4 text-left font-medium">Customer</th>
              <th className="px-4 py-4 text-left font-medium">Amount</th>
              <th className="px-4 py-4 text-left font-medium">Date</th>
              <th className="px-4 py-4 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredData.length > 0 ? (
              filteredData.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-blue-600">{item.id}</td>
                  <td className="px-4 py-4">{item.customer}</td>
                  <td className="px-4 py-4 font-semibold">{item.amount}</td>
                  <td className="px-4 py-4 text-gray-500">{item.date}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tighter ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-gray-400">
                  No records found matching your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
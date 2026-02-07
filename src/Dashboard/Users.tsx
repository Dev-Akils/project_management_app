import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive';
}

const users: User[] = [
  { id: 1, name: "Arjun Mehta", email: "arjun@archywave.com", role: "Admin", status: "Active" },
  { id: 2, name: "Sarah Khan", email: "sarah@archywave.com", role: "Editor", status: "Active" },
  { id: 3, name: "Leo Das", email: "leo@archywave.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "Priya Sharma", email: "priya@archywave.com", role: "Viewer", status: "Active" },
  { id: 5, name: "Rohan Varma", email: "rohan@archywave.com", role: "Editor", status: "Active" },
  { id: 6, name: "Aman Gupta", email: "aman@archywave.com", role: "Viewer", status: "Inactive" },
  { id: 7, name: "Sana Iyer", email: "sana@archywave.com", role: "Admin", status: "Active" },
];

export default function Users() {

  const navigate=useNavigate()
  // 1. Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 2. Calculation Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="p-8 w-full mx-auto">
      <div className="w-full justify-between flex">
        <div className="mb-6">
          <h1 className="text-2xl font-medium text-gray-900 tracking-tight">User Management</h1>
          <p className="text-sm text-gray-500">Manage permissions and track user activity.</p>
        </div>
        <div>
        <button className="px-4 rounded-lg mr-5 text-sm bg-gray-500/70 hover:bg-gray-600/80 text-white py-2" onClick={() => navigate(-1)}>Go Back</button>
     </div> </div>


      {/* Main Container: Fixed Height & Scrollable */}
      <div className="overflow-y-auto relative border border-gray-200 rounded-xl shadow-sm bg-white">

        <table className="w-full text-left border-collapse">
          {/* STICKY HEADER */}
          <thead className="sticky top-0 z-20 bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-600">Name</th>
              <th className="px-6 ml-3 py-4 text-xs font-semibold uppercase tracking-wider text-gray-600">Email</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-600">Role</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-600">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {currentItems.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200 rounded-md">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                    }`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* STICKY FOOTER: Stays at the bottom of the h-[500px] container */}
        <div className="sticky bottom-0 z-20 px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Showing <span className="font-semibold text-gray-700">{indexOfFirstItem + 1}</span> to{" "}
            <span className="font-semibold text-gray-700">{Math.min(indexOfLastItem, users.length)}</span> of{" "}
            <span className="font-semibold text-gray-700">{users.length}</span> users
          </span>
          <div className="flex gap-2">
            <button
              onClick={goToPrev}
              disabled={currentPage === 1}
              className="px-4 py-1.5 text-xs font-medium border rounded-lg bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              Previous
            </button>
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="px-4 py-1.5 text-xs font-medium border rounded-lg bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
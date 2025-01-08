// app/components/Sidebar.tsx
import { useState } from "react";
import Link from "next/link";
import { FaUser, FaUtensils, FaTruck, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-blue-900 text-white shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-64`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-blue-700">
          <h1 className="text-xl font-bold">Hospital Dashboard</h1>
          <button
            className="lg:hidden text-white text-2xl"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="mt-6">
          <ul className="space-y-4">
            <li>
              <Link
                href="/dashboard/manager"
                className="flex items-center px-6 py-2 text-lg font-medium hover:bg-blue-700 rounded-md"
              >
                <FaUser className="mr-3" />
                Hospital Manager
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/pantry"
                className="flex items-center px-6 py-2 text-lg font-medium hover:bg-blue-700 rounded-md"
              >
                <FaUtensils className="mr-3" />
                Inner Pantry
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/delivery"
                className="flex items-center px-6 py-2 text-lg font-medium hover:bg-blue-700 rounded-md"
              >
                <FaTruck className="mr-3" />
                Delivery Personnel
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Hamburger Menu */}
      <button
        className="fixed top-4 left-4 z-50 text-blue-900 text-2xl lg:hidden"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 bg-gray-100 min-h-screen p-6">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold">Welcome to the Dashboard</h2>
          <p className="mt-2 text-gray-600">
            Select a role from the sidebar to manage tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

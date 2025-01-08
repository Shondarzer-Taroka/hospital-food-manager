// app/components/Sidebar.tsx

// "use client"
// import { useState } from "react";
// import { FaUser, FaUtensils, FaTruck, FaBars, FaTimes } from "react-icons/fa";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("hospitalManager");

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   const renderContent = () => {
//     switch (activeSection) {
//       case "hospitalManager":
//         return (
//           <div>
//             <h2 className="text-2xl font-bold">Hospital Manager</h2>
//             <p className="mt-2 text-gray-600">
//               Manage patient details, create diet charts, and monitor delivery statuses.
//             </p>
//           </div>
//         );
//       case "innerPantry":
//         return (
//           <div>
//             <h2 className="text-2xl font-bold">Inner Pantry</h2>
//             <p className="mt-2 text-gray-600">
//               Assign food preparation tasks, manage delivery personnel, and track meal preparation.
//             </p>
//           </div>
//         );
//       case "deliveryPersonnel":
//         return (
//           <div>
//             <h2 className="text-2xl font-bold">Delivery Personnel</h2>
//             <p className="mt-2 text-gray-600">
//               View assigned meal boxes, mark deliveries as complete, and update delivery statuses.
//             </p>
//           </div>
//         );
//       default:
//         return <p>Select a section to view its details.</p>;
//     }
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-screen bg-blue-900 text-white shadow-lg z-50 transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 lg:w-64`}
//       >
//         <div className="flex items-center justify-between px-6 py-4 border-b border-blue-700">
//           <h1 className="text-xl font-bold">Hospital Dashboard</h1>
//           <button
//             className="lg:hidden text-white text-2xl"
//             onClick={toggleSidebar}
//           >
//             <FaTimes />
//           </button>
//         </div>

//         <nav className="mt-6">
//           <ul className="space-y-4">
//             <li>
//               <button
//                 onClick={() => setActiveSection("hospitalManager")}
//                 className={`flex items-center px-6 py-2 text-lg font-medium rounded-md ${
//                   activeSection === "hospitalManager"
//                     ? "bg-blue-700"
//                     : "hover:bg-blue-700"
//                 }`}
//               >
//                 <FaUser className="mr-3" />
//                 Hospital Manager
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => setActiveSection("innerPantry")}
//                 className={`flex items-center px-6 py-2 text-lg font-medium rounded-md ${
//                   activeSection === "innerPantry"
//                     ? "bg-blue-700"
//                     : "hover:bg-blue-700"
//                 }`}
//               >
//                 <FaUtensils className="mr-3" />
//                 Inner Pantry
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => setActiveSection("deliveryPersonnel")}
//                 className={`flex items-center px-6 py-2 text-lg font-medium rounded-md ${
//                   activeSection === "deliveryPersonnel"
//                     ? "bg-blue-700"
//                     : "hover:bg-blue-700"
//                 }`}
//               >
//                 <FaTruck className="mr-3" />
//                 Delivery Personnel
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Mobile Hamburger Menu */}
//       <button
//         className="fixed top-4 left-4 z-50 text-blue-900 text-2xl lg:hidden"
//         onClick={toggleSidebar}
//       >
//         <FaBars />
//       </button>

//       {/* Main Content Area */}
//       <div className="flex-1 lg:ml-64 bg-gray-100 min-h-screen p-6">
//         <div className="p-4 bg-white rounded shadow">{renderContent()}</div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;










"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaUtensils, FaTruck } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-blue-900 text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold">Hospital Dashboard</h2>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard/hospital-manager"
              className={`block px-4 py-2 rounded ${
                pathname === "/dashboard/hospital-manager"
                  ? "bg-blue-700"
                  : "hover:bg-blue-700"
              }`}
            >
              <FaUser className="inline mr-2" />
              Hospital Manager
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/inner-pantry"
              className={`block px-4 py-2 rounded ${
                pathname === "/dashboard/inner-pantry"
                  ? "bg-blue-700"
                  : "hover:bg-blue-700"
              }`}
            >
              <FaUtensils className="inline mr-2" />
              Inner Pantry
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/delivery-personnel"
              className={`block px-4 py-2 rounded ${
                pathname === "/dashboard/delivery-personnel"
                  ? "bg-blue-700"
                  : "hover:bg-blue-700"
              }`}
            >
              <FaTruck className="inline mr-2" />
              Delivery Personnel
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

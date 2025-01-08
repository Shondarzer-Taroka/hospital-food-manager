// const Dashboard = () => {
//     return (
//       <div>
//         <h1 className="text-2xl font-bold">Welcome to the Hospital Dashboard</h1>
//         <p>Manage hospital food, delivery systems, and more from here.</p>
//       </div>
//     );
//   };

//   export default Dashboard;

import Sidebar from '@/Components/Dashboard/Sidebar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Sidebar />
        </div>
    );
};

export default page;
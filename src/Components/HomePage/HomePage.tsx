import React from 'react';
import Patients from '../HospitalFoodManager/Patients';
import Sidebar from '../Dashboard/Sidebar';

const HomePage = () => {
    return (
        <div>
            <Patients/>
            <Sidebar/>
        </div>
    );
};

export default HomePage;
import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../../Dashboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Allpatients = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://agile-temple-59192.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <AppointmentDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default Allpatients;
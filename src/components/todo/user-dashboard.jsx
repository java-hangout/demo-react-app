import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom"

export function UserDashboard() {

    let navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['userid']);
    const [appointements, setAppointments] = useState([{ id: 0, title: '', date: '', userid: '' }]);



    useEffect(() => {
        axios.get(`http://127.0.0.1:4000/appointments`).then(response => {
            let appts = response.data.filter(appt => appt.userid === cookies['userid']);
            setAppointments(appts);
        })
    }, [])


    function handleSignout() {
        removeCookie('userid');
        navigate('/');
    }

    return (
        <div className="container bg-light w-50 p-4">
            <h3 className="d-flex justify-content-between"><span> {cookies['userid']}</span> <span>User Dashboard</span><span>
                <button className="btn btn-link" onClick={handleSignout}>Signout</button></span></h3>
            <Link to="/add-appointment" className="btn btn-success bi bi-calendar-event">Add Appointment</Link>
            <div className="mt-2 overflow-auto" style={{ height: "400px" }}>

                {
                    appointements.map(appointement =>
                        <div key={appointement.id} className="alter m-2 alter-bg-success">
                            <h4>{appointement.title}</h4>
                            <p>{appointement.date}</p>
                            <p>{appointement.userid}</p>

                            <div>
                                <Link to={`/update-appointment/${appointement.id}`} className="bi bi-pen-fill btn btn-warning"></Link>
                                <Link to={`/delete-appointment/${appointement.id}`} className="bi bi-trash-fill btn btn-danger max-2"></Link>


                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    )
}
import axios from "axios";
import { useEffect, useState } from "react"


export function ToDO(){

    //const [appointments, setAppointments] = useState([]); // initialing state not assign
    const[app, setApp] = useState([]);

    useEffect(()=>{ // while mounting and mounting actions

        axios.get(`http://localhost:4040/appointments`) // api call
        .then(response=>{
            // setAppointments(response.data);
            setApp(response.data);
        })

    },[])

    return(
        <div className="container-fluid">
            <h3>Your Appointments</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        app.map(app=>
                        <tr key={app.id}>
                            <td>{app.userid}</td>
                            <td>{app.title}</td>
                            <td>{app.date}</td>
                            <td>
                                <button className="btn btn-warning bi bi-pen"></button>
                                <button className="btn btn-danger mx-2 bi bi-trash"></button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}


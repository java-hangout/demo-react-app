import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";

export function AddAppointment() {

    // arrow function
    // Syntax Breakdown:
    // () => {} is an arrow function.
    // () represents the parameters of the function (empty in this case, meaning it takes no arguments).
    // => is the arrow that separates the function parameters from the body.
    // {} is the function body, which can contain any logic (in this case, it's empty).

    const [cookies, setCookie, removeCookie] = useCookies(['userid']);
    let nagivate = useNavigate();

    let formik = useFormik({
        initialValues: {
            title: '',
            date: '',
            userid: cookies['userid']
        },
        onSubmit: (appointement) => {
            axios.post(`http://localhost:4000/appointments`, appointement).then(() => {
                //this is arrow function.
                console.log("Appointment is successfully created...!!!");

            })
        }
    })

    return (
        <div className="container p-4 w-50 bg-light">
            <h3 className="text-center">Add New Appointment - {cookies['userid']}</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Titel:</dt>
                    <dd><input type="text" onChange={formik.handleChange} className="form-control" name="title" /></dd>
                    <dt>Date:</dt>
                    <dd><input type="date" onChange={formik.handleChange} className="form-control" name="date" /></dd>
                </dl>
                <button className="btn btn-success">Submit</button>
                <Link to="/dashboard" className="btn btn-warning mx-2">Cancel</Link>
            </form>
        </div>
    )
}
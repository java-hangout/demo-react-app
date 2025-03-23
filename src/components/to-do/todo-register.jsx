import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

export function ToDoRegister() {

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            userid: '',
            password: '',
            email: ''
        }, onSubmit: (user) => {
            axios.post(`http://127.0.0.1:4000/users`, user).then(() => {
                console.log('User Registered Successfully...!!');
            })
            alert("User Registered Successfully...!!");
            navigate("/login");
        }
    }

    )

    return (
        <div className="container p-4 w-50 bg-light">
            <h3 className="text-center">Register User</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserID:</dt>
                    <dd> <input type="text" onChange={formik.handleChange} className="form-control" name="userid" /></dd>
                    <dt>Password:</dt>
                    <dd><input type="password" onChange={formik.handleChange} className="form-control" name="password" /></dd>
                    <dt>Email: </dt>
                    <dd><input type="email" onChange={formik.handleChange} className="form-control" name="email" /></dd>
                </dl>
                <button className="btn btn-warning">Register</button>
                <p className="mt-4">Existing User <Link to="/login" >Login</Link></p>
            </form>
        </div>
    );
}
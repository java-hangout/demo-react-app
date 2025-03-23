import { DataBinding } from "../databinding/data-binding"
export function Register() {
    return (
        // This is the JSX area
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <form className="mt-4 w-25 p-4 alert alert-warning alert-dismissible border border-secondary rounded rounded-2">
                    <h3 className="bi bi-person-fill"> Register User</h3>
                    <button className="btn btn-close"></button>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" className="form-control" /></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control" /></dd>
                        <dt>Email</dt>
                        <dd><input type="email" className="form-control" /></dd>
                        <dt>Mobile</dt>
                        <dd><input type="text" className="form-control" /></dd>
                    </dl>
                    <button className="btn btn-warning w-100">Register</button>
                </form>

            </div>
            <div><DataBinding /></div>
        </div>
    )
}

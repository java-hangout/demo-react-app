import { Link } from "react-router-dom";

export function ToDoHome(){
    return (
    <div className="d-flex justify-content-center align-align-items-center" >
        <div class='d-flex justify-content-between w-50 p-4'>
        <Link to ="/register" className="btn btn-success w-10"> Register </Link>
        <Link to ="/login" className="btn btn-success w-10"> Login </Link>
        </div>
    </div>);
}
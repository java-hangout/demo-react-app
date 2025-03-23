import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ToDoHome } from "./todo-home";
import { TodoLogin } from "./todo-login";
import { ToDoRegister } from "./todo-register";
import { UserDashboard } from "./user-dashboard";
import { AddAppointment } from "./add-appointment";
import { UpdateAppointment } from "./update-appointment";
import { DeleteAppointment } from "./delete-appointment";

export function ToDoIndex() {
    return (
        <div className="bg-image">
            <BrowserRouter>
                <header className="p-2 text-center text-bg-white">
                    <h1><Link to="/" className="btn btn-light w-50">TO-DO APP</Link></h1>
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<ToDoHome />}></Route>
                        <Route path="/login" element={<TodoLogin />} ></Route>
                        <Route path="/register" element={< ToDoRegister />} />
                        <Route path="/dashboard" element={<UserDashboard />} />
                        <Route path="/add-appointment" element={< AddAppointment />} />
                        <Route path="/update-appointment/:id" element={< UpdateAppointment />} />
                        <Route path="/delete-appointment/:id" element={< DeleteAppointment />} />

                    </Routes>
                </section>
            </BrowserRouter>

        </div>

    );
}
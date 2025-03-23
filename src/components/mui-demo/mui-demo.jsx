import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { MUITaskDemo } from "./mui-task-demo";

export function MUIDemo()
{

    const [username, setUserName] = useState('');

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    function handleLoginClick(){
        console.log(username);
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center">
             {/* <h2>Bootstrap Design</h2>
               <div className="w-25">
                   <label className="form-label">User Name</label>
                   <div>
                      <input type="text" placeholder="Your name" className="form-control" />
                   </div>
                   <button className="btn btn-danger w-100 mt-3">Login</button>
               </div>
               <br /> <br/> <br /> */}
             
             <div className="w-25 d-flex flex-column align-items-center">
             <h2>MUI Design</h2>
                 <div className="mb-3 w-100">
                 <TextField onChange={handleNameChange} type="text" label="User Name" className="w-100" variant="standard" placeholder="Enter your name" ></TextField>
                 </div>
                 <div className="mb-3 w-100">
                  <TextField type="password" label="Password" className="w-100" variant="standard" placeholder="Your password" ></TextField>
                 </div>
                 <div className="mt-4 w-100">
                    <Button onClick={handleLoginClick} variant="contained" color="error" className="w-100" > Login </Button>
                 </div>
                 <div> <MUITaskDemo /> </div>
             </div>
        </div>
    )
}

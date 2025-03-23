import { useState } from "react"

export  function DataBinding()
{
    const [number] = useState(450000.00);

    const [value] = useState(450000.00);

    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            <p> value = {number.toFixed(4)} </p> 

            {/* USA formatte */}
            <p> value = {value.toLocaleString()} </p> 
            <p> value = {value.toLocaleString('en-in')} </p>
            <p> value = {value.toLocaleString('en-in',{style:'currency', currency:'INR'})} </p>
        </div>
    )
}

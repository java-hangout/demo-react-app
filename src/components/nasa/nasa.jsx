import axios from "axios";
import { useEffect, useState } from "react"


export function Nasa(){

    const [marsObject, setMarsObject] = useState({photos:[]});


    useEffect(()=>{

        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
        .then(response=>{
            setMarsObject(response.data);
        })

    },[])

    return(
        <div className="container-fluid">
            <h3>Mars Rover Photos</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="bi bi-key"> Photo Id</th>
                        <th className="bi bi-camera"> Camera Name </th>
                        <th className="bi bi-rocket"> Rover Name </th>
                        <th className="bi bi-eye"> Preview </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        marsObject.photos.map(item=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.camera.full_name}</td>
                                <td>{item.rover.name}</td>
                                <td><a href={item.img_src} target="_blank"><img src={item.img_src} width="100" height="100" /></a></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
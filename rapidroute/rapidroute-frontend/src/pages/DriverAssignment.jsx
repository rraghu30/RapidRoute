import {useState} from "react"
import API from "../services/api"

export default function DriverAssignment(){

const [driver,setDriver]=useState({
dname:"",
contactno:""
})

const handleChange=(e)=>{

setDriver({...driver,[e.target.name]:e.target.value})

}

const saveDriver=async()=>{

await API.post("/admin/savedriver",driver)

alert("Driver Added")

}

return(

<div className="p-8">

<h1 className="text-2xl font-bold mb-6">
Driver Assignment
</h1>

<input
className="border p-3 rounded mr-4"
placeholder="Driver Name"
name="dname"
onChange={handleChange}
/>

<input
className="border p-3 rounded"
placeholder="Contact Number"
name="contactno"
onChange={handleChange}
/>

<br/>

<button
onClick={saveDriver}
className="mt-4 bg-blue-600 text-white px-6 py-3 rounded"
>

Add Driver

</button>

</div>

)

}
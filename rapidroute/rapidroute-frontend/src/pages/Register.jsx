import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register(){

const navigate = useNavigate();

const [user,setUser] = useState({
name:"",
email:"",
password:""
})

const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
}

const registerUser=()=>{

let users = JSON.parse(localStorage.getItem("users")) || [];

users.push(user);

localStorage.setItem("users",JSON.stringify(users));

alert("Account Created Successfully");

navigate("/login");

}

return(

<div className="min-h-screen bg-gray-200 flex items-center justify-center p-10">

{/* MAIN CARD */}

<div className="bg-white rounded-2xl shadow-xl w-[1200px] h-[650px] flex overflow-hidden">


{/* LEFT PANEL */}

<div className="w-1/2 bg-[#1e8fa6] text-white p-12 flex flex-col justify-between rounded-l-2xl">

<div>

<h1 className="text-3xl font-bold mb-6">
Join RapidRoute Logistics
</h1>

<ul className="space-y-4 text-sm opacity-90">

<li>✔ Manage shipments and logistics operations</li>

<li>✔ Track trucks and carriers in real time</li>

<li>✔ Improve delivery efficiency</li>

</ul>

</div>

<img
src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
alt="truck"
className="w-72 self-center"
/>

</div>


{/* REGISTER FORM */}

<div className="w-1/2 flex items-center justify-center">

<div className="w-80">

<h2 className="text-2xl font-semibold mb-2">
Create Account
</h2>

<p className="text-gray-500 text-sm mb-6">
Register to start managing logistics
</p>


<input
name="name"
placeholder="Full Name"
className="border p-3 w-full rounded mb-4"
onChange={handleChange}
/>


<input
name="email"
placeholder="Email"
className="border p-3 w-full rounded mb-4"
onChange={handleChange}
/>


<input
name="password"
type="password"
placeholder="Password"
className="border p-3 w-full rounded mb-6"
onChange={handleChange}
/>


<button
onClick={registerUser}
className="bg-[#1e8fa6] text-white w-full p-3 rounded-lg hover:bg-[#187e92]"
>
Register
</button>


<p className="text-center text-sm mt-6">

Already have an account?

<span
onClick={()=>navigate("/login")}
className="text-blue-600 ml-2 cursor-pointer"
>
Login
</span>

</p>

</div>

</div>


</div>

</div>

)

}
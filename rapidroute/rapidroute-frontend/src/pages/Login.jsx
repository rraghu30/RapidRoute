import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/auth";

export default function Login(){

const navigate = useNavigate();

const [user,setUser] = useState({
email:"",
password:""
})

const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
}

const loginUser = () => {

let users = JSON.parse(localStorage.getItem("users")) || [];

let validUser = users.find(
u => u.email === user.email && u.password === user.password
);

if(validUser){

login(); // ✅ use auth service

navigate("/dashboard");

}else{

alert("Invalid credentials");

}

}

return(

/* OUTER BACKGROUND CARD */

<div className="min-h-screen bg-gray-200 flex items-center justify-center p-10">


{/* MAIN WHITE CARD */}

<div className="bg-white rounded-2xl shadow-xl w-[1200px] h-[650px] flex overflow-hidden">


{/* LEFT PANEL CARD */}

<div className="w-1/2 bg-[#1e8fa6] text-white p-12 flex flex-col justify-between rounded-l-2xl">

<div>

<h1 className="text-3xl font-bold mb-6">
Welcome aboard your Fleet Management Hub!
</h1>

<ul className="space-y-4 text-sm opacity-90">

<li>✔ Maximize asset utilization and reduce costs</li>

<li>✔ Sync seamlessly with IoT logistics devices</li>

<li>✔ Receive assistance wherever operations go</li>

</ul>

</div>


<img
src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
alt="fleet"
className="w-72 self-center"
/>

</div>



{/* RIGHT LOGIN CARD */}

<div className="w-1/2 flex items-center justify-center">

<div className="w-80">

<h2 className="text-2xl font-semibold mb-2">
Login to your Account
</h2>

<p className="text-gray-500 text-sm mb-6">
Please enter your details to login
</p>


<input
name="email"
placeholder="Email or Phone"
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
onClick={loginUser}
className="bg-[#1e8fa6] text-white w-full p-3 rounded-lg hover:bg-[#187e92]"
>
Login
</button>


<p className="text-center text-sm mt-6">

Don't have an account?

<span
onClick={()=>navigate("/register")}
className="text-blue-600 ml-2 cursor-pointer"
>
Signup Now
</span>

</p>

</div>

</div>


</div>

</div>

)

}
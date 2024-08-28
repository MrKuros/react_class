import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

function Buttons(){
    const [check,SetCheck] = useState("false")
    return (
        <div>
            <button onClick={()=>{SetCheck("true")}}>New User</button>
            <button onClick={()=>{SetCheck("false")}}>Already a User?</button>
            {check==="false"?<LoginForm /> : <SignUp />}
        </div>
    )
}


export default Buttons;
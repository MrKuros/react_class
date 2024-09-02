import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import { BackTop, Alert, Button } from "antd"; 
import Age from "./Age";

function Buttons() {
    const [check, SetCheck] = useState("false")
    return (
        <div>
            <button onClick={() => { SetCheck("true") }}>New User</button>
            <button onClick={() => { SetCheck("false") }}>Already a User?</button>
            {check === "false" ? <LoginForm /> : <SignUp />}
            <div style={{
                height: "600vh",
                padding: 8,
                margin: "auto 20rem"
            }}>
                <Button type="dashed">Primary</Button>
                <Age />
                {/* <div style={{marginTop: '20px'}}>
                    <Alert message="Success Alert" type="success" showIcon></Alert>
                    <Alert message="Info Alert" type="info" showIcon></Alert>
                    <Alert message="Warning Alert" type="warning" showIcon></Alert>
                    <Alert message="Error Alert" type="error" showIcon></Alert>
                </div> */}

                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
            </div>
            <BackTop>
                <div>UP</div>
            </BackTop>
        </div>
    )
}


export default Buttons;
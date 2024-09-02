import { Alert, Button } from "antd";
import { useState } from "react";

function Age() {
    const [state, setState] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    const [check, setCheck] = useState(false);

    function handleClick() {
        setCheck(true);
        const ageNumber = Number(age);
        if (ageNumber > 18) {
            setState("success");
            setMessage("You are eligible as your age is more than 18");
        } else if(ageNumber===18){
            setState("info");
            setMessage("You are eligible but your age is exactly 18");
        } 
        
        else if (ageNumber > 0 && ageNumber < 18) {
            setState("warning");
            setMessage("You are not eligible as your age is less than 18");
        } else {
            setState("error");
            setMessage("Invalid age entered");
        }
    }

    return (
        <div>
            <form className="" action="" method="post">
                <div className="container">
                    <label htmlFor="uname"><b>Age</b></label>
                    <input
                        type="number"
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter Age"
                        name="uname"
                        required
                    />
                    <Button type="button" onClick={handleClick}>Submit</Button>
                </div>
            </form>
            {check && <Alert message={message} type={state} showIcon />}
        </div>
    );
}

export default Age;

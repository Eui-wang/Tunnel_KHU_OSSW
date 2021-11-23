import React, { useState } from "react";
import "../style/RegisterPage.scss";
import { Icon, Input } from "semantic-ui-react"

function RegisterPage() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onIdHandler = (event) => {
        setEmail(event.currentTarget.value);
    };
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Email",Email);
        console.log("Password", Password);
    };
    return (
        <div id="body">
            <div className="register-form">
                <form onSubmit={onSubmitHandler}>
                    <h1>Tunnel</h1>
                    <div className="input-area">
                        <Input
                            icon={<Icon name='at'/>}
                            iconPosition='left'
                            placeholder="Email"
                            type="text"
                            value={Email}
                            autoComplete="off"
                            onChange={onIdHandler}/>
                    </div>
                    <div className="input-area">
                        <Input
                            icon={<Icon name='lock'/>}
                            iconPosition='left'
                            placeholder="Password"
                            type="password"
                            value={Password}
                            autoComplete="off"
                            onChange={onPasswordHandler}/>
                    </div>
                    <div className="btn-area">
                        <button className="register-btn" >Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;

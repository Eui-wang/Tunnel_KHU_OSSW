import React, { useState } from "react";
import "../style/LoginPage.scss";

function LoginPage() {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Id", Id);
        console.log("Password", Password);
    };
    return (
        <div id="body">
            <div className="login-form">
                <form onSubmit={onSubmitHandler}>
                    <h1>Tunnel</h1>
                    <div className="input-area">
                        <input type="id" value={Id} autoComplete="off" onChange={onIdHandler} />
                        <label htmlFor="id">USER ID</label>
                    </div>
                    <div className="input-area">
                        <input
                            type="password"
                            value={Password}
                            onChange={onPasswordHandler}
                        />
                        <label htmlFor="password">USER PASSWORD</label>
                    </div>
                    <div className="btn-area">
                        <button >Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;

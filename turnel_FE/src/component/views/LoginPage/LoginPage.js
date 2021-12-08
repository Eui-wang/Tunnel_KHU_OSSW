import React, {useState} from "react";
import "../style/LoginPage.scss";
import Axios from 'axios'
import { Icon, Input } from "semantic-ui-react"
import { useNavigate } from "react-router-dom";
function LoginPage() {
    let navigate = useNavigate();
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
        console.log("ID", Id);
        console.log("Password", Password);
        Axios.post('/api/login',{
            Id, 
            Password,
        })
        .then((res)=>{
            if(res.status === 200){
                alert("성공적으로 로그인하였습니다.")
                navigate('/main')
            }
        }).catch((error) => {
            if(error.response.data === 'idError'){
                alert("존재하지 않는 아이디입니다.")
            }
            else if(error.response.data === 'pwError'){
                alert("잘못된 비밀번호입니다.")
            }    
        })
    };
    const goToRegister = () => {
        navigate('/register');
    }
    return (
        <div id="body">
            <div className="login-form">
                <form onSubmit={onSubmitHandler}>
                    <h1>Tunnel</h1>
                    <div className="input-area">
                        <Input
                            icon={<Icon name='at'/>}
                            iconPosition='left'
                            placeholder="ID"
                            type="text"
                            value={Id}
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
                        <button className="login-btn" >Login</button>
                        <button className="register-btn" onClick={()=>goToRegister()} >Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default LoginPage;
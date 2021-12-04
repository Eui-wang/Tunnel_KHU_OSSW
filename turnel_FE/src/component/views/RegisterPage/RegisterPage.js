import React, {useState} from "react";
import "../style/RegisterPage.scss";
import { Button, Icon, Input } from "semantic-ui-react";
import {useDispatch} from "react-redux";
import { registerUser } from '../../../_actions/user_action'

function RegisterPage(props) {
    const dispatch = useDispatch();
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordCheck,setPasswordCheck] = useState("");
    const [Personality, setPersonality] = useState("");

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };
    const onPersonalityHandler = (event) => {
        setPersonality(event.currentTarget.value);
    };
    const onPasswordChkHandler = (event) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordCheck(event.currentTarget.value);
    };
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("ID", Id);
        console.log("Password", Password);
        console.log("MBTI", Personality);
        if (Password !== PasswordCheck) {
            return alert('비밀번호가 일치하지 않습니다.')
        }
        let body = {
            id: Id,
            password: Password,
            personality: Personality
        }
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.registerSuccess) {
                    props.history.push('/login')
                } else {
                    alert('Failed to sign up')
                }
            })
    }
    return (
        <div id="Register">
            <div className="register-form">
                <form onSubmit={onSubmitHandler}>
                    <h1>Tunnel</h1>
                    <div className="input-area">
                        <Input
                            icon={<Icon name="id badge"/>}
                            iconPosition='left'
                            placeholder="ID"
                            type="text"
                            value={Id}
                            autoComplete="off"
                            required onChange={onIdHandler}/>
                    </div>
                    <div className="input-area">
                        <Input
                            icon={<Icon name='heart'/>}
                            iconPosition='left'
                            placeholder="Your MBTI"
                            type="text"
                            value={Personality}
                            autoComplete="off"
                            onChange={onPersonalityHandler}/>
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
                    <div className="input-area">
                        <Input
                            icon={<Icon name='check'/>}
                            iconPosition='left'
                            placeholder="Check your Password"
                            type="password"
                            value={PasswordCheck}
                            autoComplete="off"
                            onChange={onPasswordChkHandler}/>
                    </div>
                    <div className="btn-area" >
                        <Button className='register-btn'
                                content='Sign up'
                                icon='signup'
                                size='small'/>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default RegisterPage;

import React, {useCallback, useState} from "react";
import "../style/RegisterPage.scss";
import { Form, Message, Button, Icon, Input } from "semantic-ui-react";
import backgroundImg from "../images/register_background.png";

function RegisterPage() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordCheck,setPasswordCheck] = useState("");
    const [Personality, setPersonality] = useState("");
    const [PasswordError,setPasswordError] = useState(false);

    const onIdHandler = (event) => {
        setEmail(event.currentTarget.value);
    };
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };
    const onPersonalityHandler = (event) => {
        setPersonality(event.currentTarget.value);
    };
    const onPasswordChkHandler = useCallback((event) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordCheck(event.currentTarget.value);
    },[PasswordCheck]);
    const onSubmitHandler = useCallback((event) => {
        event.preventDefault();
        if(Password !== PasswordCheck){
            return setPasswordError(true);
        }
        else{
            return setPasswordError(false);
        }
        console.log("Email",Email);
        console.log("Password", Password);
    },[Password,PasswordCheck]);

    return (
        <div id="Register">
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
                            required onChange={onIdHandler}/>
                    </div>
                    <div className="input-area">
                        <Input
                            icon={<Icon name='lock'/>}
                            iconPosition='left'
                            placeholder="Password"
                            type="password"
                            value={Password}
                            autoComplete="off"
                            onChange={onPasswordHandler}
                            onFocus={()=>setPasswordError(false)}/>
                        {PasswordError &&
                        <Form error>
                            <Message
                                error
                                header='Action Forbidden'
                                content='You can only sign up for an account once with a given e-mail address.'
                            />
                            <Button>Submit</Button>
                        </Form>
                        }
                    </div>
                    <div className="input-area">
                        <Input
                            icon={<Icon name='check'/>}
                            iconPosition='left'
                            placeholder="Check your Password"
                            type="password"
                            value={PasswordCheck}
                            autoComplete="off"
                            onChange={onPasswordChkHandler}
                        onFocus={()=>setPasswordError(false)}/>

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
                    <div className="btn-area" >
                        <Button className='register-btn'
                                content='Sign up'
                                icon='signup'
                                size='small'
                                iconPosition='left'/>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default RegisterPage;

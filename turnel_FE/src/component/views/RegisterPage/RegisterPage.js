import React, {useCallback, useState} from "react";
import "../style/RegisterPage.scss";
import { Button, Icon, Input } from "semantic-ui-react";

function RegisterPage() {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordCheck,setPasswordCheck] = useState("");
    const [Personality, setPersonality] = useState("");
    const [PasswordError,setPasswordError] = useState(false);

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
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
        console.log("ID", Id);
        console.log("Password", Password);
        console.log("MBTI", Personality);
        if(Password !== PasswordCheck){
            return setPasswordError(true);
        }
        else{
            return setPasswordError(false);
        }
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
                            onChange={onPasswordHandler}
                            onFocus={()=>setPasswordError(false)}/>
                        {PasswordError &&
                        <div>비밀번호 오류</div>
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

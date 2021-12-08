import React, {useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function (SpecificComponent) {
    // option
    // null ->  아무나 출입, true -> 로그인한 유저만 출입, false -> 로그인한 유저는 출입 불가능
    function AuthenticationCheck() {
        let navigate = useNavigate();
        useEffect(() => {
            Axios.get('/api/auth')
            .then((res)=>{
                if(res.status === 200){
                    navigate('/main')
                }
            }).catch((error) => {
                console.log(error.response);
                alert('로그인이 필요합니다!');
                navigate('/login');
            })
        }, [])
        
        return (
            <SpecificComponent/>
        )
    }
    return <AuthenticationCheck />
}
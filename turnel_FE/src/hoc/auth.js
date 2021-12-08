import React, {useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function (SpecificComponent, option, adminRoute = null) {
    // option
    // null ->  아무나 출입, true -> 로그인한 유저만 출입, false -> 로그인한 유저는 출입 불가능
    function AuthenticationCheck() {
        let navigate = useNavigate();
        useEffect(() => {
            Axios.get('/api/auth')
            .then((res)=>{
                if(res.status === 200 && adminRoute){
                    navigate('/main')
                }
                else{
                    if(option === false){
                        navigate('/main')
                    }
                }
            }).catch((error) => {
                if(option){
                    navigate('/login')
                }
            })
        }, [])
        
        return (
            <SpecificComponent/>
        )
    }
    return <AuthenticationCheck />
}
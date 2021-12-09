import {Button} from "semantic-ui-react"
import Axios from'axios'
import "../style/MainPage.scss";
import { useNavigate } from "react-router-dom";
import Board from "../Board/Board"
import React from "react";
import BoardModal from "../Modal/BoardModal";

function MainPage(props) {
    const navigate = useNavigate();
    const onLogout = () => {
        Axios.post('/api/logout')
        .then((res)=>{
            if(res.status === 200){
                alert("성공적으로 로그아웃하였습니다.")
                navigate('/login')
            }
        })    // App 으로 이동(새로고침)
    }
    return (
        <div id="Main">
            <div className="Main-header">
                <div className="wrapper">
                    <div className="title">
                        <h1 style={{color: 'white'}}>"말하기 어려운 고민 여기에 털어놓으세요 :)"</h1>
                    </div>
                    <div className="None-title">
                        <Button className="ui right floated button" onClick={()=>onLogout()}>
                            Logout
                        </Button>
                    </div>
                </div>
                <div className="write-btn">
                    <BoardModal/>
                </div>
            </div>
            <div className="Main-body">
                <Board/>
            </div>
        </div>
    );
}
export default MainPage;
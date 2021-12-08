import {Button} from "semantic-ui-react"
import Axios from'axios'
import "../style/MainPage.scss";
import { useNavigate } from "react-router-dom";
import Board from "../Board/Board"
import React from "react";

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
                <div className="title">
                    <h1>"말하기 어려운 고민 여기에 털어놓으세요 :)"</h1>
                </div>
                <div className="None-title">
                    <Button className="ui right floated button" onClick={()=>onLogout()}>
                        Logout
                    </Button>
                </div>
            </div>
            <div className="Main-body">
                <Board/>
                {/* <div className="user-container">
                    <div className="userInfo">
                        <h1>User ID</h1>
                    </div>
                    <div className="checkIssue-button">
                        <Button className="ui animated button"
                                tabIndex="0">
                            <div className="visible content">도착한 글</div>
                            <div className="hidden content">
                                <i className="paper plane icon"></i>
                            </div>
                        </Button>
                    </div>
                    <div className="user">
                        <div className="Answer">
                            <div className="ui segment">
                                <p>a</p>
                            </div>
                            <div className="ui segment">
                                <p>a</p>
                            </div>
                            <div className="ui segment">
                                <p>a</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
export default MainPage;
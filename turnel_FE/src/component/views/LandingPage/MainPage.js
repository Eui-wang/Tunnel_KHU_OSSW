import {Button, Grid, Image, Segment} from "semantic-ui-react"
import "../style/MainPage.scss";
function MainPage() {
    return (
        <div id="Main">
            <div className="Main-header">
                <div className="title">
                    <h1>Tunnel</h1>
                </div>
                <div className="None-title">
                    <Button className="ui right floated button">
                        Logout
                    </Button>
                </div>
            </div>
            <div className="Main-body">
                <div className="contents-container">
                    <div className="write-button">
                        <Button className="ui animated button"
                                tabIndex="0">
                            <div className="visible content">새 고민 작성하기</div>
                            <div className="hidden content">
                                <i className="pencil alternate icon"></i>
                            </div>
                        </Button>
                    </div>
                    <div className="contents">
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
                <div className="user-container">
                    <div className="userInfo">
                        <h1>User ID</h1>
                    </div>
                    <div className="checkIssue-button">
                        <Button size="Big" className="ui animated button"
                                tabIndex="0">
                            <div className="visible content">도착한 글</div>
                            <div className="hidden content">
                                <i className="pencil alternate icon"></i>
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
                </div>
            </div>
        </div>
    );
}

export default MainPage;

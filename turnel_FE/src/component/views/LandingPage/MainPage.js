import { Button, Input } from "semantic-ui-react"
import "../style/MainPage.scss";
function MainPage() {
    return (
        <div id="Main">
            <div className="Main-header">
                <div className="title">
                    <h1>Tunnel</h1>
                </div>
                <div className="None-title">
                    <Button class="ui button">
                        Logout
                    </Button>
                </div>
            </div>
            <div className="Main-body">
                <div className="contents">
                    <h1>a</h1>
                </div>
                <div className="user">
                    <h1>a</h1>
                </div>
            </div>
        </div>
    );
}

export default MainPage;

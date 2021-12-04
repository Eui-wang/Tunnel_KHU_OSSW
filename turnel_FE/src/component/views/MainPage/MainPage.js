import {Button} from "semantic-ui-react"
import "../style/MainPage.scss";
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function MainPage() {
    const navigate = useNavigate();
    const goToLogin = () =>{
        navigate('/login');
    }
    return (
        <div id="Main">
            <div className="Main-header">
                <div className="title">
                    <h1>Tunnel</h1>
                </div>
                <div className="None-title">
                    <Button className="ui right floated button" onClick={()=>goToLogin()}>
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
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Hello from CKEditor 5!</p>"
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
                                }}
                                onBlur={(event, editor) => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log('Focus.', editor);
                                }}
                            />
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
                                <i className="paper plane ic    on"></i>
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

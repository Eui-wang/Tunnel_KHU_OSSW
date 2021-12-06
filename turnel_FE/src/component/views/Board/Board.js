import React, {useCallback, useState} from 'react';
import '../style/Board.scss'
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {Button} from "semantic-ui-react";
import ReactHtmlParser from 'react-html-parser';
import BoardModal from "../Modal/BoardModal";

function Board() {
    const [viewContent,setViewContent] = useState([]);
    const onViewContentHandler = (data) => {
        setViewContent((viewContent.concat({...data})))
    }
    return (
        <div className="Board">
            <div className="contents-container">
                {viewContent.map(element =>
                    <div className="contents" >
                        <h2>{element.title}</h2>
                        <div>
                            {ReactHtmlParser(element.content)}
                        </div>
                    </div>
                )}
            </div>
            <div className="write-button">
                <BoardModal viewContent = {viewContent} onViewContentHandler={onViewContentHandler}/>
            </div>
        </div>

    );
};

export default Board;
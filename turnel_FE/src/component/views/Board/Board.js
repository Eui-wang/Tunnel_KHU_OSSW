<<<<<<< HEAD
import React, {useState} from 'react';
import '../style/Board.scss'
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {Button} from "semantic-ui-react";
import ReactHtmlParser from 'react-html-parser';

function Board() {
    const [BoardContent, setBoardContent] = useState({
        title: '',
        content:''
    })
    const [viewContent,setViewContent] = useState([]);
    const getValue = e => {
        const {name, value} = e.target;
        setBoardContent({
            ...BoardContent,
            [name]: value
        })
        console.log(BoardContent);
    }
    return (
        <div className="Board">
            <div className="contents-container">
                {viewContent.map(element =>
                    <div>
=======
import React, { useState} from 'react';
import '../style/Board.scss'
import ReactHtmlParser from 'react-html-parser';
import BoardModal from "../Modal/BoardModal";

function Board() {
    const [viewContent,setViewContent] = useState([]);
    const onViewContentHandler = (data) => {
        setViewContent((viewContent.concat({...data})))
    }
    return (
        <div className="Board">
            <div className="write-button">
                <BoardModal onViewContentHandler={onViewContentHandler}/>
            </div>
            {viewContent.map(element =>
                    <div class="ui segment">
>>>>>>> board
                        <h2>{element.title}</h2>
                        <div>
                            {ReactHtmlParser(element.content)}
                        </div>
<<<<<<< HEAD
                    </div>)
                }
            </div>
            <div className="form=wrapper">
                <input className="title-input"
                       type='text'
                       placeholder='제목'
                       onChange={getValue}
                       name = 'title'
                />
                <CKEditor
                    editor={ClassicEditor}
                    data=""
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setBoardContent({
                            ...BoardContent,
                            content: data
                        })
                        console.log(BoardContent);
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
                <div className="write-button">
                    <Button className="ui animated button"
                            tabIndex="0"
                            onClick={() =>{
                                setViewContent(viewContent.concat({...BoardContent}));
                            }}
                    >
                        <div className="visible content">새 고민 작성하기</div>
                        <div className="hidden content">
                            <i className="pencil alternate icon"></i>
                        </div>
                    </Button>
                </div>
            </div>
=======
                    </div>
                )}
>>>>>>> board
        </div>

    );
};

export default Board;
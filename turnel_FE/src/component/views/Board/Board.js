
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

                        <h2>{element.title}</h2>
                        <div>
                            {ReactHtmlParser(element.content)}
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Board;
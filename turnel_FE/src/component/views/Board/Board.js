import Axios from 'axios';
import React, { useState, useEffect} from 'react';
import '../style/Board.scss'
import ReactHtmlParser from 'react-html-parser';
import BoardModal from "../Modal/BoardModal";

function Board() {
    const [viewContent,setViewContent] = useState([]);
    
    useEffect(()=>{
        Axios.get('/api/post').then((response)=>{
          //console.log(response.data);
            setViewContent(response.data);
        })
      },[viewContent])
    return (
        <div className="Board">
            <div className="write-button">
                <BoardModal/>
            </div>
            <div className="contents">
             {viewContent&&viewContent.map(element =>{
                return <div className="ui segment">
                            <h2>{element.title}</h2>
                            <div>
                                {ReactHtmlParser(element.post)}
                            </div>
                        </div>}
                    )} 
            </div>
        </div>
    );
};

export default Board;

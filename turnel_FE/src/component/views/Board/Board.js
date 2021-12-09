import Axios from 'axios';
import React, { useState, useEffect} from 'react';
import '../style/Board.scss'
import ReactHtmlParser from 'react-html-parser';
import BoardModal from "../Modal/BoardModal";
import ContentModal from '../Modal/ContentModal';

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
                            <h4>{element.created_at.slice(0,10)+" " +element.created_at.slice(11,16)}</h4>
                            <ContentModal element={element}/>
                        </div>}
                    )} 
            </div>
        </div>
    );
};

export default Board;

import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import ReactHtmlParser from 'react-html-parser';
import { Button, Modal, Comment, Form } from 'semantic-ui-react'
import '../style/ContentModal.scss'

function ContentModal({element}) {
    const [viewComment,setviewComment] = useState([]);
    useEffect(()=>{
        Axios.post('/api/comment/reply',{id : element.id}).then((response)=>{
            setviewComment(response.data);
        })
      },[viewComment])

    const handleClose = (event) => {
        event.preventDefault();
        setOpen(false);
    }
    const [open, setOpen] = useState(false)
    const [BoardComment, setBoardComment] = useState('')
    const onCommentHandler = (event) => {
        setBoardComment(event.currentTarget.value)
        console.log(BoardComment)
    }
    const onSubmitHandler = () => { 
        Axios.post('/api/comment/write',{
                postid: element.id,    
                comment: BoardComment
                })
                .then((res)=>{
                    if(res.status === 200){
                        alert("댓글 작성을 완료하였습니다.")
                        setOpen(false);
                    }
                }).catch((error) => {
                    console.log(error.response)
                    alert("댓글 작성을 실패하였습니다.")
                })
            }
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button basic color='purple' className="ui floated button" tabIndex="0">
                보기
            </Button>}
        >
            <Modal.Header><h2>{element.title}</h2></Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <div className="problems">
                        {ReactHtmlParser(element.post)}
                    </div>
                </Modal.Description>
            </Modal.Content>
            <Modal.Content>
                {viewComment&&viewComment.map(elem =>{  
                    return <div className="ui segment">
                                <h4>{elem.userid}</h4>
                                 <h4>{elem.comment}</h4>
                            </div>}
                        )}
            </Modal.Content>
            <Modal.Actions>
                <Comment>
                <Form reply>
                    <Form.TextArea value={BoardComment} onChange={onCommentHandler}/>
                        <Button content='댓글 남기기' onClick={onSubmitHandler} labelPosition='left' icon='edit' primary />
                        <Button onClick={handleClose} color='black'>닫기</Button>
                </Form>
                </Comment>
            </Modal.Actions>
        </Modal>
    )
}
export default ContentModal
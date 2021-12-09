import React, {useState} from 'react'
import Axios from 'axios'
import { Button, Modal } from 'semantic-ui-react'
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


function BoardModal() {
    const handleClose = (event) => {
        event.preventDefault();
        setOpen(false);
    }
    const [open, setOpen] = useState(false)
    const [BoardContent, setBoardContent] = useState({
        title: '',
        content:'',
    })
    const getValue = e => {
        const {name, value} = e.target;
        setBoardContent({
            ...BoardContent,
            [name]: value
        })
        console.log(BoardContent);
    }
    const onSubmitHandler = () => {
        Axios.post('/api/post',{
                    title: BoardContent.title,
                    content: BoardContent.content,
                })
                .then((res)=>{
                    if(res.status === 200){
                        alert("게시글 작성을 완료하였습니다.")
                    }
                }).catch((error) => {
                    console.log(error.response)
                    alert("게시글 작성을 실패하였습니다.")
                })
        // console.log("ID", Id);
        // console.log("Password", Password);
        // console.log("MBTI", Personality);
        // if (Password !== PasswordCheck) {
        //     return alert('비밀번호가 일치하지 않습니다.')
        // }
        // else{
        //     
        // }
    }
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button className="ui right floated button" tabIndex="0" >
                게시글 작성하기
            </Button>}  
        >
            <Modal.Header>고민이 있나요?</Modal.Header>
            <Modal.Content >
                <Modal.Description>
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
                                    content: data,
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
                    </div>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
            <div onClick={handleClose}>
                        <Button color='black'>
                            작성 취소
                        </Button>
                            <Button
                                content="글 작성하기"
                                labelPosition='right'
                                icon='checkmark'
                                onClick={onSubmitHandler}
                                positive
                            />  
                    </div>
            </Modal.Actions>
        </Modal>
    )
}

export default BoardModal
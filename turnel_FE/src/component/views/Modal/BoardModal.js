import React, {useState} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function BoardModal({viewContent, onViewContentHandler}) {
    const handleClose = (event) => {
        event.preventDefault();
        setOpen(false);
    }
    const [open, setOpen] = useState(false)
    const [BoardContent, setBoardContent] = useState({
        title: '',
        content:''
    })
    const getValue = e => {
        const {name, value} = e.target;
        setBoardContent({
            ...BoardContent,
            [name]: value
        })
        console.log(BoardContent);
    }
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button className="ui animated button" tabIndex="0">
                <div className="visible content">게시글 작성하기</div>
                <div className="hidden content">
                    <i className="pencil alternate icon"></i>
                </div>
            </Button>}
        >
            <Modal.Header>고민이 있나요?</Modal.Header>
            <Modal.Content content>
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
                        onClick={()=> onViewContentHandler(BoardContent)}
                        positive
                    />
                </div>
            </Modal.Actions>
        </Modal>
    )
}

export default BoardModal
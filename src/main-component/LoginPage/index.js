import React, { useRef, useState } from 'react';
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import AttachmentsData from '../../components/uplodimage'
import Col from "antd/es/col"
import Form from "antd/es/form"
import Row from "antd/es/row"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

import './style.scss';
import { Card, Input, message } from 'antd';
import { convertToRaw, EditorState } from 'draft-js';
import axios from 'axios';

const LoginPage = (props) => {
    const [file, setFile] = useState(undefined);
    const [Imagesfiles, setImagesFiles] = useState([])
    const [video, setVideo] = useState([])
    const [value, setValue] = useState();
    const [addForm] = Form.useForm();
    const editorRef = useRef(null)
    const imageHandler = (event) => {
        let file = event.target.value.substring(event.target.value.lastIndexOf('\\') + 1);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                var res = reader.result + "";
                const addedFile = {
                    ATTACHMENT_ID: null,
                    FILE_NAME: file.split('.')[0],
                    ORIGINAL_FILE_NAME: file,
                    FILE_TYPE: file.split('.')[1],
                    FILE_B64: res.split(",")[1],
                    FILE_BASE64: res.split(",")[1],
                    status: "done"
                };
                const newFiles = [...Imagesfiles];
                newFiles.push(addedFile)
                setImagesFiles(newFiles);
            }
        }
        reader.readAsDataURL(event.target.files[0]);
    }
    const videoHandler = (event) => {
        let file = event.target.value.substring(event.target.value.lastIndexOf('\\') + 1);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                var res = reader.result + "";
                const addedFile = {
                    ATTACHMENT_ID: null,
                    FILE_NAME: file.split('.')[0],
                    ORIGINAL_FILE_NAME: file,
                    FILE_TYPE: file.split('.')[1],
                    FILE_B64: res.split(",")[1],
                    FILE_BASE64: res.split(",")[1],
                    status: "done"
                };
                const newFiles = [...video];
                newFiles.push(addedFile)
                setVideo(newFiles);
            }
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    const onFinish = () => {
        console.log(value);
        const data = {
            CONTENT: value,
            TITLE: addForm.getFieldValue("TITLE"),
            BRIEF: addForm.getFieldValue("BRIEF"),
            AUTHOR: addForm.getFieldValue("AUTHOR"),
            NewAttachments: [...Imagesfiles, ...video],

        }
        axios.post('https://localhost:44387/api/News/AddNew', data)
            .then((res) => {
                message.success('تم إضافه الخبر بنجاح')
            })
            .catch((err) => {
                message.error('فشل في إضافه الخبر الرجاء التحقق من البيانات المدخلة')
            })
    }



    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "24px", backgroundColor: "#ebfcfa" }}>
            <Card style={{ width: "100%", boxShadow: "0 16px 32px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <Row style={{ width: "100%", backgroundColor: "rgb(40 212 133)", padding: "0px 0px", justifyContent: "center" }}>
                    <span style={{ fontSize: "16px", fontWeight: "bold", padding: "8px", textAlign: "center" }}><h2>اضافة خبر</h2></span>
                </Row>
                <Row style={{ width: "100%", marginTop: "24px", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <Form className='w-50 d-flex' style={{ flexDirection: "column", alignItems: "center" }} form={addForm}
                        onFinish={onFinish}>
                        <Form.Item
                            name="TITLE"
                            className='input-field'
                            rules={[
                                {
                                    required: true,
                                    message: 'حقل العنوان مطلوب',
                                },
                            ]} >
                            <Input placeholder="ادخل العنوان هنا" />
                        </Form.Item>
                        <Form.Item
                            name="BRIEF"
                            className='input-field'>
                            <Input placeholder="ادخل الوصف هنا" />
                        </Form.Item>
                        <Form.Item
                            name="AUTHOR"
                            className='input-field' >
                            <Input placeholder="ادخل اسم الناشر هنا" />
                        </Form.Item>
                        <Form.Item>
                            <Editor
                                ref={editorRef}
                                style={{ border: "1px solid lightgray" }}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onChange={(content) => {
                                    setValue(draftToHtml(content))
                                }}
                            />
                        </Form.Item>
                        <Form.Item style={{ width: "100%" }}
                            name="NewAttachments">
                            <label htmlFor='FILE-input' style={{ width: "120px", height: "40px", color: "white", backgroundColor: "#24A69D", textAlign: "center", marginLeft: "16px", display: "inline-flex", justifyContent: "center", alignItems: "center" }}>{'addAttachments'}</label>
                            <input hidden={true} type="file" name="upload-image" id="FILE-input" accept="image/*" onChange={imageHandler} />
                            <AttachmentsData language={""} labels={[]} screenFields={[]} files={Imagesfiles} setFiles={setImagesFiles} />
                        </Form.Item>
                        <Form.Item style={{ width: "100%" }}
                            name="NewAttachments2">
                            <label htmlFor='upload-vedio' style={{ width: "120px", height: "40px", color: "white", backgroundColor: "#24A69D", textAlign: "center", marginLeft: "16px", display: "inline-flex", justifyContent: "center", alignItems: "center" }}>{'video'}</label>
                            <input hidden={true} type="file" name="upload-vedio" multiple="false" id="upload-vedio" accept="video/*" onChange={videoHandler} />
                            <AttachmentsData language={""} labels={[]} screenFields={[]} files={video} setFiles={setVideo} />
                        </Form.Item>
                        <Form.Item htmltype="submit">
                            <Button onClick={onFinish} style={{ width: "90px", height: "40px", fontSize: "16px", fontWeight: "bold", backgroundColor: "rgb(40 212 133)", borderRadius: "6px", color: "white" }}>حفظ</Button>
                        </Form.Item>
                    </Form>
                </Row>
            </Card>
        </div>
    )
};

export default withRouter(LoginPage);
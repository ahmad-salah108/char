import { CloseOutlined, DownloadOutlined, EyeOutlined, SmileOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Image, List, Modal, Row, Tooltip } from 'antd';
import { base64StringToBlob } from 'blob-util';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import mime from "mime";
// import { rhodesclaims } from '../../../axios_instance';
import Empty from 'antd/es/empty';
const AttachmentsData = ({ language, labels, screenFields, files, setFiles}) => {

console.log(files);
  const downloadFileObj = (fileName, file) => {
    const url = window.URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
}
    // const { t } = useTranslation();
    const imagesTypes = ["jpg", "jpeg", "png", "gif"]
    const [visible, setVisible] = useState(false);
    const [source, setSource] = useState("");
    const onShow = (file) => {
        setSource(`data:image/${file.FILE_TYPE};base64,${file.FILE_BASE64}`)
        setVisible(true)
    }
    const downloadFile = (file) => {
        if (file.FILE_BASE64) {
            const fileName = file.ORIGINAL_FILE_NAME;
            const contentType = mime.getType(fileName)
            const base64 = file.FILE_BASE64;
            const fileObj = base64StringToBlob(base64, contentType)
            downloadFileObj(fileName, fileObj)
        }
    }
    const onRemove = (index) => {
        files.splice(index, 1)
        setFiles(files)
    }
    return <div>

        {files && files.length > 0 ?
            <List
                itemLayout="horizontal"
                style={{ width: "100%" }}
                dataSource={files}
                renderItem={(item, index) => (
                    <List.Item
                        actions={[<Row style={{ width: "200px" }}>
                            <Col style={{ width: "100%" }} >
                                <Row className='w-100'>
                                    <Col className='mx-2' style={{ width: "20%" }}>
                                        <Tooltip title={"Download"}>
                                            <DownloadOutlined style={{ fontSize: "18px", cursor: "pointer", color: "#000000" }} onClick={() => {
                                                downloadFile(item)
                                            }} />
                                        </Tooltip>
                                    </Col>
                                    
                                    {
                                        imagesTypes.includes(item["FILE_TYPE"].toString()) ?
                                            <Col className='mx-2' style={{ width: "20%" }}>
                                                <Tooltip title={'Show'}>
                                                    <EyeOutlined style={{ fontSize: "18px", cursor: "pointer", color: "#47a4f4" }} onClick={() => {
                                                        onShow(item)
                                                    }} />
                                                </Tooltip>
                                            </Col> : <></>
                                    }
                                    <Col className='mx-2' style={{ width: "20%" }}>
                                        <Tooltip title={'Delete'}>
                                            <CloseOutlined style={{ fontSize: "18px", cursor: "pointer", color: "#eb0000" }} onClick={() => {
                                                onRemove(index)
                                            }} />
                                        </Tooltip>
                                    </Col> : <></>
                                </Row>
                            </Col>
                        </Row>]}
                    >
                        <List.Item.Meta
                            style={{
                                width: "100%"
                            }}
                            description={<>
                                <Row className='w-100' style={{ display: "flex", flexDirection: "row", fontFamily: "Tajawal", fontSize: "14px", color: "black" }}
                                >
                                    <Row style={{ width: "10%" }}>
                                        {index + 1}
                                    </Row>
                                    <Row style={{ width: "90%" }}>
                                        {item["ORIGINAL_FILE_NAME"]}
                                    </Row>
                                </Row>
                            </>}
                        />

                    </List.Item>

                )}
            /> : <Card className='d-flex justify-content-center align-items-center'>
                <div style={{ textAlign: 'center' }}>
                    <Empty description={false} />
                    <p>{'NoAttachment'}</p>
                </div>
            </Card>}

        <Image
            width={200}
            style={{ display: 'none' }}
            src={source}
            preview={{
                visible,
                src: source,
                onVisibleChange: value => {
                    setVisible(value);
                },
            }}
        />
    </div>
}

export default AttachmentsData;
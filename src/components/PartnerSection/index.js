import React, { useState } from 'react';
import { Card, Button, Form, Input, Row, DatePicker, notification, message } from 'antd';
import moment from 'moment'
import { local } from '../../axios_instances.jsx';
import axios from 'axios';



const SignToUs = () => {
    const openNotificationWithIcon = (type, title, desc) => {
        notification[type]({
            message: title,
            description: desc,
        });
    };

    const [addForm] = Form.useForm();
    const onFinish = () => {
        const data = {
            ...addForm.getFieldsValue(),
            DATE_OF_BIRTH: moment(addForm.getFieldValue("DATE_OF_BIRTH")).format("DD/MM/YYYY")
        }
        axios.post(`https://localhost:44387/api/News/addSignRequest`, data)
            .then((res) => {
                message.success('تمت عمليه التوقيع على المبادرة بنجاح')
            })
            .catch((err) => {
                message.error('فشل التوقيع على المبادرة الرجاء التحقق من البيانات')
            })
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "24px", backgroundColor: "#ebfcfa" }}>
            <Card style={{ width: "60%", boxShadow: "0 16px 32px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <Row style={{ width: "100%", backgroundColor: "rgb(40 212 133)", padding: "0px 0px", justifyContent: "center" }}>
                    <span style={{ fontSize: "16px", fontWeight: "bold", padding: "8px", textAlign: "center" }}>التوقيع على المبادرة</span>
                </Row>
                <Row style={{ width: "100%", marginTop: "24px", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <Form className='w-50 d-flex' style={{ flexDirection: "column", alignItems: "center" }} form={addForm}
                        onFinish={onFinish}>
                        <Form.Item
                            name="SIGNER_NAME"
                            className='input-field' fieldId='SIGNER_NAME'
                            rules={[
                                {
                                    required: true,
                                    message: 'حقل اسم الموقع مطلوب',
                                },
                            ]} >
                            <Input placeholder="ادخل الاسم هنا" />
                        </Form.Item>
                        <Form.Item
                            name="SIGNER_ID"
                            className='input-field' fieldId='SIGNER_ID'
                            rules={[
                                {
                                    required: true,
                                    message: 'حقل رقم هوية الموقع مطلوب',
                                },
                                {
                                    max: 9,
                                    min: 9,
                                    message: 'رقم الهوية يجب ان يكون من 9 أرقام',

                                }
                            ]}>
                            <Input placeholder="ادخل رقم الهوية هنا" type='number' />
                        </Form.Item>
                        <Form.Item
                            name="EMAIL"
                            className='input-field' fieldId='EMAIL'
                            rules={[
                                {
                                    required: true,
                                    message: 'حقل البريد الالكتروني خاص بالموقع مطلوب',
                                },
                                {
                                    type: 'email',
                                    message: 'الرجاء ادخال بريد الكتروني صحيح',
                                },
                            ]}>
                            <Input placeholder="ادخل الايميل هنا" />
                        </Form.Item>
                        <Form.Item
                            name="PHONE_NUMBER"
                            className='input-field' fieldId='PHONE_NUMBER'
                            rules={[
                                {
                                    required: true,
                                    message: 'حقل هاتف المحمول مطلوب',
                                },
                            ]}>
                            <Input placeholder="ادخل رقم الهاتف المحمول هنا" type='number' />
                        </Form.Item>
                        <Form.Item
                            name="DATE_OF_BIRTH"
                            className='input-field' fieldId='DATE_OF_BIRTH'
                            rules={[
                                {
                                    required: true,
                                    message: 'حقل تاريخ الميلاد مطلوب',
                                },
                            ]}>
                            <DatePicker placeholder="ادخل تاريخ الميلاد هنا" style={{ width: "100%", height: "40px" }} allowClear={true}
                                disabledDate={(current) => {
                                    return current.valueOf() > moment()
                                }} />
                        </Form.Item>
                        <Form.Item
                            name="ADDRESS"
                            className='input-field'
                            rules={[
                                {
                                    required: true,
                                    message: 'حقل عنوان الاقامة مطلوب',
                                },
                            ]}>
                            <Input.TextArea placeholder="ادخل العنوان الخاص بك هنا" />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit" style={{ width: "90px", height: "40px", fontSize: "16px", fontWeight: "bold", backgroundColor: "rgb(40 212 133)", borderRadius: "6px", color: "white" }}>حفظ</Button>
                        </Form.Item>
                    </Form>
                </Row>
            </Card>
        </div>
    )
}

export default SignToUs
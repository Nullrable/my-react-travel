import React from "react"
import {UserLayout} from "../../layout/userLayout";
import {Button, Checkbox, Form, Input} from 'antd';
import styles from "./Register.module.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";

export function Register() {

    const navigate = useNavigate()

    const onFinish = async (values: any) => {
        console.log("Success:", values);
        try {
            await axios.post("http://123.56.149.216:8089/auth/register", {
                email: values.username,
                password: values.password,
                confirmPassword: values.confirm,
            });
            navigate("/signIn/");
        } catch (error) {
            alert("注册失败！");
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <>
        <UserLayout>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={styles["form-register"]}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirm"
                    rules={[{required: true, message: 'Please input your confirm password!'},
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject("密码确认不一致！");
                            },
                        }),
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </UserLayout>
    </>

}
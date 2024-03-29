import React, {useEffect} from "react"
import {UserLayout} from "../../layout/userLayout";
import {Button, Checkbox, Form, Input} from "antd";
import styles from "../register/Register.module.css";
import {useAppDispatch, useSelector} from "../../redux/hooks";
import {signIn} from "../../redux/signIn/slice";
import {useNavigate} from "react-router-dom";

export function SignIn() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const loading = useSelector(s => s.user.loading)

    const jwt = useSelector(s => s.user.token);

    useEffect(()=>{
        if(jwt !== null) {
            navigate("/");
        }
    }, [jwt])

    const onFinish = (values: any) => {
        dispatch(signIn({
            email: values.username,
            password: values.password
        }))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
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

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </UserLayout>
    </>

}
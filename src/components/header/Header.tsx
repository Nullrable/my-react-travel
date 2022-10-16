import React from 'react'
import styles from "./Header.module.css";
import {Button, Dropdown, Input, Layout, Menu, Typography} from "antd";
import {GlobalOutlined} from "@ant-design/icons";
import logo from "../../assets/logo.svg";
import {useNavigate} from "react-router-dom";
import {useSelector} from "../../redux/hooks";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

import {addLanguageActionCreator, changeLanguageActionCreator} from "../../redux/language/languageActions"

export function Header() {

    let navigate = useNavigate();

    const language = useSelector((state) => state.language.language);
    const languageList = useSelector((state) => state.language.languageList);
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const menuClickHandler = (e: any) => {
        if (e.key === "new") {
            // 处理新语言添加action
            dispatch(addLanguageActionCreator("新语言", "new_lang"));
        } else {
            dispatch(changeLanguageActionCreator(e.key));
        }
    }

    return (
        <div>
            <div className={styles["app-header"]}>

                <div className={styles["top-header"]}>
                    <div className={styles.inner}>
                        <Typography.Text>让旅游更幸福</Typography.Text>
                        <Dropdown.Button
                            style={{marginLeft: 15}}
                            overlay={
                                <Menu onClick={menuClickHandler}>
                                    {languageList.map((l) => {
                                        return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                                    })}
                                    <Menu.Item key={"new"}>
                                        {t("header.add_new_language")}
                                    </Menu.Item>
                                </Menu>
                            }
                            icon={<GlobalOutlined/>}
                        >
                            {language === "zh" ? "中文" : "English"}
                        </Dropdown.Button>

                        <Button.Group style={{float: "right", marginTop: "5px"}}>
                            <Button onClick={() => {
                                navigate(`signIn`)
                            }}>注册</Button>
                            <Button>登录</Button>
                        </Button.Group>
                    </div>
                </div>
                <Layout.Header className={styles["main-header"]}>
                    <img src={logo} alt="logo" className={styles["App-logo"]}/>
                    <Typography.Title level={3} className={styles.title}>
                        React旅游网
                    </Typography.Title>
                    <Input.Search
                        placeholder={"请输入旅游目的地、主题、或关键字"}
                        className={styles["search-input"]}
                    />
                </Layout.Header>
            </div>
            <Menu key="m1" mode={"horizontal"} className={styles["main-menu"]}>
                <Menu.Item key="x1"> {t("header.home_page")} </Menu.Item>
                <Menu.Item key="x2"> {t("header.weekend")} </Menu.Item>
                <Menu.Item key="x3"> {t("header.group")} </Menu.Item>
                <Menu.Item key="x4"> {t("header.backpack")} </Menu.Item>
                <Menu.Item key="x5"> {t("header.private")} </Menu.Item>
                <Menu.Item key="x6"> {t("header.cruise")} </Menu.Item>
                <Menu.Item key="x7"> {t("header.hotel")} </Menu.Item>
                <Menu.Item key="x8"> {t("header.local")} </Menu.Item>
                <Menu.Item key="x9"> {t("header.theme")} </Menu.Item>
                <Menu.Item key="x10"> {t("header.custom")} </Menu.Item>
                <Menu.Item key="x11"> {t("header.study")} </Menu.Item>
                <Menu.Item key="x12"> {t("header.visa")} </Menu.Item>
                <Menu.Item key="x13"> {t("header.enterprise")} </Menu.Item>
                <Menu.Item key="x14"> {t("header.high_end")} </Menu.Item>
                <Menu.Item key="x15"> {t("header.outdoor")} </Menu.Item>
                <Menu.Item key="x16"> {t("header.insurance")} </Menu.Item>
            </Menu>
        </div>
    );
}


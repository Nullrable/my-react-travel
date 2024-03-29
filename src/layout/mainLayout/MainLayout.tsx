import React from "react";
import styles from "./MainLayout.module.css";
import {Header, Footer} from "../../components";

interface Props {
    children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({children}) => {
    return <>
        <Header/>
        <div className={styles["page-content"]}>{children}</div>
        <Footer/>
    </>
}
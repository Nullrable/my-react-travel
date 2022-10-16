import React, {useEffect, useState} from "react";
import {
    Header,
    Footer,
    Carousel,
    SideMenu,
    ProductCollection,
    BusinessPartner,
} from "../../components";
import {Row, Col, Typography, Spin} from "antd";
import sideImage from "../../assets/images/sider_2019_12-09.png";
import styles from "./HomePage.module.css";
import axios from "axios";

export const HomePage = () => {
    const [productCollectionList, setProductCollectionList] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true);
        axios.get<any[]>("http://123.56.149.216:8089/api/productCollections").then((res) => {
            setProductCollectionList(res.data)
        }).catch(e => {
            setError(e)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spin />
    }
    if (error) {
        return <p>errors：{ error }</p>
    }
    return (
        <>
            <Header/>
            {/* 页面内容 content */}
            <div className={styles["page-content"]}>
                <Row style={{marginTop: 20}}>
                    <Col span={6}>
                        <SideMenu/>
                    </Col>
                    <Col span={18}>
                        <Carousel/>
                    </Col>
                </Row>

                {
                    productCollectionList.map(item => {
                       return  <ProductCollection
                            title={
                                <Typography.Title level={3} type="warning">
                                   {
                                     item.title
                                   }
                                </Typography.Title>
                            }
                            sideImage={sideImage}
                            products={item.touristRoutes}
                        />
                    }) 
                }
              
                <BusinessPartner/>
            </div>
            <Footer/>
        </>
    );
}

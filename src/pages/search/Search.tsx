import React, { useEffect } from "react";
import styles from "./Search.module.css";
import { Header, Footer, FilterArea, ProductList } from "../../components";
import {useLocation, useParams} from "react-router-dom";
import {searchProduct} from '../../redux/productSearch/slice'
import {useAppDispatch, useSelector} from "../../redux/hooks";
import { Spin } from "antd";

type MatchParameter = {
    keyword: string
}

export const Search = () => {

    const {keyword} = useParams<MatchParameter>()
    const loading = useSelector(state => state.productSearch.loading)
    const error = useSelector(state => state.productSearch.error)
    const productList = useSelector(state => state.productSearch.data)
    const pagination = useSelector(state => state.productSearch.pagination)

    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(()=>{
        dispatch(searchProduct({nextPage:1, pageSize: 10, keywords: keyword}))

    },[location])

    const onPageChange = (nextPage: number, pageSize: number) =>{
        console.log(nextPage,pageSize, "=====>keyword")
        dispatch(searchProduct({nextPage, pageSize, keywords: keyword}))
    }

    if (loading) {
        return (
            <Spin
                size="large"
                style={{
                    marginTop: 200,
                    marginBottom: 200,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                }}
            />
        );
    }
    if (error) {
        return <div>网站出错：{error}</div>;
    }

    return (
        <>
            <Header />
            <div className={styles["page-content"]}>
                {/* 分类过滤器 */}
                <div className={styles["product-list-container"]}>
                    <FilterArea />
                </div>
                {/* 产品列表  */}
                <div className={styles["product-list-container"]}>
                    <ProductList
                        data={productList}
                        paging={pagination}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

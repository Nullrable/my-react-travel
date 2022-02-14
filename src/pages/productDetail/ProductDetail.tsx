import React from "react"
import {useParams} from "react-router-dom";

export function ProductDetail() {

    const {productId} =  useParams();

    return <>
        <h1>产品明细ID: {productId}</h1>
    </>
}
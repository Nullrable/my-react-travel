import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {HomePage, SignIn, SearchPage, ProductDetailPage, Register} from "./pages";

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/signIn" element={<SignIn/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path ="/productDetail/:productId" element={<ProductDetailPage/>}/>
                    <Route path="/productSearch/:keyword" element={<SearchPage />} />
                    <Route path="/productSearch/" element={<SearchPage />} />
                    <Route path="*" element={<h1>404 not found 页面去火星了</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

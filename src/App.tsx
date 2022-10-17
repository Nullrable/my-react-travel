import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {HomePage, SignIn, Search, ProductDetail} from "./pages";

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/signIn" element={<SignIn/>} />
                    <Route path ="/productDetail/:productId" element={<ProductDetail/>}/>
                    <Route path="/search/:keyword" element={<Search />} />
                    <Route path="/search/" element={<Search />} />
                    <Route path="*" element={<h1>404 not found 页面去火星了</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

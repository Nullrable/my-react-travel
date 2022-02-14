import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {HomePage, SignIn} from "./pages";
import {ProductDetail} from "./pages";

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/signIn" element={<SignIn/>} />
                    <Route path = "productDetail/:productId" element={<ProductDetail/>}/>
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

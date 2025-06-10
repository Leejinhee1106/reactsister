import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//부트스트랩을 사용하기 위한 cdn선언
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App /> 
);

/*
import ReactDOM from 'react-dom/client';
//라우터 선언
import {BrowserRouter, Routes, Route} from "react-router-dom";
//부트스트랩을 사용하기 위한 cdn선언
import 'bootstrap/dist/css/bootstrap.min.css'
*/
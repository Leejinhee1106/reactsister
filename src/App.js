/* import React from 'react';
:react 17버전부터는 위에 import를 명시 안해도 됨*/
import {BrowserRouter, Routes, Route} from "react-router-dom";//라우터 선언

import './App.css';

import Header from './components/Header';




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
        {/* Route 컴포넌트들 넣어주기 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

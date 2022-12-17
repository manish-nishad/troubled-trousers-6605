import React from 'react';
import { Routes, Route } from "react-router-dom";
// import HomePage from '../Pages/HomePage';
import ProductPage from '../Pages/ProductPage';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<HomePage />}></Route> */}
        <Route path='/productPage' element={<ProductPage />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes;
import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './routes/Header';
import Footer from './routes/Footer';
import Product from './routes/Products';
import Join from './routes/Join';
import AddProd from './routes/AddProd';
import DetailProd from './routes/DetailProd';
import Login from './routes/Login';
import Cart from './routes/Cart';
import Category from './routes/Category';
import Mypage from './routes/Mypage'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Product></Product>}></Route>
        <Route path='/join' element={<Join></Join>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/add_prod' element={<AddProd></AddProd>}></Route>
        <Route path='/products/all/:id' element={<DetailProd></DetailProd>}></Route>
        <Route path='/products/:category' element={<Category></Category>}></Route>
        <Route path='/mypage' element={<Mypage></Mypage>}></Route>


        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

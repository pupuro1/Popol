import React from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import useAsync from "../customHook/useAsync";
import '../scss/product.scss'
import { API_URL } from '../config/contansts';

const Product = ( {product} ) => {

    const id = product.prodNum;
    const getDetailProducts = async () => {
        const res = await axios.get(`${API_URL}/products/all/${id}`);
        console.log('res.data: ',res.data);
        return res.data;
    }

    const [state ] = useAsync(getDetailProducts, []);
    const { loading, data:detailProduct, error} = state; //state구조분해 
    if(loading) return <div>로딩중 ......</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!detailProduct){
        return <div>로딩중입니다.</div>
    }  

    return (
        <div className="product-card">
            <NavLink to={`/products/all/${id}`} state={{detailProduct: detailProduct}}>
            <div className='product-img'>
                <img className='product_img'src={product.imageUrl} alt="" />
            </div>
            <div className='product-contents'>
                <span className='product-name'>{product.name}</span>
                <span className='product-price'>{product.price}</span>
                {/* <div className='product-seller'>
                    <img src="images/icons/avatar.png" alt=""/>{product.seller}
                </div> */}
            </div>
            </NavLink>
        </div>
    );
};

export default Product;
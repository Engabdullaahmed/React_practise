// import React from 'react';
import { useEffect, useState } from 'react';
// import Product_Data from '../ProductData';
import Product from './Product';
import './ProductsList.css';
function ProductsList() {

const [products,setproducts]=useState([]);

    useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setproducts(data)) // here we put array will get data only one time at backend
            ;
},[]);


// useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//     .then((response) => response.json())
//     .then((data) => setproduct(data)) // will get infinte request at backend if we dont use setproduct
//     ;
// });


const products_liste = products.map((product) => {
    return (<Product key={product.id} product={product} />);
});

return <div className='products-list'>

        {products == 0 ? <h1>Loading...</h1> : <div className='row'> {products_liste}</div>}
       
    
</div>;
}

export default ProductsList;



// const products_liste = Product_Data.map((product) => {
//     // return product.price > 100 ?  <Product key={product.id} product={product} /> : null;

//     return (<Product key={product.id} product={product} />);
//     // return (

//     //     // <div className='card' key={product.id }>
//     //     //     <h2>{product.title}</h2>
//     //     //     <img src={product.image} alt=''></img>
//     //     //     <p>{product.description}</p>
//     //     //     <p>{product.price}</p>
//     //     // </div>
//     // );
// });

// const products = [{id:1,title:he}];
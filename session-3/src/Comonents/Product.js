import { useEffect } from 'react';
import './Product.css';
import { useState } from 'react';
function Product(props) {



    const [counter, setCounter] = useState(0);
    let total_price = 0;

    // useEffect(() => {

    // }, [counter]);
    return (<div className='card'>

        <h2 className='title'>{props.product.title}</h2>
        <img src={props.product.image} alt=''></img>
        <p>{props.product.description}</p>
        <p>price : {props.product.price}</p>
        <button onClick={() => {
            console.log('i will buy this product ', props.product.price);
            total_price += props.product.price.value;
        }}>Buy</button>



        <button onClick={() => { setCounter(counter + 1) }}>Counter {counter}</button>


    </div>);

}

export default Product;

import Button from './Button.jsx';

function Product(props) {
    console.log(props);

    return (
        <div className="product-card">
            <h1>{props.title}</h1>
            <h1>{props.description}</h1>
            <h1>{props.price}</h1>
            <Button title="details"/>
        </div>
    )
}
export default Product;
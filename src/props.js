const Props = ({product}) => {
    return (
        <div className="card">
            <img src={product.image}  alt= "image"  width='' height='150px'></img>
                <hr/>
            <div className="center-text">
                <p><b>{product.name}</b></p>
                <p>$ {product.price.toLocaleString()}</p>
            </div>
        </div>
    )
}
export default Props
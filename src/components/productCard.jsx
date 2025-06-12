

export default function ProductCart(props) {
    console.log(props);
  return (
    <div className="card">
      <img className="productImage" src={props.img} alt="Product" />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <button className="addToCart">Add to Cart</button>
      <button className="buyNow">Buy Now</button>
    </div>
  );
}

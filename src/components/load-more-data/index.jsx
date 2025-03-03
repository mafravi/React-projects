import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console .log(result)
      
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [
          ...prevData,
          ...result.products.filter((product) => !prevData.some((p) => p.id === product.id)),
        ]);
        
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (products.length === 100) setDisabledButton(true);
  }, [products]);
  useEffect(() => {
    fetchProducts();
  }, [count]);
  if (loading) {
    return <div>loading PLZ wait</div>;
  }
  return (
    <div className="container">
      <div className="products">
        {products && products.length
          ? products.map((item) => {
              return (
                <div className="product" key={item.id}>
                  <img src={item.thumbnail} alt={item.description} />
                  <p>{item.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="button">
        <button
          disabled={disabledButton}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Load More Products
        </button>
        {
          disabledButton ? <p>you have reached the limit of 100 products</p> : null
        }
      </div>
    </div>
  );
}

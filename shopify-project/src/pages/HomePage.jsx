import "./HomePage.css";
import axios from 'axios';
import checkmark from "../assets/images/icons/checkmark.png";
import { Header } from "../components/Header";
import { products } from "../../../starting-code/data/products.js";
import { useEffect } from "react";

export function HomePage() {
  // note fetch() and json() are asynchronous meaning we can't save them to variable and we have to
  // use .then to access them
  // fetch('http://localhost:3000/api/products/')
  //   .then((response) => {
  //     response.json().then((data) => {
  //       console.log(data)
  //     })
  //   })
  //a cleaner way of righting this is below

  // fetch('http://localhost:3000/api/products/')
  //   .then((response) => {
  //     return response.json();
  //   }).then((data) => {
  //     console.log(data);
  //   })

  // but the cleanest method is fetching with axios, which allows you to directly
  //  access the data from the response
  // i put it in a useeffect with a empty dependency array, so it runs just once
  useEffect(() => {
      axios.get('http://localhost:3000/api/products/')
    .then((response) => {
      console.log(response.data)
    })
  }, [])

  return (
    <>
      <link rel="icon" href="home-favicon.png" />
      <Header />
      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img
                    className="product-image"
                    src={product.image}
                  />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                  />
                  <div className="product-rating-count link-primary">{product.rating.count}</div>
                </div>

                <div className="product-price">${(product.priceCents/100).toFixed(2)}</div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src={checkmark} />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

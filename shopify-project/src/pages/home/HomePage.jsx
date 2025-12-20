import "./HomePage.css";
import axios from 'axios';
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);
  
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
    axios.get('/api/products/')
    .then((response) => {
      setProducts(response.data);
    })
  }, [])

  return (
    <>
      <link rel="icon" href="home-favicon.png" />
      <Header cart={cart}/>
      <div className="home-page">
      <ProductsGrid products={products}/>
      </div>
    </>
  );
}

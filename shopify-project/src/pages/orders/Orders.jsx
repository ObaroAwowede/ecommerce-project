import "./Orders.css";
import { OrdersGrid } from "./OrdersGrid";
import { Header } from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";


export function Orders({ cart }) {
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/orders?expand=products')
  //     .then((response) => {
  //       setOrders(response.data)
  //     })
  // }, [])


  // when using async in useEffect, you have to create a function within the function and run it at the end

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/orders?expand=products')
      setOrders(response.data)
    }

    getData()
  }, [])
  return (
    <>
      <link rel="icon" href="orders-favicon.png" />
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders}/>
      </div>
    </>
  );
}

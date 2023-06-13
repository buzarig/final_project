import React from "react";

import Form from "../components/form/Form";
import {Link} from "react-router-dom";

const Order = () => {
  const items = [
    {
      id: 1,
      image: "../assets/images/order/coffe.png",
      name: "Дистиллятор для получения гидролата 8л",
      quantity: 3,
      price: 10.99
    },
    {
      id: 2,
      image: "../assets/images/order/coffe.png",
      name: "Product 2",
      quantity: 2,
      price: 5000
    },
    {
      id: 1,
      image: "../assets/images/order/coffe.png",
      name: "Дистиллятор для получения гидролата 8л",
      quantity: 3,
      price: 0
    },
    {
      id: 2,
      image: "../assets/images/order/coffe.png",
      name: "Product 2",
      quantity: 5,
      price: 0
    },
    {
      id: 1,
      image: "../assets/images/order/coffe.png",
      name: "Product 1",
      quantity: 3,
      price: 0,
      lastPrice: 3.99
    }
  ];
  return (
    <div className="orderWrapper">
      <div className="head">
        <Link to="/final_project/catalog">
          <button className="btn_back" type="button">
            Назад до покупок
          </button>
        </Link>
        <h4 className="order_tittle">Оформити замовлення</h4>
      </div>
      <Form items={items} />

    </div>
  );
};

export default Order;

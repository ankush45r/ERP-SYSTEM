
import React, { useContext, useEffect, useState } from "react";
import productContext from "./context";

const OrdersHistory = () => {
    const data = useContext(productContext);


  return (
    <div>
      <h2>Orders History</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersHistory;

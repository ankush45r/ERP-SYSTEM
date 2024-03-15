import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import productContext from './context';

const Dashboard = () => {
    let a = useContext(productContext)
    return (
        <div className="container mt-4">
            <h1>Welcome to the Dashboard</h1>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card"style={{backgroundColor:'aqua'}}>
                        <div className="card-body">
                            <h5 className="card-title">Total Products</h5>
                            <h2 className="card-text ">{a.productList.length}</h2>
                            <Link to="/products" className="btn btn-primary">Manage Products</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card"style={{backgroundColor:'aqua'}}>
                        <div className="card-body">
                            <h5 className="card-title">Total Orders</h5>
                            <h2 className="card-text">{a.orders.length}</h2>
                            <Link to="/orders" className="btn btn-primary">Manage Orders</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

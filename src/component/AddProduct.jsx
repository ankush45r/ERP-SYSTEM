import React, { useContext } from "react";
import productContext from "./context";
import './AddProduct.css';

const AddProduct = () => {
    const a = useContext(productContext);

    const handleOnSubmit = (event) => {
        event.preventDefault();
       console.log(event.target.type.value)
        const product = {
            id: a.generateRandomId(8),
            type: event.target.type.value,
            title: event.target.title.value,
            content: event.target.content.value,
            src: event.target.src.value,
            benefits: event.target.benefits.value
        };

        a.insertProduct({ product });
        event.target.title.value = ''
        event.target.content.value = ''
        event.target.src.value = ''
        event.target.benefits.value = ''
    };

    // Function to generate random IDs


    return (<>
        <center><h1>Add New Product here</h1></center>
        <div className="form_container">
            <form onSubmit={handleOnSubmit} className="mt-4 form">
                <div className="form-group">
                    <label htmlFor="title" className="font-weight-bold">Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Enter title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title" className="font-weight-bold">Type:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="type"
                        name="type"
                        placeholder="Enter type from 'Fruits', 'Furnitures', 'Toys', 'Stationaries', 'Cloths'"
                        pattern="Fruits|Furnitures|Toys|Stationaries|Cloths"
                        title="Please enter a valid type: Fruits, Furnitures, Toys, Stationaries, or Cloths"
                        required
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="content" className="font-weight-bold">Content:</label>
                    <textarea
                        className="form-control"
                        id="content"
                        name="content"
                        placeholder="Enter content"
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="benefits" className="font-weight-bold">Benefits:</label>
                    <textarea
                        className="form-control"
                        id="benefits"
                        name="benefits"
                        placeholder="Enter benefits"
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="src" className="font-weight-bold">Image Source:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="src"
                        name="src"
                        placeholder="Enter image source"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
    );
};

export default AddProduct;

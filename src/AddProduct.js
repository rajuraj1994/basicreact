import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { isAuthenticated } from '../auth'
import { API } from '../config';

const AddProduct = () => {
    const { token } = isAuthenticated()

    const [categories, setCategory] = useState([])
    useEffect(() => {
        axios.get(`${API}/categorylist`)
            .then(res => {
                setCategory(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const [productData, setProductData] = useState({
        product_name: '',
        product_price: '',
        countInStock: '',
        product_description: '',
        product_image: '',
        category: ''
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
     
    const handleChange=name=>event=>{
        setProductData({...productData,error:false,[name]:event.target.value})
    }


    const handleImageChange = (event) => {
        setProductData({...productData,product_image: event.target.files[0]});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('product_name', productData.product_name);
            formData.append('product_price', productData.product_price);
            formData.append('countInStock', productData.countInStock);
            formData.append('product_description', productData.product_description);
            formData.append('product_image', productData.product_image);
            formData.append('category', productData.category);

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axios.post(`${API}/postproduct`, formData, config);
            setSuccess(true);
            setError(false);
            setProductData({
                product_name: '',
                product_price: '',
                countInStock: '',
                product_description: '',
                product_image: '',
                category: '',
            });
        } catch (error) {
            setError(error.response.data.error);
            setSuccess(false);
        }
    };

    // to show error message
    const showError = () =>
        error && <div className="alert alert-danger">{error}</div>;

    // to show success message
    const showSuccess = () =>
        success && (
            <div className="alert alert-success">New product added successfully</div>
        );
    return (
        <>
            <div className="col-md-6 mt-4">
                <form className="shadow-lg p-3">
                    {showError()}
                    {showSuccess()}
                    <div className="mb-3">
                        <label htmlFor="productname">Product Name</label>
                        <input type="text" id="productname" className="form-control"
                            value={productData.product_name}
                            onChange={handleChange('product_name')}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productprice">Product Price</label>
                        <input type="number" id="productprice" className="form-control"
                            value={productData.product_price}
                            onChange={handleChange('product_price')}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stock">Available Stock Number</label>
                        <input type="number" id="stock" className="form-control"
                            value={productData.countInStock}
                            onChange={handleChange('countInStock')}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description">Product Description</label>
                        <textarea className="form-control" id="description"
                            value={productData.product_description}
                            onChange={handleChange('product_description')}
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image">Product Image</label>
                        <input type="file" id="image" className="form-control" accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="category">Category</label>
                        <select className="form-control" onChange={handleChange('category')} >
                            <option></option>
                            {categories && categories.map((c, i) => (
                                <option key={i} value={c._id}>{c.category_name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" onClick={handleSubmit}>Add Product</button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default AddProduct

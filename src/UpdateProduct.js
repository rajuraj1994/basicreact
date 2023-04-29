import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../config';
import { isAuthenticated } from '../auth';

const UpdateProduct = () => {
    

    const [initialValues, setInitialValues] = useState({});
    const { token } = isAuthenticated();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [category, setCategory] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        axios
            .get(`${API}/productdetails/64239d5a0b47d22c98f22dd3`)
            .then((res) => {
                setInitialValues(res.data);
                setProductName(res.data.product_name);
                setProductPrice(res.data.product_price);
                setCountInStock(res.data.countInStock);
                setProductDescription(res.data.product_description);
                setCategory(res.data.category._id);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('product_name', productName);
        formData.append('product_price', productPrice);
        formData.append('countInStock', countInStock);
        formData.append('product_description', productDescription);
        formData.append('product_image', productImage);
        formData.append('category', category);

        try {
            const response = await axios.put(
                `${API}/updateproduct/64239d5a0b47d22c98f22dd3`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setSuccessMsg('Product updated successfully!');
            setErrorMsg('');
            console.log(response.data);
            setTimeout(() => {
                history.push(`/product/${response.data._id}`);
              }, 2000);
        } catch (error) {
            setErrorMsg(error.response.data.error);
            setSuccessMsg('');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
            {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
            <input
                type='text'
                placeholder='Product Name'
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
            />
            <input
                type='number'
                placeholder='Product Price'
                value={productPrice}
                onChange={(event) => setProductPrice(event.target.value)}
            />
            <input
                type='number'
                placeholder='Count In Stock'
                value={countInStock}
                onChange={(event) => setCountInStock(event.target.value)}
            />
            <textarea
                placeholder='Product Description'
                value={productDescription}
                onChange={(event) => setProductDescription(event.target.value)}
            />
            <input
                type='file'
                onChange={(event) => setProductImage(event.target.files[0])}
            />
            <input
                type='text'
                placeholder='Category'
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            />
            <button type='submit'>Update Product</button>
        </form>
    );
};

export default UpdateProduct

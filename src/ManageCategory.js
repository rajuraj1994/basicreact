import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isAuthenticated } from '../auth';
import { API } from '../config';

const ManageCategories = () => {
  const { token } = isAuthenticated();

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/categorylist`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const deleteCategory = (categoryId) => {
    const confirmed = window.confirm('Are you sure you want to delete this category?');
    if (confirmed) {
      axios
        .delete(`${API}/category/${categoryId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setSuccess('Category deleted');
          setError('');
          setCategories(categories.filter((c) => c._id !== categoryId));
        })
        .catch((err) => {
          setError(err.response.data.error);
          setSuccess('');
        });
    }
  };

  // to show error message
  const showError = () => error && <div className="alert alert-danger">{error}</div>;

  // to show success message
  const showSuccess = () => success && <div className="alert alert-success">{success}</div>;

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">Total {categories.length} categories</h2>
          <hr />
          {showError()}
          {showSuccess()}
          <ul className="list-group">
            {categories.map((category) => (
              <li
                key={category._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {category.category_name}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCategory(category._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ManageCategories;

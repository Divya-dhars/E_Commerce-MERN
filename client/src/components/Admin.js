import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

function App() {
  const [productNameAdd, setProductNameAdd] = useState('');
  const [brandNameAdd, setBrandNameAdd] = useState('');
  const [priceAdd, setPriceAdd] = useState('');
  const [ratingsAdd, setRatingsAdd] = useState('');
  const [imageAdd, setImageAdd] = useState('');
  const [imageUrlAdd, setImageUrlAdd] = useState('');
  const [productNameUpdate, setProductNameUpdate] = useState('');
  const [brandNameUpdate, setBrandNameUpdate] = useState('');
  const [priceUpdate, setPriceUpdate] = useState('');
  const [productNameDelete, setProductNameDelete] = useState('');
  const [brandNameDelete, setBrandNameDelete] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [mode, setMode] = useState('add'); // Default mode is 'add'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;

      if (mode === 'add') {
        const formData = new FormData();
        formData.append('productName', productNameAdd);
        formData.append('brandName', brandNameAdd);
        formData.append('price', priceAdd);
        formData.append('ratings', ratingsAdd);
        formData.append('image', imageAdd);

        response = await axios.post('http://localhost:3001/api/Product', formData);
      } else if (mode === 'update') {
        const productResponse = await axios.get(`http://localhost:3001/api/Product/${productNameUpdate}/${brandNameUpdate}`);
        const productId = productResponse.data.id;
        console.log('Product ID:', productId); 
        response = await axios.put(`http://localhost:3001/api/Product/${productId}`,priceUpdate);
      } else if (mode === 'delete') {
        response = await axios.delete(`http://localhost:3001/api/Product/${productNameDelete}/${brandNameDelete}`);
      }

      console.log(response.data);
      if (response.status === 200 || response.status === 201 || response.status === 204) {
        setSuccessMessage(`Product ${mode === 'add' ? 'added' : mode === 'update' ? 'updated' : 'deleted'} successfully`);
      }else{
        setSuccessMessage(`Product ${mode === 'add' ? 'insertion' : mode === 'updation' ? 'updated' : 'deletion'} failed`);
      }
      setProductNameAdd('');
      setBrandNameAdd('');
      setPriceAdd('');
      setRatingsAdd('');
      setImageAdd(null);
      setImageUrlAdd('');
      setProductNameUpdate('');
      setBrandNameUpdate('');
      setPriceUpdate('');
      setProductNameDelete('');
      setBrandNameDelete('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (mode === 'add') {
      setImageAdd(selectedImage);
      setImageUrlAdd(URL.createObjectURL(selectedImage));
    }
  };

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
    setSuccessMessage('');
  };

  return (
    <div>
      <div className="vertical-navbar">
        <p>WELCOME, ADMIN!!</p>
        <button className="nav-btn" onClick={() => handleModeChange('add')}>Add Product</button>
        <button className="nav-btn" onClick={() => handleModeChange('update')}>Update Product</button>
        <button className="nav-btn" onClick={() => handleModeChange('delete')}>Delete Product</button>
        <button className="nav-btn" onClick={() => window.history.back()}>Back</button>
      </div>
      <div className="admin-container">
        <div className="image-container">
          {mode === 'add' && !imageUrlAdd && (
            <label htmlFor="imageInput">
              Choose Image:
            </label>
          )}
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {imageUrlAdd && (
            <img src={imageUrlAdd} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          )}
        </div>

        <div className={`form-container ${mode !== 'add' ? 'update-mode' : ''}`}>
          <h1>{mode === 'add' ? 'ADD PRODUCT' : mode === 'update' ? 'UPDATE PRODUCT' : 'DELETE PRODUCT'}</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product Name:</label>
              <input
                type="text"
                value={mode === 'add' ? productNameAdd : mode === 'update' ? productNameUpdate : productNameDelete}
                onChange={(e) => {
                  if (mode === 'add') setProductNameAdd(e.target.value);
                  else if (mode === 'update') setProductNameUpdate(e.target.value);
                  else if (mode === 'delete') setProductNameDelete(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label>Brand Name:</label>
              <input
                type="text"
                value={mode === 'add' ? brandNameAdd : mode === 'update' ? brandNameUpdate : brandNameDelete}
                onChange={(e) => {
                  if (mode === 'add') setBrandNameAdd(e.target.value);
                  else if (mode === 'update') setBrandNameUpdate(e.target.value);
                  else if (mode === 'delete') setBrandNameDelete(e.target.value);
                }}
                required
              />
            </div>
            {(mode === 'add' || mode === 'update') && (
              <div className="form-group">
                <label>Price:</label>
                <input
                  type="number"
                  value={mode === 'add' ? priceAdd : priceUpdate}
                  onChange={(e) => {
                    if (mode === 'add') setPriceAdd(e.target.value);
                    else if (mode === 'update') setPriceUpdate(e.target.value);
                  }}
                  required
                />
              </div>
            )}
            {mode === 'add' && (
              <div className="form-group">
                <label>Ratings:</label>
                <input
                  type="number"
                  value={ratingsAdd}
                  onChange={(e) => setRatingsAdd(e.target.value)}
                  required
                />
              </div>
            )}
            <button type="submit">{mode === 'add' ? 'Add Product' : mode === 'update' ? 'Update Product' : 'Delete Product'}</button>
          </form>
          {successMessage && (
            <div className="success-message">
              <p>{successMessage}</p>
              <button className="close-btn" onClick={() => setSuccessMessage('')}>
                &#x2715;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [material, setMaterial] = useState('');
  const [condition, setCondition] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [metal, setMetal] = useState('');
  const [images, setImages] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleImageChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('material', material);
    formData.append('condition', condition);
    formData.append('brand', brand);
    formData.append('color', color);
    formData.append('metal', metal);
    images.forEach((image) => formData.append('images', image));

    try {
      await axios.post('/api/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setSuccess(true);
    } catch (error) {
      console.error('There was an error adding the product!', error);
    }
  };

  return (
    <div className="p-10 bg-secondary rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-primary mb-5">Add a New Product</h2>
      {success && <p className="text-green-500">Product added successfully!</p>}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-lg text-primary mb-2" htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-md border border-secondary"
            required
          />
        </div>
        <div>
          <label className="block text-lg text-primary mb-2" htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded-md border border-secondary"
            required
          />
        </div>
        <div>
          <label className="block text-lg text-primary mb-2" htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 rounded-md border border-secondary"
            required
          />
        </div>
        <div>
          <label className="block text-lg text-primary mb-2" htmlFor="images">Images</label>
          <input
            type="file"
            id="images"
            onChange={handleImageChange}
            className="w-full p-2 rounded-md border border-secondary"
            multiple
          />
        </div>
        <div>
          <label className="block text-lg text-primary mb-2" htmlFor="images">Images</label>
          <input
            type="file"
            id="images"
            onChange={handleImageChange}
            className="w-full p-2 rounded-md border border-secondary"
            multiple
          />
        </div>
        <button type="submit" className="bg-primary text-white p-2 rounded-md shadow-md hover:bg-secondary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;

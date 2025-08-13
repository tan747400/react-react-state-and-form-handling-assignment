import { useState } from "react";

function ProductForm() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});

  function validateName() { 
    if (name.trim() === "") {
      setErrors(prev => ({...prev, name: "Name is required."}));
      return false;
    } else {
      setErrors(prev => ({...prev, name:""}));
      return true;
      }
  }

  function validateImage() {   
    if (image.trim() === "") {
      setErrors(prev => ({...prev, image: "Image is required."}));
      return false;
    } else {
      setErrors(prev => ({...prev, image:""}));
      return true;
      }
  }    

  function validatePrice() {
    if (price.trim() === "") {
      setErrors(prev => ({...prev, price: "Price is required."}));
      return false;
    } else if ((parseFloat(price) < 0)) {
      setErrors(prev => ({...prev, price: "Price cannot be less than 0."}));
      return false;
    } else {
      setErrors(prev => ({...prev, price:""}));
      return true;
      }
  }

  function validateDescription() {
    if (description.trim() === "") {
      setErrors(prev => ({ ...prev, description: "Description is required." }));
      return false;
    } else {
      setErrors(prev => ({ ...prev, description: "" }));
      return true;
    }
  }

  function validateEmail() {
    if (email.trim() === "") {
      setErrors(prev => ({ ...prev, email: "Email is required." }));
      return false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrors(prev => ({ ...prev, email: "Invalid email format." }));
        return false;
      } else {
        setErrors(prev => ({ ...prev, email: "" }));
        return true;
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault(); // ป้องกันการ reload หน้า

    const isNameValid = validateName();
    const isImageValid = validateImage();
    const isPriceValid = validatePrice();
    const isDescriptionValid = validateDescription();
    const isEmailValid = validateEmail();
  
    if (isNameValid && isImageValid && isPriceValid && isDescriptionValid && isEmailValid) {
      alert(JSON.stringify({
        name,
        price: Number(price),
        image,
        description,
        email
      }, null, 2));
    }
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </label>
        {errors.image && <p className="error">{errors.image}</p>}
      </div>
      
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        {errors.price && <p className="error">{errors.price}</p>}
      </div>
      
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Enter description here"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
        {errors.description && <p className="error">{errors.description}</p>}
      </div>
      
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;

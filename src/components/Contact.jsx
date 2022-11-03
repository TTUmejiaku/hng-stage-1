import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="mt-20">
      <div className="container">
        <header>
          <h1 className="text-gray900 text-xLarge font-bold">Contact Me</h1>
          <p className="mt-4 text-gray500">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </header>
        <form className="mt-12 mb-20">
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="form__group md:w-full">
              <label htmlFor="first_name" className="form__label">
                First name
              </label>
              <input
                id="first_name"
                type="text"
                placeholder="Enter your first name"
                className="form-input form__input"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form__group md:w-full">
              <label htmlFor="last_name" className="form__label">
                Last name
              </label>
              <input
                id="last_name"
                type="text"
                placeholder="Enter your last name"
                className="form-input form__input"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form__group">
            <label htmlFor="" className="form__label">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="yourname@email.com"
              className="form-input form__input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="message" className="form__label">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className="form-textarea form__textarea h-32"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row item-center mt-6 space-x-2">
            <input
              id="agreeTerms"
              type="checkbox"
              checked={formData.agree}
              className="form-checkbox mb-4"
              name="agreeTerms"
              onChange={handleChange}
            />
            <label htmlFor="agreeTerms" className="form__label ">
              You agree to providing your data to Temple who may contact you.
            </label>
          </div>
          <button
            id="btn__submit"
            className="bg-blue600 w-full text-white py-3 rounded-xl mt-8 font-semibold"
          >
            Send message
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

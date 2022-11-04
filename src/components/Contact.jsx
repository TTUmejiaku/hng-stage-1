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
  const [isEmpty, setIsEmpty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);

    setIsSubmitting(true);
    setMessage("Message sent successfully");

    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        agreeTerms: false,
      });
      setMessage("");
      setIsSubmitting(false);
    }, 5000);
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
        {message && (
          <div className="w-full bg-green-200 text-gray500 mt-10 px-4 py-4">
            {message}
          </div>
        )}
        <form className="mt-10 mb-20" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="form__group md:w-full">
              <label htmlFor="first_name" className="form__label">
                First name
              </label>
              <input
                id="first_name"
                type="text"
                placeholder="Enter your first name"
                className="form__input"
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
                className="form__input"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="yourname@email.com"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <small className="text-sm text-gray500">Use a valid email</small>
          </div>
          <div className="form__group">
            <label htmlFor="message" className="form__label">
              Message
            </label>
            <textarea
              id="message"
              type="textarea"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className="peer invalid:border-priRed"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <small className="hidden peer-invalid:block peer-invalid:text-priRed text-sm">
              Please enter a message
            </small>
            {/* {isEmpty && (
            )} */}
          </div>
          <div className="flex flex-row item-center mt-6 space-x-2">
            <input
              id="agreeTerms"
              type="checkbox"
              checked={formData.agree}
              name="agreeTerms"
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeTerms" className="form__label ">
              You agree to providing your data to Temple who may contact you.
            </label>
          </div>

          <button
            type="submit"
            id="btn__submit"
            className={`bg-blue600 w-full text-white py-3 rounded-xl mt-8 font-semibold cursor-pointer ${
              isSubmitting ? "bg-blue300" : ""
            }`}
            disabled={isSubmitting}
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

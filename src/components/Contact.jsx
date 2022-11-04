import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const myName = "Temple";
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeTerms: false,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

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
    setErrorMessages(validateForm(formData));
  };

  const validateForm = (formValues) => {
    const errors = {};
    const emailRegex =
      /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    if (!formValues.email) {
      errors.email = "Email field cannot be empty";
    } else if (!emailRegex.test(formValues.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!formValues.message) {
      errors.message = "Please enter a message";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(errorMessages).length === 0 && isSubmitting) {
      setSuccessMessage("Message sent successfully");
      setTimeout(() => {
        setFormData(initialFormData);
        setSuccessMessage("");
        setIsSubmitting(false);
      }, 3000);
    } else {
      setIsSubmitting(false);
    }
  }, [errorMessages]);

  return (
    <div className="mt-20">
      <div className="container">
        <header>
          <h1 className="text-gray900 text-xLarge font-bold">Contact Me</h1>
          <p className="mt-4 text-gray500">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </header>
        {successMessage && (
          <div className="w-full bg-green-200 text-gray500 mt-10 px-4 py-4">
            {successMessage}
          </div>
        )}
        <form className="mt-5 mb-20 lg:mb-32" onSubmit={handleSubmit}>
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
              className={`${errorMessages.email ? "border-priRed" : ""}`}
              value={formData.email}
              onChange={handleChange}
              formNoValidate={true}
            />
            <small
              className={`text-sm text-gray500 ${
                errorMessages.email ? "text-priRed" : ""
              }`}
            >
              {errorMessages.email}
            </small>
          </div>
          <div className="form__group">
            <label htmlFor="message" className="form__label">
              Message
            </label>
            <textarea
              id="message"
              type="textarea"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className={`${errorMessages.message ? "border-priRed" : ""}`}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <small
              className={`text-sm text-gray500 ${
                errorMessages.message ? "text-priRed" : ""
              }`}
            >
              {errorMessages.message}
            </small>
          </div>
          <div className="flex flex-row item-center mt-6 space-x-2">
            <input
              id="agreeTerms"
              type="checkbox"
              checked={formData.agreeTerms}
              name="agreeTerms"
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeTerms" className="form__label ">
              You agree to providing your data to {myName} who may contact you.
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

import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    (event.preventDefault())
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="Thank-you">Thank you!</div>
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      class="contact-form"
    >
      <div>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="email"
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Your message"
          name="message"
          className="message"
          required
        />
      </div>
      <div>
        <button
          className="submit"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API endpoint)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} id="connectForm">
        <label
        htmlFor="firstName"
        id="FNLabel"
        className="mt-5"
        >First Name
          <span>(required)</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Frist Name"
          className="mt-5"
          required
        />

        <label
        htmlFor="lastName"
        id="LNLabel"
        className="mt-5"
        >Last Name </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-5"
          placeholder="Last Name"
        />

        <label
        htmlFor="email"
        id="ELabel"
        className="mt-5"
        >Email <span>(required)</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-5"
          placeholder="Email"
          required
        />

        <label
        htmlFor="message"
        id="MLabel"
        className="mt-5"
        >Message <span>(required)</span></label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-5"
          required
        />

      <button
      type="submit"
      id="submit"
      className="mt-5"
      >Submit</button>
    </form>
  );
}
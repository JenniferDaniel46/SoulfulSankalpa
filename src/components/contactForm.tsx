import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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
  const[disableButton, setDisableButton] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error,  setError] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true)
    setSuccess(false)
    setError(false)
    setDisableButton(true)
    axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: "service_4c6zw4o",
      template_id: "template_zkbm4gg",
      user_id: "7TjQL62Z7uX_jNBz5",
      template_params: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email_address: formData.email,
        message: formData.message
      }

    }).then(res => {
    setSending(false);
    console.log(res);
    setDisableButton(false);
    setSuccess(true);

    }).catch(e => {
      console.log(e);
    setSending(false);
    setDisableButton(false);
    setError(true);
  })
    // Handle form submission logic here (e.g., send data to an API endpoint)
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
        {sending ?
        <div id="sending">
          <CircularProgress color="success"/>
        </div>:
        <button
        type="submit"
        id="submit"
        className="mt-5"
        disabled={disableButton}
        >Submit</button>
        }
        {success ?
        <div className="messageResponse">
          <CheckCircleOutlineIcon />
          Message Sent Succesfully!
        </div>
        :
        null}
        {error ?
        <div className="messageResponse">
          <ErrorOutlineIcon />
          Error Sending Message
        </div>
        :
        null}
    </form>
  );
}
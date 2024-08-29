import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import globalStyle from "../app/global.module.css";


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ContactForm(props: {style:{ readonly [key: string]: string; }}) {
  const {style} = props
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
      service_id: "service_yfd4uny",
      template_id: "template_8oj7v9a",
      user_id: "bzgVegGAX9giOi6NB",
      template_params: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email_address: formData.email,
        message: formData.message
      }

    }).then(res => {
    setSending(false);
    setDisableButton(false);
    setSuccess(true);

    }).catch(e => {
      console.log(e);
    setSending(false);
    setDisableButton(false);
    setError(true);
  })
  };

  return (
    <form onSubmit={handleSubmit} id={style.connectForm}>
        <label
        htmlFor={style.firstName}
        id={style.FNLabel}
        className={globalStyle.mt5}
        >First Name
          <span>(required)</span>
        </label>
        <input
          type="text"
          id={style.firstName}
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Frist Name"
          className={globalStyle.mt5}
          required
        />

        <label
        htmlFor={style.lastName}
        id={style.LNLabel}
        className={globalStyle.mt5}
        >Last Name </label>
        <input
          type="text"
          id={style.lastName}
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className={globalStyle.mt5}
          placeholder="Last Name"
        />

        <label
        htmlFor={style.email}
        id={style.ELabel}
        className={globalStyle.mt5}
        >Email <span>(required)</span></label>
        <input
          type="email"
          id={style.email}
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={globalStyle.mt5}
          placeholder="Email"
          required
        />

        <label
        htmlFor={style.message}
        id={style.MLabel}
        className={globalStyle.mt5}
        >Message <span>(required)</span></label>
        <textarea
          id={style.message}
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={globalStyle.mt5}
          required
        />
        {sending ?
        <div id={style.sending}>
          <CircularProgress color="success"/>
        </div>:
        <button
        type="submit"
        id={style.submit}
        className={globalStyle.mt5}
        disabled={disableButton}
        >Submit</button>
        }
        {success ?
        <div className={style.messageResponse}>
          <CheckCircleOutlineIcon />
          Message Sent Succesfully!
        </div>
        :
        null}
        {error ?
        <div className={style.messageResponse}>
          <ErrorOutlineIcon />
          Error Sending Message
        </div>
        :
        null}
    </form>
  );
}
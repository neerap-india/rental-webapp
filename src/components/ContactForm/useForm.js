import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";

const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = (type) => {
    if(type === 'success'){
      notification[type]({
        message: "Success",
        description: "Your message has been sent !"
      });
    }
    if(type === 'error'){
      notification[type]({
        message: "Error",
        description: "Message not able to send, try again later"
      });     
    }

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    const url = "https://rental-backend.herokuapp.com/mail";
    if (Object.keys(values).length === 3) {
      axios
        .post(url, {
          ...values,
        })
        .then(() => {
          setShouldSubmit(true);
        })
        .catch(() => {
          openNotificationWithIcon("error");}
        );
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      openNotificationWithIcon("success");
    } 
  }, [errors, shouldSubmit]);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;

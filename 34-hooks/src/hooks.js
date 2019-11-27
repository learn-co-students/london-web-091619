import { useState } from "react";

export const useForm = submitCallback => {
  const [formData, setFormData] = useState({});

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitCallback(formData);
    setFormData({});
  };

  return [formData, handleSubmit, handleChange];
};

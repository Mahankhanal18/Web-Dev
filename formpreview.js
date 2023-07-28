import React, { useState } from 'react';
import axios from 'axios';

const FormPreview = () => {

  const [formData, setFormData] = useState({});

 
  const handleSubmit = async () => {
    try {
     
      const response = await axios.post('/api/forms/submit', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

 
  return (
    <div>
      
    </div>
  );
};

export default FormPreview;

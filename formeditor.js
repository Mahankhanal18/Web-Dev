import React, { useState } from 'react';
import axios from 'axios';

const FormEditor = () => {
  
  const [form, setForm] = useState({
    title: '',
    headerImage: '',
    questions: [],
  });

  
  const addQuestion = () => {
    
  };

 
  const saveForm = async () => {
    try {
      
      const response = await axios.post('/api/forms', form);
      console.log(response.data);
    } catch (error) {
      console.error('Error saving form:', error);
    }
  };


  return (
    <div>
      
    </div>
  );
};

export default FormEditor;

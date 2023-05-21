import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function App() {
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.body.style.backgroundColor = color;
  };

  return (
    <div id="app" className="App">
      <h1>Background Color Changer</h1>
      <Formik
        initialValues={{ color: ''}}
        validationSchema={Yup.object({
          color: Yup.string()
          .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form id="colorForm" onSubmit={handleSubmit}>
          <label htmlFor="colorInput">Choose a color:</label>
          <Field id="field" type="color" name="colorInput" value={color} className="colorInput" onChange={handleChange}></Field>
          <button id="submitButton" type="submit">Change Color</button>
        </Form>
    </Formik>
    </div>
  );
}

export default App;

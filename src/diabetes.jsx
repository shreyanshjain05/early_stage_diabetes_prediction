import React, { useState } from 'react';
import axios from 'axios';
import Navbar2 from './components/navbar2';

function Diabetes() {
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState('');

  const fields = [
    { name: 'Age', description: 'Enter your age' },
    { name: 'Pregnancies', description: 'Enter the number of pregnancies (optional)' },
    { name: 'Glucose Levels', description: 'Enter your glucose level (mg/dL)' },
    { name: 'Blood Pressure', description: 'Enter your blood pressure (mmHg)' },
    { name: 'Skin Thickness', description: 'Enter your skin thickness (mm)' },
    { name: 'Insulin Levels', description: 'Enter your insulin level (IU/mL)' },
    { name: 'Body Mass Index (BMI)', description: 'Enter your BMI (kg/m²)' },
    { name: 'Diabetes Pedigree Function', description: 'Enter the diabetes pedigree function' },
    
    { name: 'Family History', description: 'Indicate if there’s a family history of diabetes (Yes/No)' },
    { name: 'Physical Activity Levels', description: 'Rate your physical activity level (1-10)' },
    { name: 'Diet Quality', description: 'Rate the quality of your diet (1-10)' },
    { name: 'Sleep Duration', description: 'Enter average sleep duration (hours)' },
    { name: 'Smoking Status', description: 'Indicate if you smoke (Yes/No)' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/predict', formData)
      .then((response) => {
        setPrediction(response.data.prediction_text);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <>
      <Navbar2 />
      <div className="page-container">
        <h1 className="title">Want to have a predictive analysis of diabetes? Fill in the details below to get started.</h1>
        <form onSubmit={handleSubmit} className="form">
          {fields.map((field, index) => (
            <div key={index} className="input-group">
              <label htmlFor={field.name} className="label">
                {field.name}
              </label>
              <input
                id={field.name}
                type="text"
                name={field.name}
                placeholder={field.description}
                value={formData[field.name] || ''}
                onChange={handleChange}
                required={field.name !== 'Pregnancies'}
                className="input"
              />
            </div>
          ))}
          <button type="submit" className="button">
            Submit
          </button>
        </form>

        {prediction && (
          <div className="prediction">
            {prediction}
          </div>
        )}
      </div>

      <style jsx>{`
        /* Gradient Background and Navbar Styling */
        .page-container {
          background: linear-gradient(135deg, #ffa726, #ff7043); /* Orange gradient */
          min-height: 100vh;
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Arima', sans-serif; /* Use the Arima font here */
        }
        .navbar {
          background: rgba(255, 167, 38, 0.8); /* Semi-transparent orange */
          padding: 1rem;
          color: white;
          font-weight: bold;
          display: flex;
          justify-content: space-around;
          font-size: 1.2rem;
          width: 100%;
          position: fixed;
          top: 0;
        }

        /* Form and Input Styling */
        .form {
          background: rgba(255, 255, 255, 0.9);
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
          max-width: 500px;
          width: 90%;
          margin-top: 4rem;
          font-family: 'Arima', sans-serif; /* Apply font here */
        }

        .title {
          color: black;
          font-size: 2.2rem;
          font-weight: bold;
          margin-bottom: 2rem;
          text-align: center;
        }

        .input-group {
          margin-bottom: 1.2rem;
        }

        .label {
          font-size: 1rem;
          color: #ff7043;
          margin-bottom: 0.5rem;
          display: block;
          font-family: 'Arima', sans-serif;
        }

        .input {
          padding: 0.8rem;
          width: 100%;
          font-size: 1rem;
          border-radius: 8px;
          border: 1px solid #ffa726;
          color: #333;
          outline: none;
          transition: border-color 0.3s;
          font-family: 'Arima', sans-serif;
        }

        .input:focus {
          border-color: #ff7043;
        }

        .button {
          width: 100%;
          padding: 0.8rem;
          font-size: 1.1rem;
          font-weight: bold;
          border-radius: 8px;
          border: none;
          background-color: #ff7043;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s;
          font-family: 'Arima', sans-serif;
        }

        .button:hover {
          background-color: #ff5722;
        }

        .prediction {
          background-color: rgba(255, 255, 255, 0.85);
          margin-top: 1.5rem;
          padding: 1rem;
          border-radius: 8px;
          color: #ff7043;
          font-size: 1.1rem;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        /* Responsive Styling */
        @media (max-width: 600px) {
          .title {
            font-size: 1.8rem;
          }
          .label,
          .input {
            font-size: 0.9rem;
          }
          .button {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default Diabetes;

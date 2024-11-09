import React, { useState } from 'react';
import axios from 'axios';
import Navbar2 from './components/navbar2';

function Diabetes() {
  const [formData, setFormData] = useState({
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    SkinThickness: '',
    Insulin: '',
    BMI: '',
    DiabetesPedigreeFunction: '',
    Age: '',
    FamilyHistory: '',
    PhysicalActivityLevel: '',
    DietQuality: '',
    SleepDuration: '',
    SmokingStatus: '',
  });

  const [prediction, setPrediction] = useState('');

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
    <Navbar2/>
    <div className="bg-slate-300 h-[110%] flex justify-center items-center flex-col">
    <h1 className='-mt-10  font-bold font-albert text-[200%]  '>Early-Stage Diabetes Detection</h1>
      
      <div className="bg-blue-500 mt-10 w-[60%] rounded-2xl p-10">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {Object.keys(formData).map((key) => (
    <div key={key} className="flex flex-col">
      <label htmlFor={key} className="text-white font-semibold">
        {key}
      </label>
      <input
        id={key}
        type="text"
        name={key}
        placeholder={key}
        value={formData[key]}
        onChange={handleChange}
        required
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
  ))} 
  
  <div className="col-span-full">
    <button
      type="submit"
      className="w-full bg-red-600   text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
    >
      Predict
    </button>
  </div>
</form>
</div>


      {prediction && <div className="bg-slate-50 h-[5%] border-black border-4 border-dashed mt-5 w-[25%] flex justify-center items-center">{prediction}</div>}
    </div>
    </>
  );
}

export default Diabetes;

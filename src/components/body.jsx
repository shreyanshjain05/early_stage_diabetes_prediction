import React from 'react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';

const Body = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-orange-200 to-orange-500 flex items-center pt-10 flex-col gap-10 pb-20">
        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold font-arima text-center text-black">
          Detect Diabetes Early, <span className="text-orange-700">Live Healthier</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg w-3/4 text-center font-semibold font-arima text-black">
          Experience the power of predictive healthcare. Our system helps identify early signs of diabetes, empowering you to take control of your health journey.
        </p>

        {/* Get Started Button */}
        <div className="flex justify-center">
          <a href="/detect">
            <button className="bg-orange-600 text-white hover:bg-orange-500 mt-3 py-3 px-10 rounded-md shadow-lg transition-transform transform hover:scale-105 font-arima">
              Get Started
            </button>
          </a>
        </div>

        {/* Why Early Detection Matters Section */}
        <h2 className="text-3xl font-extrabold font-arima text-center text-white mt-10">Why Early Detection Matters</h2>
        <p className="text-lg w-3/4 text-center font-semibold font-arima text-black">
          Millions of people remain unaware they have diabetes until complications arise. Early-stage detection can prevent severe health complications and reduce healthcare costs.
        </p>

        {/* Key Points Section */}
        <div className="w-11/12 grid gap-8 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[ 
            {
              icon: icon1,
              title: 'Prevention First',
              text: 'Detecting diabetes early enables lifestyle adjustments before serious complications occur.',
            },
            {
              icon: icon2,
              title: 'Better Health Outcomes',
              text: 'Early interventions are more effective, leading to healthier, longer lives.',
            },
            {
              icon: icon3,
              title: 'Cost Effective',
              text: 'Avoiding complications saves money on healthcare in the long run.',
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center transform transition-transform hover:scale-105">
              <img src={item.icon} alt={`${item.title} icon`} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-orange-600 mb-2 font-arima">{item.title}</h3>
              <p className="text-md font-medium text-gray-700 font-arima">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Factors Used for Detection Section */}
        <h2 className="text-3xl font-extrabold font-arima text-center text-white mt-10">Factors Used for Detection</h2>
        <p className="text-lg w-3/4 text-center font-semibold font-arima text-black">
          Understanding the various factors that contribute to the early detection of diabetes is crucial for accurate and timely diagnosis. Our system analyzes these key factors to assess diabetes risk.
        </p>

        {/* Detection Factors */}
        <div className="w-11/12 grid gap-8 mt-8 grid-cols-1 sm:grid-cols-2">
          {[ 
            {
              icon: icon1,
              title: 'Blood Sugar Levels',
              text: 'High blood sugar levels are a key indicator of diabetes. Elevated glucose levels suggest the body’s inability to properly manage sugar.',
            },
            {
              icon: icon2,
              title: 'Body Mass Index (BMI)',
              text: 'Obesity and a high BMI are risk factors that contribute to insulin resistance, increasing the likelihood of developing diabetes.',
            },
            {
              icon: icon3,
              title: 'Family History',
              text: 'Genetic factors influence the risk of diabetes. A family history of diabetes significantly increases the likelihood of developing the condition.',
            },
            {
              icon: icon1,
              title: 'Age',
              text: 'Age increases the risk of diabetes, particularly for those over 45 years old, as the body’s ability to process glucose weakens with time.',
            },
            {
              icon: icon2,
              title: 'Physical Activity',
              text: 'Regular exercise reduces the risk of diabetes by improving insulin sensitivity and maintaining a healthy weight.',
            },
            {
              icon: icon3,
              title: 'Blood Pressure',
              text: 'High blood pressure is often linked with diabetes and can increase the risk of complications, including heart disease and stroke.',
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center transform transition-transform hover:scale-105">
              <img src={item.icon} alt={`${item.title} icon`} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-orange-600 mb-2 font-arima">{item.title}</h3>
              <p className="text-md font-medium text-gray-700 font-arima">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;

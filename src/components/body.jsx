import React from 'react';
import icon3 from '../assets/icon3.png'
import icon2 from '../assets/icon2.png'
import icon1 from '../assets/icon1.png'

const Body = () => {
  return (
    <>
      <div className="bg-slate-200 flex items-center pt-10 flex-col gap-10 pb-20">
        <h1 className="text-4xl font-extrabold font-arima flex gap-3 text-center">
          Detect Diabetes Early, <span className="text-blue-500">Live Healthier</span>
        </h1>
        <p className="text-lg w-1/2 text-center font-semibold">
          Advanced machine learning technology meets healthcare innovation. Predict early-stage diabetes with accuracy and take control of your health journey.
        </p>
        <div className="flex justify-center">
          <a href="/detect">
            <button className="bg-blue-600 text-white hover:bg-blue-500 mt-3 py-3 px-10 rounded-md">
              Get Started
            </button>
          </a>
        </div>
        <h1 className="text-4xl font-extrabold font-arima text-center">Why Early Detection Matters</h1>
        <p className="text-lg w-1/2 text-center font-semibold">
          India faces a growing diabetes epidemic, with millions of cases going undiagnosed until complications arise. Early stage detection can prevent severe health complications and reduce healthcare costs.
        </p>

        <div className="w-4/5 flex flex-col gap-6 mt-5">
          {[
            {
              title: 'Prevention First',
              text: 'Early detection allows for lifestyle changes and preventive measures before complications develop',
            },
            {
              title: 'Better Outcomes',
              text: 'Early intervention leads to better health outcomes and reduced risk of complications',
            },
            {
              title: 'Cost Effective',
              text: 'Preventing complications is more cost-effective than treating advanced diabetes',
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-2xl p-6 shadow-md">
              <div className="bg-blue-600 w-10 h-10 rounded-xl -mt-10 ml-4"></div>
              <p className="text-lg text-center font-bold mt-2">{item.title}</p>
              <p className="text-lg text-center font-semibold mt-4">{item.text}</p>
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-extrabold font-arima mt-10 text-center">Our Solution</h1>
        <p className="text-lg w-1/2 text-center font-semibold">
          Using advanced machine learning algorithms, we've developed a reliable early detection system.
        </p>
        <div className="w-4/5 flex flex-col gap-6 mt-5">
          {[
            {
              title: 'Machine Learning Models',
              text: 'We employ multiple advanced algorithms including Random Forest, SVM, and Gradient Boosting for accurate predictions',
            },
            {
              title: 'High Accuracy',
              text: 'Our models achieve over 77% accuracy in predicting early-stage diabetes, helping identify risks early',
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-2xl p-6 shadow-md">
              <div className="bg-blue-600 w-10 h-10 rounded-xl -mt-10 ml-4"></div>
              <p className="text-lg text-center font-bold mt-2">{item.title}</p>
              <p className="text-lg text-center font-semibold mt-4">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="w-full bg-slate-200 flex flex-col items-center mt-10 py-10">
          <h1 className="text-2xl font-extrabold font-arima ">Our Machine Learning Approach</h1>
          <p className="text-lg w-1/2 text-center font-semibold ">
            We employ a comprehensive suite of machine learning models, each selected for their unique strengths in handling different aspects of diabetes detection.
          </p>

         
          <div className="w-4/5 flex flex-col gap-6 mt-5">
            {[
              {
                icon: '🌿',
                title: 'Random Forest',
                accuracy: 'Accuracy: 79.92%',
                description: 'Selected as primary model due to its ensemble ability to handle both numerical and categorical features. Its ensemble approach helps prevent overfitting while capturing complex relationships between medical and lifestyle factors.',
                strengths: [
                  'Handles both medical measurements and lifestyle categories effectively',
                  'Provides feature importance rankings',
                  'Robust to outliers in medical data',
                  'Excellent performance with imbalanced classes'
                ]
              },
              {
                icon: '🧊',
                title: 'Support Vector Machine',
                accuracy: 'Accuracy: 77.5%',
                description: 'Chosen for its effectiveness in high-dimensional spaces, making it ideal for handling multiple medical and lifestyle parameters simultaneously.',
                strengths: [
                  'Effective in high-dimensional feature spaces',
                  'Strong theoretical guarantees',
                  'Handles non-linear relationships well',
                  'Robust to outliers with proper kernel selection'
                ]
              },
              {
                icon: '🧠',
                title: 'Neural Networks',
                accuracy: 'Accuracy: 76.94%',
                description: 'Implemented two architectures to capture complex non-linear relationships between health indicators, especially effective at discovering hidden patterns in lifestyle data.',
                strengths: [
                  'Learns hierarchical feature representations',
                  'Adaptable to new patterns in data',
                  'Handles mixed data types well'
                ]
              },
              {
                icon: 'Σ',
                title: 'K-Nearest Neighbors',
                accuracy: 'Accuracy: 74.65%',
                description: 'Utilized for its intuitive approach to classification based on similar health profiles, making it valuable for case-based reasoning in diabetes detection.',
                strengths: [
                  'Simple and interpretable results',
                  'No training phase required',
                  'Effective with sufficient data',
                  'Natural handling of multi-class cases'
                ]
              },
              {
                icon: '🌲',
                title: 'Decision Trees',
                accuracy: 'Accuracy: 79.55%',
                description: 'Provides transparent decision-making processes, making it valuable for understanding the logical progression of diabetes risk factors.',
                strengths: [
                  'Highly interpretable decisions',
                  'Handles both numerical and categorical data',
                  'No feature scaling required',
                  'Captures non-linear patterns'
                ]
              }
            ].map((model, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{model.icon}</span>
                  <h2 className="text-lg font-bold">{model.title}</h2>
                  <span className="text-gray-500 ml-auto">{model.accuracy}</span>
                </div>
                <p className="text-sm font-semibold mb-3">{model.description}</p>
                <ul className="list-disc ml-6 text-sm font-semibold">
                  {model.strengths.map((strength, i) => (
                    <li key={i} className="mt-1">{strength}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

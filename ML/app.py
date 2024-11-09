import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

model = pickle.load(open('model1z.pkl', 'rb'))

@app.route('/')
def home():
    return "Diabetes Prediction API"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    float_features = [float(data[key]) for key in data]
    
    final_features = [np.array(float_features)]
    prediction = model.predict(final_features)
    
    if prediction == 1 :
        pred = 'Patient is  susceptible to Diabetes !!'
    elif prediction == 0 :
        pred = 'Patient is not susceptible to Diabetes'
    
    return jsonify({'prediction_text': pred})

if __name__ == "__main__":
    app.run(debug=True)

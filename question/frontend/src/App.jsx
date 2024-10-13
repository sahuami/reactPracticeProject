import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    subject1: '',
    subject2: '',
    subject3: ''
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/personality', {
        name: formData.name,
        subject1: parseInt(formData.subject1),
        subject2: parseInt(formData.subject2),
        subject3: parseInt(formData.subject3)
      });
      setResult(response.data);
      setError(null);
      setFormData({
        name: '',
        subject1: '',
        subject2: '',
        subject3: ''
      })
    } catch (err) {
      setError('An error occurred. Please check your inputs.');
      setResult(null);
    }
  };

  return (
    <div className="App">
      <h1>Find Your Personality Trait</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="subject1"
          placeholder="Enter marks for Subject 1"
          value={formData.subject1}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="subject2"
          placeholder="Enter marks for Subject 2"
          value={formData.subject2}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="subject3"
          placeholder="Enter marks for Subject 3"
          value={formData.subject3}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div>
          <h2>Result</h2>
          <p>Name: {result.name}</p>
          <p>Average Marks: {result.averageMarks.toFixed(2)}</p>
          <p>Grade: {result.grade}</p>
          <p>Personality Trait: {result.personalityTrait}</p>
        </div>
      )}
    </div>
  );
}

export default App;

// Import necessary dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// Define the CarModelDetails component
const CarModelDetails = () => {
  // Get the car model id from the URL parameters
  const { id } = useParams();

  // Initialize state variables for car model details
  const [carModel, setCarModel] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch car model details from the API
  useEffect(() => {
    const fetchCarModelDetails = async () => {
      try {
        const response = await fetch(`/api/car-models/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCarModel(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCarModelDetails();
  }, [id]);

  // Render the car model details page
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{carModel.name}</h1>
      <h2>Features:</h2>
      <ul>
        {carModel.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <h2>Pricing:</h2>
      <p>${carModel.price}</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default CarModelDetails;
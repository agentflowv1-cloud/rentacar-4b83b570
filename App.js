// Import necessary dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarModelDetails from './CarModelDetails';

// Define the App component
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/car-models/:id" element={<CarModelDetails />} />
        <Route path="/" element={<div>Homepage</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
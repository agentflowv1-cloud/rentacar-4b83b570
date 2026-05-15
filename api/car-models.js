// Define a sample API for car models
const carModels = [
  { id: 1, name: 'Car Model 1', features: ['Feature 1', 'Feature 2'], price: 10000 },
  { id: 2, name: 'Car Model 2', features: ['Feature 3', 'Feature 4'], price: 20000 }
];

// Export the API
export default (
  async (req, res) => {
    const { id } = req.params;
    const carModel = carModels.find((carModel) => carModel.id === parseInt(id));
    if (!carModel) {
      return res.status(404).json({ message: 'Car model not found' });
    }
    return res.json(carModel);
  }
);
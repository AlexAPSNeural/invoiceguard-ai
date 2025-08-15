const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to InvoiceGuard AI API');
});

app.post('/verifyInvoice', async (req, res, next) => {
  try {
    const { invoiceData } = req.body;
    if (!invoiceData) {
      throw new Error('Invoice data is required');
    }
    // Simulate verification process
    const isValid = await verifyInvoice(invoiceData);
    res.json({ verified: isValid });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`InvoiceGuard AI server running on port ${PORT}`);
});

// Mock function to simulate invoice verification
async function verifyInvoice(data) {
  // Implement actual AI/ML verification logic here
  return true; // assuming verification passes
}
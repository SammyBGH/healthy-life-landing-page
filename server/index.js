const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Path to JSON file (storage)
const appointmentsFile = path.join(__dirname, 'appointments.json');

// Helper to save appointment
function saveAppointment(data) {
  let appointments = [];
  if (fs.existsSync(appointmentsFile)) {
    appointments = JSON.parse(fs.readFileSync(appointmentsFile));
  }
  appointments.push(data);
  fs.writeFileSync(appointmentsFile, JSON.stringify(appointments, null, 2));
}

// POST route to handle form
app.post('/api/appointments', (req, res) => {
  const appointment = req.body;

  if (!appointment.name || !appointment.email || !appointment.message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  saveAppointment(appointment);
  res.status(200).json({ message: 'Appointment received' });
});

// Get all appointments
app.get('/api/appointments', (req, res) => {
  if (!fs.existsSync(appointmentsFile)) {
    return res.json([]);
  }
  const appointments = JSON.parse(fs.readFileSync(appointmentsFile));
  res.json(appointments);
});


// Test route
app.get('/', (req, res) => {
  res.send('HealthyLife backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

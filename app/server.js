const express = require('express');
const path = require('path');
const app = express();

// Static files (HTML, CSS, JS) için public klasörünü belirt
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Rooms sayfası route
app.get('/rooms', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Rooms.html'));
});

// Contact sayfası route
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Contact.html'));
});

// Server ayarları
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

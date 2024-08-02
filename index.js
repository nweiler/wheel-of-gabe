const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  res.sendFile(__dirname + '/styles.css');
  res.sendFile(__dirname + '/script.js');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send('Error: Invalid JSON payload');
  }
  console.log(req.body);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));
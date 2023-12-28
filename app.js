const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur notre application Node.js dans un conteneur Docker!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

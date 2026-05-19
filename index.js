const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>  Hello World αυτή είναι η δευτερή μας εφαρμογή τρέχει μέσω Docker & Render!</h1>');
});

app.listen(PORT, () => {
  console.log(`Το application ξεκίνησε στην πόρτα ${PORT}`);
});

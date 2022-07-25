console.log('hi');
const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TODO: use routes here
app.use(routes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});

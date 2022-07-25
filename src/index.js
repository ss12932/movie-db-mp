console.log('hi');
const express = require('express');
const db = require('./middleware/db');
const routes = require('./routes');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(db);

//TODO: use routes here
app.use(routes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});

const mysql2 = require('mysql2');

const dbOptions = {
  host: '127.0.0.1',
  user: 'root',
  password: 'password123',
  database: 'movies_db',
};

const connection = mysql2.createConnection(dbOptions);

const db = (req, res, next) => {
  (req.db = connection), (req.body = connection);
  console.log('db middleware');
  next();
};

module.exports = db;

/* every req object goes through json mw -> urlencoded mw -> db mw -> controllers. add another mw as db middleware go through routes middleware. every req it will add a db object/instance to req.body. in controller final routing chain. req will have db instance. hit any of these routes will display clg of db mw. purpose of this mw establish connection to db. install mysql2 + create connections. list of db options login creds. dotenv this. every req goes through this mw will get access to connection obj. */

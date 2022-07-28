const mysql = require('mysql2');
import Sequelice from "sequelize";


export const sequelize = new Sequelice(
  "cft",
  "root",
  "13991987Ft",
  {
    host: "localhost", 
    dialect: "mysql",
    logging: false,
  }
);

// para docker
// export const sequelize = new Sequelice(
//   "bd_sequelize",
//   "root", // "postgres",
//   "root", //"13991987Ft",
//   {
//     host: "postgres", //host: "localhost"
//     dialect: "postgres",
//     logging: false,
//   }
// );

// create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '13991987Ft',
//   database: 'cft',
// });




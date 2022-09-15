require('dotenv').config();

const Sequelize = require('sequelize');

//No JASWDB_URL in .env file so uses DB_NAME, DB_USER, and DR_PW to login to MYSQL
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;

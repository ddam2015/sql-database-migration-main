// import mysql from "mysql2/promise";

// export async function createSqlConnection() {
//   const connectionConfig = {
//     host: process.env.SQL_DB_HOST,
//     port: process.env.SQL_DB_PORT,
//     user: process.env.SQL_DB_USER,
//     password: process.env.SQL_DB_PASSWORD,
//     database: process.env.SQL_DB_NAME,
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   };

//   try {
//     const connection = await mysql.createConnection(connectionConfig);
//     console.log("MySQL connection established successfully.");
//     return connection;
//   } catch (error) {
//     console.error("Failed to establish MySQL connection:", error);
//     throw error;
//   }
// }

import mysql from "mysql2/promise";

export async function createSqlConnection() {
  const connectionConfig = {
    host: process.env.SQL_DB_HOST,
    port: process.env.SQL_DB_PORT,
    user: process.env.SQL_DB_USER,
    password: process.env.SQL_DB_PASSWORD,
    database: process.env.SQL_DB_NAME,
    ssl: {
      rejectUnauthorized: false,
    },
  };

  const connection = await mysql.createConnection(connectionConfig);

  return connection;
}

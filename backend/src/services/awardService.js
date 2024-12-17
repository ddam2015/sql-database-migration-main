import { createSqlConnection } from "../config/sqlConnect.js";
import { Tables } from "../constants/table.js";

export const getAwards = async () => {
  const connection = await createSqlConnection();

  try {
    // Query the database
    const [rows] = await connection.execute(`SELECT * FROM ${Tables.AWARDS}`);

    // rows.forEach((row) => {
    //   console.log(`Award ID: ${row.id}, Name: ${row.name}`);
    // });

    return rows;
  } catch (error) {
    console.error("Error fetching awards:", error);
    throw error;
  } finally {
    await connection.end();
  }
};

import { createSqlConnection } from "../config/sqlConnect.js";
import { Tables } from "../constants/table.js";

const query = `
SELECT *
FROM ${Tables.COACHES}
LIMIT 25
`;

export const getTest = async () => {
  const connection = await createSqlConnection();

  try {
    // Query the database
    const [rows] = await connection.execute(query);

    // rows.forEach((row) => {
    //   console.log(`Award ID: ${row.id}, Name: ${row.name}`);
    // });

    return rows;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  } finally {
    await connection.end();
  }
};

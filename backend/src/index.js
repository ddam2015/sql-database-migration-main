import express from "express";
import "dotenv/config";
import { migrateCoaches } from "./migrations/coachMigration.js";
import connectToDb from "./config/mongoConnect.js";

const app = express();
const PORT = process.env.PORT || 3000;

// app.get("/upload-image", async (req, res) => {
//   const filename = "fred-wu_7106.jpg";
//   try {
//     const imageKey = await uploadImageToS3(BASE_PATH_COACHES, filename);
//     res.json({ success: true, imageKey: imageKey });
//   } catch (error) {
//     console.error("Error in /upload-image route:", error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

app.get("/migrate/coaches", async (req, res) => {
  try {
    // migrate data
    const data = await migrateCoaches();

    // Send the result
    res.status(200).json({ message: "Successfully migrated coaches" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to migrate coaches");
  }
});

app.listen(PORT, async () => {
  console.log(`App is listening on http://localhost:${PORT}`);
  await connectToDb();
});

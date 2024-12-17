import { Tables } from "../constants/table.js";
import { createSqlConnection } from "../config/sqlConnect.js";
import s3Client from "../config/s3Client.js";
import { cleanCoachData } from "../transformations/coachTransformation.js";
import { BASE_PATH_COACHES } from "../constants/assetPaths.js";
import { uploadImageToS3 } from "../utils/s3Utils.js";
import Coach from "../models/coachModel.js";

// Function to normalize social keys to lowercase
function normalizeSocialKeys(social) {
  if (!social) return {};

  return Object.keys(social).reduce((acc, key) => {
    acc[key.toLowerCase()] = social[key];
    return acc;
  }, {});
}

export async function migrateCoaches() {
  // variables
  const batchSize = 100;
  let offset = 3198;
  let hasMoreRecords = true;
  let connection;

  try {
    // open SQL connection
    connection = await createSqlConnection();
    // create new s3 client
    const s3 = s3Client;

    while (hasMoreRecords) {
      // query
      const query = `
        SELECT *
        FROM ${Tables.COACHES}
        WHERE enabled = 1
        LIMIT ${batchSize}
        OFFSET ${offset}`;

      // Fetch records in batches from MySQL
      const [coaches] = await connection.execute(query);

      // If no records are fetched, stop the loop
      if (coaches.length === 0) {
        hasMoreRecords = false;
        console.log("No more coach records");
        break;
      }

      // Loop through each coach in the batch
      for (const coach of coaches) {
        // get profile_img name
        const profileImg = coach.profile_img;
        let imageKey = null;

        // get s3 key for image if we have a profile image
        if (profileImg) {
          imageKey = await uploadImageToS3(s3, BASE_PATH_COACHES, profileImg);
        }

        // some keys are capitalized: 	{"Instagram": "Cedemac_5"}
        let normalizedSocial = normalizeSocialKeys(coach.social);

        let coachData = {
          schemaVersion: 1,
          sqlId: coach.id,
          firstName: coach.first_name,
          lastName: coach.last_name,
          email: coach.email,
          phone: coach.phone,
          profileImgKey: imageKey,
          address: {
            street: null,
            city: coach.city,
            state: coach.state,
            postalCode: null,
            country: null,
          },
          socialLinks: {
            facebook: normalizedSocial?.facebook ?? null,
            twitter: normalizedSocial?.twitter ?? null,
            instagram: normalizedSocial?.instagram ?? null,
          },
          createdAt: new Date(coach.createtime),
          updatedAt: new Date(coach.updatetime),
          isDeleted: false,
          deletedAt: null,
          deletedBy: null,
        };

        coachData = cleanCoachData(coachData);
        console.log(coachData);

        // Insert in MongoDB
        const newCoach = await Coach.create({
          ...coachData,
        });

        console.log("COACH INSERTED:", newCoach);
      }

      // Log the progress
      console.log(`Migrated ${coaches.length} records (Offset: ${offset})`);

      // Increase offset for the next batch
      offset += batchSize;

      // Optional: add a small delay between batches to reduce load
      await new Promise((resolve) => setTimeout(resolve, 5000));
      //hasMoreRecords = false;
    }
  } catch (error) {
    console.error("Error migrating coaches: ", error);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

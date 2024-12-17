import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.log("Could not connect to MongoDB: ", error);
    process.exit(1);
  }
};

export default connectToDb;

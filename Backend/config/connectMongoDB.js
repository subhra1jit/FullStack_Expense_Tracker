import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("The application is successfully connected to mongoDB server");
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;

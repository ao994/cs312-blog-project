import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from 'mongoose';

const uri = process.env.ATLAS_URI || "";

try {
  // Connect the client to the server
  await mongoose.connect(uri);
} catch(err) {
  console.error(err);
}


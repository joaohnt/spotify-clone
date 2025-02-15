import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://jpedrooocg:X9Xf0uLN631B9JiT@spotify.3vzrs.mongodb.net/?retryWrites=true&w=majority&appName=spotify";

const client = new MongoClient(URI);

export const db = client.db("spotify");

//const songCollection = await db.collection("songs").find({}).toArray();
console.log(db);

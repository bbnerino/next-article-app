import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://admin:qwer1234@a99le.qfeifc0.mongodb.net/?retryWrites=true&w=majority";
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connectDB: any;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}

export { connectDB };

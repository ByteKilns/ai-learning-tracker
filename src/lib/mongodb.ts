import { MongoClient, type Db } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function createClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI environment variable is not set");
  }
  return new MongoClient(uri).connect();
}

let productionClientPromise: Promise<MongoClient> | undefined;

function getClientPromise(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = createClientPromise();
    }
    return global._mongoClientPromise;
  }
  if (!productionClientPromise) {
    productionClientPromise = createClientPromise();
  }
  return productionClientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db("ai_learning_tracker");
}

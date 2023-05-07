import { MongoClient, Db } from "mongodb";

const dbUrl = `mongodb+srv://luisaAdmin:${process.env
  .MONGODB_PASS!}@portfolio.hnogoqe.mongodb.net`;

async function connectToDatabase(): Promise<Db> {
  const client = await MongoClient.connect(dbUrl);
  return client.db("portfolio");
}

export async function getDataFromDatabase(
  collectionName: string
): Promise<any[]> {
  const db = await connectToDatabase();
  const data = await db.collection(collectionName).find({}).toArray();

  return data;
}

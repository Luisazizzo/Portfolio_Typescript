import { MongoClient } from "mongodb";

const dbUrl = `mongodb+srv://luisaAdmin:${process.env
  .MONGODB_PASS!}@portfolio.hnogoqe.mongodb.net`;

export async function getDataFromDatabase(
  collectionName: string
): Promise<any[]> {
  const client = await MongoClient.connect(dbUrl);
  const data = await client
    .db("portfolio")
    .collection(collectionName)
    .find({})
    .toArray();
  await client.close();

  return data;
}

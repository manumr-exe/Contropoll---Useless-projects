import { Client, Databases } from "appwrite";

const client = new Client();
const DB_ID = "6726461e002a16c71054";
const COLLECTION_ID = "6726462500067342fee9";

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6726457a001941bf02f8");

export const databases = new Databases(client);

export { client, DB_ID, COLLECTION_ID };
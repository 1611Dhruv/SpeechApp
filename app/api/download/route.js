import { NextResponse } from "next/server";
import { getSession } from '@auth0/nextjs-auth0';
import { Readable } from "stream";
import fs from 'fs';
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://lliangthomas:1JXpWCXDBSoZOp0S@madhackscluster.9ecahxo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "MadHacksDB";
const colName = "fs.files";

export async function GET(req) {
  try {
    const params = req.nextUrl.searchParams;
    const paramFid = new mongodb.ObjectId(params.get("fid"));
    
    const { user } = await getSession();
    if (!user) {
      return Response.json({ success: false });
    }

    await client.connect();
    const db = client.db(dbName);
    const bucket = new mongodb.GridFSBucket(db);

    const cursor = db.collection(colName).find({
        _id: paramFid,
        metadata: { user: user.email }
    });
    // bucket.openDownloadStream(paramFid)
    //     .pipe(fs.createWriteStream("data/" + params.get("fid") + ".mp4"));
    
    const userCursor = db.collection("Users").find({
        fid: paramFid,
        user: user.email
    });
    
    const arr = await cursor.toArray();
    const userArr = await userCursor.toArray();
    if (arr === null || userArr == null) {
        return Response.json({status:404})
    }

    return Response.json({ data:userArr }, {status:200})
  } catch (err) {
    console.log(err.stack);
  }
}

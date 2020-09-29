const { MongoClient } = require("mongodb");

const mrRobotRepo = require('./repos/mrRobotRepo');
const data = require('./mrRobot.json');

const url = 'mongodb://localhost:27017';
const dbName = 'mrRobot';


async function main() {
    const client = new MongoClient(url);
    await client.connect();

    const admin = client.db(dbName).admin();
    const results = await mrRobotRepo.loadData(data);
    console.log(results.insertedCount, results.ops);
    // console.log(await admin.serverStatus());
    console.log(await admin.listDatabases());
}

main();
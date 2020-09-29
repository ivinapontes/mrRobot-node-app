const { MongoClient } = require("mongodb");

function mrRobotRepo() {
    const url = 'mongodb://localhost:27017';
    const dbName = 'mrRobot';

    function loadData(data) {
        return new Promise( async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
                await client.connect();
                const db = client.db(dbName);
                results = await db.collection('mrRobotsEps').insertMany(data);
                
                resolve(results);
            } catch (e) {
                reject(e)
            }
        })
    }
    return {loadData}
}

module.exports = mrRobotRepo();
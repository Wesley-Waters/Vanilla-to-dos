const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://wesleyswaters:kIng_3825@vanilla-to-do.vj2flij.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Connected to Mongo DB!');
  }
  catch (err) {
    console.log(err);
  }
  finally {
    await client.close();
  }
}

run();
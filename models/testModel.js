const { Pool } = require('pg');

const PG_URI = 'postgres://gchrpjak:eXFlgb6_B6lFOtxoX-SpEDdHZ3fcMdhO@mahmud.db.elephantsql.com/gchrpjak';

// Create pool
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}
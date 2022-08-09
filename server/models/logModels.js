//server/models/logModels.js
const {Pool} = require('pg');

const PG_URI = 'postgres://hqpwjwkl:ltuTK2jZP0Ib6poDCHiHvziH3mQSk25L@heffalump.db.elephantsql.com/hqpwjwkl';

//create a new pool with the above connection string
const pool = new Pool({
    connectionString: PG_URI,
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
}
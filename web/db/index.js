const pg = require('pg');
var fs = require('file-system');
const log = require('node-logger');
//Need to add local connection details
const connectionString = process.env.DATABASE_URL;
console.log("CONNECTION STRING: ",connectionString)
const bodyParser = require('body-parser');
const client = new pg.Client({
  connectionString: connectionString
});
client
  .connect()
  .then(() => {
    console.log(
      `Connected To ${client.database} at ${client.host}:${client.port}`
    );
  })
  .catch((err) => console.error(err));

module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback);
  }
};

//example use of query function below
const query = {
  // give the query a unique name
  name: 'fetch-user',
  text: 'SELECT * FROM user WHERE id = $1',
  values: [1]
};

//example test db function
// client
//   .query('SELECT NOW() as now')
//   .then(data => {
//     console.log('This is our response Data => ', data);
//   })
//   .catch(err => {
//     console.error(err);
//   });


// get for homepage
function load(callback) {
  client
    .query('SELECT * FROM songs')
    .then(data => {
      callback(data);
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports.load = load;
module.exports.client = client;


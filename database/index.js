// const pg = require("pg");
// var fs = require("file-system");
// const log = require("logger");
// //Need to add local connection details
// const connectionString = process.env.DATABASE_URL;
// const bodyParser = require("body-parser");
// const client = new pg.Client({
//   connectionString: connectionString
// });
// client
//   .connect()
//   .then(() => {
//     log.info(
//       `Connected To ${client.database} at ${client.host}:${client.port}`
//     );
//   })
//   .catch(log.error);
// module.exports = {
//   query: (text, params, callback) => {
//     return client.query(text, params, callback);
//   }
// };
// //example use of query function below
// const query = {
//   // give the query a unique name
//   name: "fetch-user",
//   text: "SELECT * FROM user WHERE id = $1",
//   values: [1]
// };
// //example test db function
// client
//   .query("SELECT NOW() as now")
//   .then(data => {
//     console.log("This is our response Data => ", data);
//   })
//   .catch(err => {
//     console.error(err);
//   });
// // module.exports.selectAll = selectAll;

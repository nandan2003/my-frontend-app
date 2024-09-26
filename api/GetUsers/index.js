const sql = require('mssql');

const config = {
  user: 'nandan',
  password: 'Doraemon@76',
  server: 'my-web-app-sql-server.database.windows.net', 
  database: 'mywebapp',
  options: {
    encrypt: true, // Use this if you're on Azure
  },
};

module.exports = async function (context, req) {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM Users`;
    
    context.res = {
      status: 200,
      body: result.recordset
    };
  } catch (err) {
    context.res = {
      status: 500,
      body: `Error: ${err}`
    };
  }
};

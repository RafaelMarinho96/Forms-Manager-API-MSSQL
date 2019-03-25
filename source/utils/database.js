var sql = require("mssql");

var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'sa',
        password: 'c45dm@5102',
        server: 'localhost\\SQLEXPRESS',
        database: 'SAAS',
        port: 1433
    });
 
    return conn;
};

module.exports = connect;
const mssql = require('mssql');
const connection = require('./database');

async function select(query){
    const conn = await connection.connectDB;
    const request = new mssql.Request(conn);
    request.query(query, (err, result) => {

        if(err){
            console.log(err)
        }
            
        console.log(result)
    });
}

module.exports = {
    select
}
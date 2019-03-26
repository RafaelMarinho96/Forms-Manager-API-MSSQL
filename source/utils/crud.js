const sql = require('mssql');
const conn = require('./database')();

function create(){
    return new Promise((resolve, rejected) => {
        conn.connect().then(() => {
            const sqlTransaction = new sql.Transaction(conn);
        })
    })
}

function read(query){
    return new Promise((resolve, rejected) => {
        conn.connect().then(() => {
            const sqlRequest = new sql.Request(conn);
    
            sqlRequest.query(query).then((recordset) => {
                conn.close();
                resolve(recordset.recordset);
            }).catch((err) => {
                conn.close();
                rejected(err);
            })
        })
        .catch((err) => {
            conn.close();
            console.log(err)
            rejected(err);
        })
    })
}

function update(){
    
}

module.exports = {
    create,
    read,
    update
}
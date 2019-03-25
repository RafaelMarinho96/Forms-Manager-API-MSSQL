const sql = require('mssql');
const conn = require('./database');

function create(){
    
}

function read(query){
    conn.connect().then(() => {
        const sqlRequest = sql.Request(conn);

        sqlRequest.query(query).then((recordset) => {
            conn.close();
            console.log(recordset.recordset)
            return recordset.recordset;
        }).catch((err) => {
            conn.close();
            return err;
        })
    })
    .catch((err) => {
        conn.close();
        return err;
    })
}

function update(){
    
}

module.exports = {
    create,
    read,
    update
}
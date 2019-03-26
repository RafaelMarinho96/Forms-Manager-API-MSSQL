const sql = require('mssql');
const conn = require('./database')();

function create(parameters, query){
    return new Promise((resolve, rejected) => {
        conn.connect().then(() => {
            const sqlRequest = new sql.Request(conn);

            parameters.forEach(function(p) {
                sqlRequest.input(p.name, p.sqltype, p.value);
            });

            sqlRequest.query(query, function(err,result){
                if(err){
                    conn.close();
                    console.log("error while querying database -> "+err);
                    rejected(err)
                }
                else{
                    conn.close();
                    resolve(result)
                }
            });
                
        }).catch((err) => {
            conn.close();
            rejected('Error while insert data -> ' + err);
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
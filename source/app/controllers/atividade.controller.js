const sql = require('mssql')
const crud = require('../../utils/crud');

var config = {
    user: 'sa',
    password: 'c45dm@5102',
    server: 'localhost\\SQLEXPRESS',
    database: 'SAAS',
    port: 1433
}

async function selectAll(req, res){
    crud.read('select * from usuario');
    res.send('ok')
}

async function insertNew(req, res){
    try {
        const {ID_ATIVIDADE, ID_CLIENTE, ID_USUARIO, DATA, CHAMADO, DESCRICAO, DESCRICACO_DETALHE} = req.body;
        var conn = new sql.ConnectionPool(config);
        var request = new sql.Request(conn);

        conn.connect(function (err) {
            request.input("ID_CLIENTE", sql.VarChar(100), "teste");
            request.input("ID_USUARIO", sql.VarChar(100), "teste");

            request.query("INSERT INTO CLIENTE (id_cliente, nome,servidor,endereco) VALUES (1,'teste','teste','teste')",function(err,result){
                if(err){
                    console.log("error while querying database -> "+err);
                    res.send(err);
                }
                else{
                    res.send(result);
                    sql.close();
                }
            });
        })

    } catch (err) {
        return res.status(400).send(err);
    }
}

module.exports = {
    selectAll
}
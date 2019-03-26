const sql = require('mssql')
const crud = require('../../utils/crud');

function selectAll(req, res){
    crud.read('select * from CLIENTE').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
}

function insertNew(req, res){
    const {NOME, ID_STATUS} = req.body;

    var parameters = [
        { name: 'NOME', sqltype: sql.VarChar(50), value: NOME},
        { name: 'ID_STATUS', sqltype: sql.Int, value: ID_STATUS}
    ];
  
    crud.create(parameters,'insert into CLIENTE (NOME, ID_STATUS) values (@NOME, @ID_STATUS)').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
}

module.exports = {
    selectAll,
    insertNew
}
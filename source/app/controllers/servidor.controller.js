const sql = require('mssql')
const crud = require('../../utils/crud');

function selectAll(req, res){
    crud.read('select * from servidor').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
}

function insertNew(req, res){
    const {ID_PRODUTO, ID_STATUS, ENDERECO, SERVIDOR, HOTFIX} = req.body;

    var parameters = [
        { name: 'ID_PRODUTO', sqltype: sql.Int, value: ID_PRODUTO},
        { name: 'ID_STATUS', sqltype: sql.Int, value: ID_STATUS},
        { name: 'ENDERECO', sqltype: sql.VarChar(30), value: ENDERECO},
        { name: 'SERVIDOR', sqltype: sql.VarChar(10), value: SERVIDOR},
        { name: 'HOTFIX', sqltype: sql.VarChar(15), value: HOTFIX}
    ];
  
    crud.create(parameters,'insert into servidor (ID_PRODUTO, ID_STATUS, ENDERECO, SERVIDOR, HOTFIX) values (@ID_PRODUTO, @ID_STATUS, @ENDERECO, @SERVIDOR, @HOTFIX)').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
}

module.exports = {
    selectAll,
    insertNew
}
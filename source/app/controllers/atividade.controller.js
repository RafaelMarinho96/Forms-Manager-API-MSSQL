const sql = require('mssql')
const crud = require('../../utils/crud');

function selectAll(req, res){
    crud.read('select * from atividade').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
}

function insertNew(req, res){
    const {ID_CLIENTE, ID_USUARIO, CHAMADO, DESCRICAO, DESCRICAO_DETALHE, TIPO, ATUALIZACAO} = req.body;

    var parameters = [
        { name: 'ID_CLIENTE', sqltype: sql.Int, value: ID_CLIENTE},
        { name: 'ID_USUARIO', sqltype: sql.Int, value: ID_USUARIO},
        { name: 'DATA', sqltype: sql.VarChar, value: Date.now()},
        { name: 'CHAMADO', sqltype: sql.VarChar(10), value: CHAMADO},
        { name: 'DESCRICAO', sqltype: sql.VarChar(200), value: DESCRICAO},
        { name: 'DESCRICAO_DETALHE', sqltype: sql.VarChar(400), value: DESCRICAO_DETALHE},
        { name: 'TIPO', sqltype: sql.VarChar(20), value: TIPO},
        { name: 'ATUALIZACAO', sqltype: sql.Int, value: ATUALIZACAO}
    ];
  
    crud.create(parameters,'insert into atividade (ID_CLIENTE, ID_USUARIO, CHAMADO, DESCRICAO, DESCRICAO_DETALHE, TIPO, ATUALIZACAO) values (@ID_CLIENTE, @ID_USUARIO, @CHAMADO, @DESCRICAO, @DESCRICAO_DETALHE, @TIPO, @ATUALIZACAO)').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
}

module.exports = {
    selectAll,
    insertNew
}
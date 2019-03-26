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
    const {ID_ATIVIDADE, ID_CLIENTE, ID_USUARIO, DATA, CHAMADO, DESCRICAO, DESCRICAO_DETALHE, TIPO, ATUALIZACAO} = req.body;
    
    console.log("O valor é " + ID_ATIVIDADE);

    var parameters = [
        { name: 'ID_ATIVIDADE', sqltype: sql.Int, value: ID_ATIVIDADE},
        { name: 'DESCRICAO', sqltype: sql.VarChar(200), value: "ID_ATIVIDADE"},
        { name: 'DESCRICAO_DETALHE', sqltype: sql.VarChar(400), value: "ID_ATIVIDADE"}
      ];
  

    crud.create(parameters,'insert into atividade (ID_ATIVIDADE, DESCRICAO, DESCRICAO_DETALHE) values (@ID_ATIVIDADE, @DESCRICAO, @DESCRICAO_DETALHE)').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
}

module.exports = {
    selectAll,
    insertNew
}
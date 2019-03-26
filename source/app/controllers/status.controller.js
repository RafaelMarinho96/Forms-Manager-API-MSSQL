const sql = require('mssql')
const crud = require('../../utils/crud');

function selectAll(req, res){
    crud.read('select * from tb_status').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
}


module.exports = {
    selectAll
}
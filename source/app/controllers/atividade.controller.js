const sql = require('mssql')
const crud = require('../../utils/crud');

function selectAll(req, res){
    crud.read('select * from usuario').then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    selectAll
}
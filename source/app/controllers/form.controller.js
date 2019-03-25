const query = require('../../utils/querys');

async function selectAllForms(req, res){
    try {
        const result = query.select('select * from form');

        return res.send('ok')
    } catch (err) {
        return res.status(400).send(err);
    }
}

module.exports = {
    selectAllForms
}
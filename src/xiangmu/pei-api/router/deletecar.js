const db = require('../utils/pei_db.js')
const apiReulst = require('../utils/apiResult.js')



module.exports = {
    reg(app) {
        app.get('/deletecardata/:id/:user', async function (req, res) {
            let Id = req.params.id;
            console.log(Id);
            let username = req.params.user;
            console.log(username);
            console.log(typeof Id);
            let deletedata = await db.deleteOne('cardata', { Id: parseInt(Id),username:username });
            res.send(apiReulst(deletedata.result.n > 0, deletedata.result, '哈哈'));
        })
    }
}

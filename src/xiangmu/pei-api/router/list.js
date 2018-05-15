const db = require('../utils/pei_db');
const apiReulst = require('../utils/apiResult');

module.exports={
  reg(app){
    app.get('/list',async function(req,res){
        let data = await db.select('list');
        res.send(apiReulst(data));
    });
  }
}
const db = require('../utils/pei_db');
const apiReulst = require('../utils/apiResult');

module.exports={
  reg(app){
    app.post('/list',async function(req,res){
        console.log(req.body.list_id)
        if(req.body.list_id){
            let id = Number(req.body.list_id)
            let data = await db.select('list',{id});
            res.send(apiReulst(data));
        }else{
            let data = await db.select('list');
            res.send(apiReulst(data));
        }
    });
  }
}
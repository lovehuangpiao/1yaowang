const db = require('../utils/pei_db');
const apiReulst = require('../utils/apiResult');

module.exports={
  reg(app){
    app.get('/cardata/:username',async function(req,res){
        let username = String(parseInt(req.params.username));
      let data = await db.select('cardata',{username:username});
      res.send(apiReulst(data.length>1,data));
    });
  }
}

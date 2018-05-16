const db = require('../utils/pei_db');
const apiReulst = require('../utils/apiResult');

module.exports={
  reg(app){
    app.get('/todayspecial',async function(req,res){
      let data =await db.select('todaySpecial');
      res.send(apiReulst(data.data.length>1,data));
    });
  }
}

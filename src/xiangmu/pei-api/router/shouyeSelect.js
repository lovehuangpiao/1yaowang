const db = require('../utils/pei_db');
const apiReulst = require('../utils/apiResult');

module.exports={
  reg(app){
    app.get('/shouyeSelect',async function(req,res){
        let data = await db.select('index');
        console.log(data)
        res.send(apiReulst(data.data.length>1,data));
    });
  }
}

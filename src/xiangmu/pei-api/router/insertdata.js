const db = require('../utils/pei_db');
const apiReulst = require('../utils/apiResult');

module.exports = {
  reg(app){
    app.post('/insertdata',async function(req,res){
      // console.log(req.body);
      if(Object.keys(req.body).length>0){
        let data = await db.insert('todaySpecial', [req.body])
        console.log('插入');
        res.send(apiReulst(true,data));
      }else{
        res.send(apiReulst(false));
      }
    });
  }
}

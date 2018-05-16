const db = require('../utils/pei_db.js')
const apiReulst= require('../utils/apiResult.js')



module.exports ={
  reg(app){
    app.get('/deletedata/:id',async function(req,res){
      let Id = req.params.id;
      console.log(Id);
      let deletedata = await db.deleteOne('todaySpecial',{Id:parseInt(Id)});
      res.send(apiReulst(deletedata.result.n>0,deletedata.result,'哈哈'));
    })
  }
}

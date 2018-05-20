const apiResult = require('../utils/apiResult');
const db = require('../utils/pei_db');


module.exports = {
  reg(app){
    app.post('/insertcardata',async function(req,res){
      console.log(req.body)
      let backdata = [];
      if (Object.keys(req.body).length > 0) {
        let data = await db.select('cardata',{id:parseInt(req.body.id)});
        console.log(data);
        let rdata = data.data || [];
        if(rdata.length>0){
          for (let i=0;i<rdata.length;i++) {
            if (req.body.id == rdata[i].id) {
              if (req.body.qty && rdata[i].qty) {
                console.log('其实是有qty的');
                req.body.qty = parseInt(req.body.qty) + parseInt(rdata[i].qty);
                backdata = await db.update('cardata', {id:parseInt(req.body.id)},req.body);
                console.log('更新');
                break;
              }
            }
          }
        }else{
          backdata = await db.insert('cardata', [req.body]);
          console.log('插入');
        }
        res.send(apiResult(true, backdata));
      } else {
        res.send(apiResult(false));
      }
    });
  }
}

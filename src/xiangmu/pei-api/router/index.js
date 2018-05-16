const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyparser.urlencoded({extended:true}));

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname+'../../')))

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,auth,Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.sendStatus(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

const getclassdata = require('./class')
const class1 = require("./class1")

const user = require('./user.js')

const makedatatodb = require('./makedatatodb.js')
const todaySpec = require('./todaySpecial.js')
const deletedata = require('./deletedata.js');
const insertdata = require('./insertdata.js');

const insertcardata = require('./insertcardata.js');
const deletecardata = require('./deletecar.js');
const cardata = require('./cardata.js');

const shouyeSelect = require("./shouyeSelect.js");

const list = require("./list")

module.exports = {
  start(_port=88){
    insertcardata.reg(app);
    deletecardata.reg(app);
    cardata.reg(app);
    insertdata.reg(app);
    deletedata.reg(app);
    todaySpec.reg(app);
    getclassdata.reg(app);
    user.reg(app);
    makedatatodb.reg(app);
    cardata.reg(app);
    // deletecar.reg(app);
    shouyeSelect.reg(app);
    class1.reg(app);
    list.reg(app)

    app.listen(_port);
  }
}

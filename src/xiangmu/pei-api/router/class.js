const request = require('request');
const db = require('../utils/pei_db');
const apiResult = require('../utils/apiResult')

module.exports = {
    reg(app){
        app.get('/class', (req, res) => {
            request.get('http://gateway.fangkuaiyi.com/mobile/home/getTailData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1526264639768&signature=****&siteid=9', (error, response, body) => {
                body = JSON.parse(body);
                let bodys = db.insert('index',[body])
                res.send(body);
            })
        })

    }
}


const jwt = require('jsonwebtoken');

/*引入db.js模块*/
const db = require('../utils/pei_db.js');

const apiResult = require('../utils/apiResult.js');

/*验证token*/
const filter = (req, res, next) => {
    let token = req.headers['auth'];
    if(!token){
        res.send(apiResult(false, {}, 'unauth'));
    } else {
        jwt.verify(token, '123456', (error, result) => {
            if(error){
                res.send(apiResult(false, error, 'unauth'))
            } else {
                next();
            }
        })
    }
}


/*导出user.js*/
module.exports = {
    reg(app){
        app.post('/login', async (req,res) =>{
            console.log(req.body);
            let username = req.body.username;
            let password = req.body.password;
            console.log(username,password,typeof req.body.check);
            
            let result = await db.select('user',{username,password});
            
            if(result.status){
                let token = jwt.sign({username},'123456',{expiresIn:0});
                let ar = apiResult(result.status,token,result.data);
                res.send(ar);
                if(req.body.check == "true"){
                    console.log(666)
                    let token = jwt.sign({username},'123456',{expiresIn:60*60*24*7});
                }
            }else{
                res.send(result);
            }
        });

        // 注册
        app.post('/reg',async (req,res)=>{
            // 获取用户数据
            let username = req.body.phone;
            let password = req.body.password;

            // 用户地址：null
            // let address = '';

            // 调用数据库模块
            // 注册之前先查询是否存在
            let result = await db.select('user',{username});
            console.log(result.status);
            if(result.status){
                res.send(apiResult(false));
            }else{
                let result = await db.insert('user',[{username,password}]);
                console.log(result);
                res.send(result);
            }
        });

        app.get('/user', filter, async (req, res) => {
            let result = await db.select('user');
            res.send(result);
        });

        app.post('/getStatus', filter, async (req,res) => {
            res.send(apiResult(true));
        })
    }
}
const mongodb = require('mongodb');
const apiReulst = require('./apiResult')
const mc = mongodb.MongoClient;

var db = null;

mc.connect('mongodb://localhost:27017', (error, client) => {
    db = client.db('1yaowang');
});

module.exports = {
    //eg:select('user',{name:"kimpee"})
    async select(_collection, _condition = {}){
        try{
            let items =  await db.collection(_collection).find(_condition).toArray();
            return apiReulst(items.length >0, items);
        } catch(error){
            return apiReulst(false, error);
        }
    },
    //eg:insert('user',"[{name:"kimpee",age:16}]")
    async insert(_collection,dataarr=[]){
      try{
        let items = await db.collection(_collection).insertMany(dataarr);
        return items;
      }catch(err){
        console.error(err);
      }
    },
    /**
     * 只能更新一个
     * @param  {[type]}  _collection [集合]
     * @param  {[type]}  _condition  [条件,对象]
     * @param  {[type]}  _data       [数据,对象]
     * @return {Promise}             [返回一个promise对象]
     */
    async update(_collection,_condition,_data){
      try{
        let item = await db.collection(_collection).update(_condition,_data);
        // console.log(item);
        return item;
      }catch(err){
        console.error(err);
      }
    },
    /**
     * 删除数据
     * @param  {[string]}  _collection [集合的名字]
     * @param  {[type]}  _condition  [条件]
     * @return {Promise}             [description]
     */
    async deleteOne(_collection,_condition){
      try{
        let item = await db.collection(_collection).remove(_condition);
        return item;
      }catch(err){
        console.error(err);
      }
    }
}

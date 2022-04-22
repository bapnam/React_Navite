

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var Ten
var t;
var res;

async function call(){
    
    await MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var query = { address: "Park Lane 38" };
        dbo.collection("customers").find(query).toArray(async function(err, result) {
          if (err) throw err;
          res=result;
          console.log(res);
          
          db.close();
          
          t = Ten;
          console.log('ten1: ' + t);
          console.log(result[0].name);
        });
      });
    
    console.log('ten: ' + t);
}





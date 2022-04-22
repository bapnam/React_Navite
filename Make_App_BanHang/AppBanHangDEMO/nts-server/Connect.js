import react, {useState}from 'react';

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// (async function() {
//   const client = new MongoClient(url);
//   try {
//     await client.connect();
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var query = { address: "Park Lane 38" };
//     dbo.collection("customers").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       Ten = result[0].name;
//       console.log('---- ' + Ten);
//       client.close();
      
//     })
    
//   } catch (err) {
//     console.log(err.stack);
//   }

//   // Close connection
//   client.close();
// })();
const [useNam] = useState(true);
this.state ={Bien}

var Ten = 'nam';
console.log(Ten);
var nam;
const getTen = async () => {
  

  MongoClient.connect(url, async function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var query = { address: "Park Lane 38" };
      dbo.collection("customers").find(query).toArray(function (err, result) {
          if (err) throw err;
          console.log(result);
          Ten = result[0].name;
          nam = Ten;
          console.log('---- ' + Ten);
          db.close();
         
      });
  });
};

var ten = getTen();
console.log('Ten: ' + ten);
console.log("1. ", nam);
console.log(Ten);

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = [
//       { name: 'John', address: 'Highway 71'},
//       { name: 'Peter', address: 'Lowstreet 4'},
//       { name: 'Amy', address: 'Apple st 652'},
//       { name: 'Hannah', address: 'Mountain 21'},
//       { name: 'Michael', address: 'Valley 345'},
//       { name: 'Sandy', address: 'Ocean blvd 2'},
//       { name: 'Betty', address: 'Green Grass 1'},
//       { name: 'Richard', address: 'Sky st 331'},
//       { name: 'Susan', address: 'One way 98'},
//       { name: 'Vicky', address: 'Yellow Garden 2'},
//       { name: 'Ben', address: 'Park Lane 38'},
//       { name: 'William', address: 'Central st 954'},
//       { name: 'Chuck', address: 'Main Road 989'},
//       { name: 'Viola', address: 'Sideway 1633'}
//     ];
//     dbo.collection("customers").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("Number of documents inserted: " + res.insertedCount);
//       db.close();
//     });
//   });

// MongoClient.connect(url, function(err, db) {
// if (err) throw err;
// var dbo = db.db("mydb");
// var myobj = [
//     { _id: 154, name: 'Chocolate Heaven'},
//     { _id: 155, name: 'Tasty Lemon'},
//     { _id: 156, name: 'Vanilla Dream'}
//   ];
// dbo.collection("products").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     db.close();
//   });
// });


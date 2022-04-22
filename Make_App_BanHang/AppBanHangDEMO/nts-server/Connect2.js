const mongoose = require('mongoose');
var url = "mongodb://localhost:27017/mydb";

//main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(url).then(
      () => {console.log("Successfully Connected")},
      err => {console.log("err: ", err)}
  );
}

const db = main();

const kittySchema = new mongoose.Schema({
    name: String
  });

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
//silence.save();
silence.find({'name':'Silence'}, (err, silence) => {
    if(err) throw err;
    console.log(silence);
} )
// silence.find({name:'Silence'}).exec(function(err, silence) {
//     if (err) throw err;
     
//     console.log(silence);
//  });




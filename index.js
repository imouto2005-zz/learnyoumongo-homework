var mongo = require('mongodb').MongoClient
var targetAge = process.argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) return console.err(err)

  var parrots = db.collection('parrots')
  parrots.find({age: {$gt: +targetAge}}, {name: 1, age: 1, _id: 0}).toArray(function(err, documents) {
    if (err) return console.err(err)
    console.log(documents);
  })
  db.close()
})

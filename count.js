var mongo = require('mongodb').MongoClient
var targetAge = process.argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) return console.err(err)
  var parrots = db.collection('parrots')
  parrots.count({age: {$gt: +targetAge}}, function(err, count) {
    if (err) return console.err(err)
    console.log(count);
    db.close()
  })
})

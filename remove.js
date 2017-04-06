var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) return console.err(err)
  var collection = db.collection(process.argv[3])
  collection.remove({ _id: process.argv[4] }, function(err, data) {
    if (err) return console.err(err)
    db.close()
  })
})

var mongo = require('mongodb').MongoClient
var firstName = process.argv[2]
var lastName = process.argv[3]

var obj = {
  firstName: firstName,
  lastName: lastName
}

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) return console.err(err)
  var docs = db.collection('docs')
  docs.insert(obj, function(err, data) {
    if (err) return console.err(err)
    console.log(JSON.stringify(obj))
    db.close()
  })
})

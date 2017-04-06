var mongo = require('mongodb').MongoClient
console.log(process.argv)

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) return console.err(err)
  var users = db.collection('users')
  users.update({ "username" : "tinatime" },
    {
      $set: { "age": 40 },
    }, function(err, data) {
    if (err) return console.err(err)
    db.close()
  })
})

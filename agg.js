var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) return console.err(err)
  var prices = db.collection('prices')
  prices.aggregate([
    { $match: { size: process.argv[2]}},
    { $group: {
      _id: 'average',
      average: { $avg: '$price'}
    }}
  ]).toArray(function(err, results) {
    if (err) return console.err(err)
    console.log(results[0].average.toFixed(2));
    db.close()
  })
})

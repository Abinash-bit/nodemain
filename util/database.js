const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

MongoClient.connect(
    'mongodb+srv://abinash-bit:Abinash@cluster0.orm6zuo.mongodb.net/?retryWrites=true&w=majority'
    )

       .then(result => {
        console.log('Connected');
       })

       .catch(err => {
        console.log(err);
       });
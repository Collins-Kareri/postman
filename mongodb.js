/*const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName);

    db.collection('users').findOne({ _id: new ObjectID("5e4fa31fa02d070e59606c74") },
        (error, user) => {
            if (error) {
                return console.log("Unable to fetch user");
            }
            console.log(user);
        });

    /*db.collection('users').One({
        name: 'Cat',
        city: 'Seattle',
        age: 22,
        gender: 'female'
    });
});
*/
const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

const url = 'mongodb://localhost:27017/nucampsite';
const connect = mongoose.connect(url, { //similar to client meths
    useCreateIndex: true, // dep warnings see the links provided for more info
    useNewUrlParser: true, //
    useUnifiedTopology: true //
});

connect.then(() => {

    console.log('Connected correctly to server');

    const newCampsite = new Campsite({ //new model
        name: 'React Lake Campground', //docs fields
        description: 'test'
    });

    newCampsite.save() //mongoose method
    .then(campsite => { //sucssed then saved
        console.log(campsite);
        return Campsite.find(); //cap C (is model)
    })
    .then(campsites => { //that array
        console.log(campsites);
        return Campsite.deleteMany();
    })
    .then(() => {
        return mongoose.connection.close(); //close connection
    })
    .catch(err => { //catch block
        console.log(err);
        mongoose.connection.close();
    });
});
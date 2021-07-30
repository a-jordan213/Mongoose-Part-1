const mongoose = require('mongoose'); //1st imprt mongoose
const Schema = mongoose.Schema; //making shorthand to schema, not req

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true, //req
        unique: true //no 2 docs should have same name
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true //cause mon to create 2 at and updated with times
});

const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;
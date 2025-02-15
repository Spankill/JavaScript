const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
},
    {
        versionKey: false, //__v ocultamos la version

    });

const User = mongoose.model('User', userSchema);

module.exports = User;
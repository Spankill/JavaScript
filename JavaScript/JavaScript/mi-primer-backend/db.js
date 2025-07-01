const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            //usenewUrlParser: true,
            //useUnifiedTopology: true
        });
        console.log('Conexion a MongoSB Con EXITO')
    }
    catch (error) {
        console.log('Error en la conexion a mongoDB:', error)
        process.exit(1)
    }
};


module.exports = connectDB;
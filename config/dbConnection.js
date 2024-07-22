const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DATABASE CONNECTED: ", 
            connect.Connection.host,
            connect.Connection.name
         );
    }catch(err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;
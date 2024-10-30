const mongoose = require('mongoose');

const MONGODB = async () => {
    try
    {
        const MONGOURI = process.env.MONGOURI;
        if(!MONGOURI) throw new Error("Connection string not provided");
        await mongoose.connect(process.env.MONGOURI);
        console.log("Connected to MongoDB");
    }
    catch(err)
    {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = MONGODB;
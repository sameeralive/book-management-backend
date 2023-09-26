const mongoose = require("mongoose");
const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log('connected');
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = dbConnect;
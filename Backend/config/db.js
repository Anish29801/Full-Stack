const mongoose = require("mongoose");

const connToDB = () =>{
    mongoose.connect(process.env.URL)
.then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log(err.message);
    process.exit(1);
});
}

module.exports = connToDB;
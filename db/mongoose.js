const mongoose = require('mongoose');
//const dbConfig=config.get('matthias.dbConfig');

mongoose.Promise = global.Promise;
//Local Connect

mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true, useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to MongoDB successfully ");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

//Global Connect
//  mongoose.connect('mongodb+srv://matthias:Matuks123.4567@siracluster.fo6pt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//     useCreatendex: true, 
//     useFindAndModify: false, 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// }).then(() => {
//     console.log("Connected to MongoDB successfully");
// }).catch((e) => {
//     console.log("Error while attempting to connect to MongoDB"+e);
//     console.log(e);
// }); 

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};
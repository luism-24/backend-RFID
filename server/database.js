const mongoose = require('mongoose'); 
const URI = 'mongodb://root:asd$123*@ds263639.mlab.com:63639/backend-rfid'; 

mongoose.connect(URI, {useNewUrlParser: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err)
    );
module.exports = mongoose; 
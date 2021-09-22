const mongoose = require('mongoose')

const { STUDENT_PARTNER_MONGODB_HOST, STUDENT_PARTNER_MONGODB_DB } = process.env;
const MONGODB_URI = process.env.MONGODB_URI = `mongodb://${STUDENT_PARTNER_MONGODB_HOST}/${STUDENT_PARTNER_MONGODB_DB}`;

mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));



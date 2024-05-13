const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const bcrypt = require('bcrypt');
const detailschema = new Schema({
    FirstName : {type : String, required: true},
    LastName : {type : String, required: true},
    Birthday : {type : String, required: true},
    Gender : {type: String, enum: ['male', 'female', 'other']},
    PhoneNo : {type : Number},
    Email : {type : String},
    Password : {type : String},
    ConfirmPassword : {type : String}
});

detailschema.pre("save" ,async function(next){                
    this.Password = await bcrypt.hash(this.Password , 10);     
    this.ConfirmPassword = undefined;                      
    next();                        
})

const Detail = new mongoose.model('Detail' , detailschema);
module.exports = Detail;
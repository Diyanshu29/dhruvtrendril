const express = require('express');
const app = express();
const mongoose = require('mongoose');
const detail = require('./model/schema')
const bcrypt = require('bcrypt')

app.listen(5000, () => {
    console.log('Listening on port 5000');
})
const uri = "mongodb+srv://user:12345@cluster0.kglhfuf.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri)
    .then(() => {
        console.log("Connected to database")
    })
    .catch(err => {
        console.log(err);
    })

app.use(express.json());
app.post('/register', async (req, res) => {
    try {
        const password = req.body.Password;
        const cpassword = req.body.ConfirmPassword;
        if (password === cpassword) {
            const registered = new detail({
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                Birthday: req.body.Birthday,
                Gender: req.body.Gender,
                PhoneNo: req.body.PhoneNo,
                Email: req.body.Email,
                Password: password,
                ConfirmPassword: cpassword,
            })
            await registered.save()
            res.status(200).json({ message: "Registered Successfully" });
        }
        else {
            res.status(200).json({ message: "Password not matching" });
        }
    }
    catch (err) {
        res.status(200).json({ message: err });
    }
})

app.post('/login', async (req, res) => {
    try {
        const email = req.body.Email;
        const password = req.body.Password;
        const findemail = await detail.findOne({ Email: email })
        if(!findemail){
            res.status(404).json({ message: "Enter Valid Email" });
        }
        const isMatch = await bcrypt.compare(password, findemail.Password)
        if (isMatch) {
            res.status(200).json({ message: "LoggedIn Successfully" });
        }
        else {
            res.status(404).json({ message: "Enter Valid Password" });
        }

    } catch (error) {
        res.status(200).json({ message: error });
    }

})

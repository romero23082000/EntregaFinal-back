const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');
const PORT_SERVER = process.env.PORT || 3977;
const {API_VERSION, IP_SERVER, PORT_DB, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN} = require("./config")
const user_route = require("./src/routes/user") 


mongoose.connect(
    `mongodb://${IP_SERVER}:${PORT_DB}/proyect_db`,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err, res)=>{
        if(err){
            throw err
        }else{
            console.log("Success connection to db");
            app.listen(PORT_SERVER, ()=>{
                console.log("#######################")
                console.log("#######API REST #######")
                console.log("#######################")
                console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
            })
        }
    }
)

app.use(express.json());

app.get('/home', (req, res) => res.send("Hola mundo"))

app.use("/api/v1/people", user_route)

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15017122661',
     to: '+573205217199'
   })
  .then(message => console.log(message.sid));
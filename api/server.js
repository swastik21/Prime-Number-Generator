const express = require('express');
const mongoose = require('mongoose');
const Log = require('../models/log');
const PrimeNumberGenerator = require('../engine/prime_number_generator');
const userChoice = require('../utils/user_choice');

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

const dbUri = "your collection uri";
mongoose.connect(dbUri)
.then(() => app.listen(port, ()=> console.log(`Listening on port ${port}..`)))
.catch((err)=> console.log(err));

app.get('/', (req, res) => {
    res.send('Welcome to Prime Number Generator with different algorithms. Give endpoint as generator to use the engine. [NOTE: provide only two values with space-separated and to select the algorithms see proivde the number next to the algorithm, Sieve of Eratosthenes:1, Sieve of Sundaram:2, Sieve of Atkin:3]');
});

app.get('/generator', (req, res)=> {
    try{
        let range = req.query.range;
        let choice = req.query.choice;
        newRange = range.split(' ');

        if(newRange.length > 2 || newRange.length <= 1 || 
            newRange[0] > newRange[1] || newRange[0] < 0 || newRange[1] < 0) throw error;

        const result = userChoice(newRange,choice);

        const log = Log({
            primeNumbers: result[0][0].toString(),
            range: range,
            timeElapsed: `${result[1]}ms`,
            algorithm: result[0][2],
            numberOfPrime: result[0][1].toString()
        });

        log.save()
        .then((result)=> res.status(200).send(result))
        .catch((e)=> console.log(e));
        
    }catch(e){
        e = "Please provide only valid values";
        const responseData = {
            data: null,
            error: true,
            errMessage:e,
        };
        res.status(400).send(JSON.stringify(responseData));
    }
});

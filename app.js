const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message:'Welcome to hte API'
    });
});

app.post('/api/posts', (req, res)=> {
    res.json({
        message:'Post created...'
    })
})

app.post('/api/login', (req, res) =>{
// FAKE user
const user= {
    id:1 ,
    username:'krishna',
    email: 'krishna@gmail.com'
}

    jwt.sign({user}, 'ilovemyself', (err, token) => {
res.json({
    token
});
    });
});

// FORMAT OF TOKEN
// Authorization: Brearer <access_token


// Verify Token
function VerifyToken(req, res, next){
    const brearerHeader = req.headers['authorization'];

    if(typeof brearerHeader !== 'undefined'){

    }else {
        // Forbidden
        res.sendStatus(403);
    }

}

app.listen(5000, () => console.log('Server started on  port 5000'));
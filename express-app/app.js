const express = require('express');
const { useSyncExternalStore } = require('react');
const app = express();


const users = [];


// app.use('/assests',express.static('public'))

// app.get('/users/:username/', (req,res)=> {
//     console.log(req.params.username)
//     res.status(201).end('ended')
// })


// Create 
app.post('/users', (req, res) => {

    const user = {
        id: Date.now(),
        username: 'shazil123',
        age: 20,
        gender: 'Male',
        firstName: 'Shazil',
        lastName: 'Khan'
    }

    users.push(user)
    console.log(users)


    res.status(201).send('Post method ')
} )

// Read
app.get('/users', (req, res) => {





    res.status(200).send('get method  ')
})

// Update
app.put('/users', (req, res) => {
    res.status(200).send('put method')
})


// Delete
app.delete('/users', (req, res) => {
    res.status(204).send('delete method')
} )














app.listen(3000, () => {
    console.log('Server is running on port 3000')
})









// app.use((req, res, next) => {
//     console.log('INSIDE MIDDLEWARE')

//     if(req.path !== '/users') res.end("NOT FOUND")
//         else next()
// })


/**
 * login user,set session,response session id
 */

const sessions = {
    'asdas123':123
}

app.get('/session',(req,res) => {
    console.log('>>>',req)
    res.send(sessions)
})
app.post('/login', (req,res) => {
    //1- credentials validate
    const user = users.find((user) => user.username === req.body.username && user.password === req.body.password)


    //1b- incase of faliure, return error
    if(!user) return res.status(401).send({message:'Invalid credentials'})
    //2- create session id
    const sessionId = Date.now()+Math.random;
    //3- set user session
    sessions[sessionId]= user;
    
    //4- response user with session id
    res.send('Successfully loggedin,session id:' + sessionId)
})


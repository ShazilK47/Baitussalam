const express = require('express')
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



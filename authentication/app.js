const express = require('express')
const app = express()
const bcrypt = require('bcryptjs')
const session = require('express-session');
const jwt = require('jsonwebtoken')
const applicatoin_key = 'applicatoin-secret-key'



app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'simple-secret',
    resave: false,
    saveUninitialized: false
}));


app.set('view engine', 'ejs');

const users = []

const sessionId = jwt.sign({user_id: user.id}, application_key)
app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/register', (req, res) => res.render('register'));
app.post('/register', async(req, res)=>{
    console.log(req)
    const {username, password} = req.body
    console.log(req.body)
    const hashed = await bcrypt.hash(password,10)
    users.push({username, password: hashed})
    res.redirect('/login')
})

app.get('/login', (req, res) => res.render('login'))
app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const user = users.find(u => u.username == username)
     if (user && await bcrypt.compare(password, user.password)) {
        console.log(req.session.user)
        req.session.user = user;
        res.render('dashboard',{user});
    } else {
        res.send('Invalid username or password');
    }
})

app.get('/dashboard', authMiddleware,(req, res) => {
    res.render('dashboard')
})

app.get('/logout', (req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
})

function authMiddleware(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

function isAdmin(req, res, next){
    if(!checkRole(req, 'admin'))return res.redirect('/')
    next()
}

function checkRole(req, rolename){
    const user = users.find(user => user.id === req.session.user.id)
    if(!user) return res.status(400).send({message: 'Bad request'})
    
        return user.role.includes(rolename)
}

app.listen(3000, ()=>{
    console.log('Server is started at Port 3000')
    console.log(users)
})
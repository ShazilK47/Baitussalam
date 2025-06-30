const express = require('express')
const app = express()
const bcrypt = require('bcryptjs')
const session = require('express-session');


app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'simple-secret',
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');

const users = []

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



app.listen(3000, ()=>{
    console.log('Server is started at Port 3000')
    console.log(users)
})
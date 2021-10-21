const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.send('Moanoghar Residential school. Monipur High School and college.')
})



const users = [
    { id: 0, name: 'tinu chakma', age: 21, class: 'honors 1s year', hobby: 'coding', email: 'aspinchakma@gmail.com', phone: '0044983539' },
    { id: 1, name: 'Aspin chakma', age: 21, class: 'honors 1s year', hobby: 'coding', email: 'aspinchakma@gmail.com', phone: '0044983539' },

    { id: 2, name: 'Jibon chakma', age: 21, class: 'honors 1s year', hobby: 'coding', email: 'aspinchakma@gmail.com', phone: '0044983539' },

    { id: 3, name: 'Dipongkar chakma', age: 21, class: 'honors 1s year', hobby: 'coding', email: 'aspinchakma@gmail.com', phone: '0044983539' },

    { id: 4, name: 'shimul chakma', age: 21, class: 'honors 1s year', hobby: 'coding', email: 'aspinchakma@gmail.com', phone: '0044983539' },

    { id: 5, name: 'Rakhi chakma', age: 21, class: 'honors 1s year', hobby: 'coding', email: 'aspinchakma@gmail.com', phone: '0044983539' },

    { id: 6, name: 'Pakhi chakma', age: 21, class: 'honors 1s year', hobby: 'coding', email: 'aspinchakma@gmail.com', phone: '0044983539' },

    { id: 7, name: 'Sohel chakma', age: 21, class: 'honors 1s year', hobby: 'coding', email: 'aspinchakma@gmail.com', phone: '0044983539' },

    { id: 8, name: 'james chakma', age: 21, class: 'honors 1s year', hobby: 'coding', email: 'aspinchakma@gmail.com', phone: '0044983539' },

    { id: 9, name: 'tinu chakma', age: 21, class: 'honors 1s year', hobby: 'coding', email: 'aspinchakma@gmail.com', phone: '0044983539' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(actor => actor.name.toLowerCase().includes(search.toLocaleLowerCase()));
        res.send(searchResult)
    } else {
        res.send(users)
    }


})



app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'oranges', 'banana'])
})

app.get('/fruits/mangos/fozli', (req, res) => {
    res.send('Hello bro from fozli mango')
})



app.get('/users/:id', (req, res) => {

    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.post('/users', (req, res) => {
    console.log('this is post methods', req.body)
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})



app.listen(port, () => {
    console.log('hello from ', port)
})
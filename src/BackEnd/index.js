const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();
app.use(cors());    
app.use(express.json());
app.use(routes);

//app.listen(3001);
const port = 3001;

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
});

//app.get('/usuario', db.getUser);
//app.post('/usuario', db.add);
//app.put('/usuario', db.up);
//app.delete('/usuario/:id', db.delet);
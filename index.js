const express = require('express');
const cors = require('cors')
const app = express();

const corsOption = {
  origin: ['http://localhost:5173'],
};
app.use(cors(corsOption));
const allServices = require('./data.json')
const port = process.env.PORT || 5000;

app.get('/', (req,res)=> {
  res.send('<h1>I am commmming</h1>')
})

app.get('/api/alldata', (req,res)=> {
  res.send(allServices)
})

app.get('/api/alldata/:id', (req,res)=> {
  const id = req.params.id;
  
  const singleService = allServices.find(services => services.id == id)
  res.send(singleService)
})


app.listen(port, ()=> {
  console.log(`Server running on port ${port}`);
})
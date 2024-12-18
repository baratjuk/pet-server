import express from 'express';
import getItems from './routes/getItems.js';
import getItem from './routes/getItem.js';
import addItem from './routes/addItem.js';
import updateItem from './routes/updateItem.js';
import deleteItem from './routes/deleteItem.js';

const app = express()

app.use(express.json());

app.get('/items', getItems);
app.get('/item/:id', getItem)
app.post('/items', addItem);
app.put('/items/:id', updateItem);
app.delete('/items/:id', deleteItem);

let port = process.env.API_PORT
app.listen(port, () => console.log(`Listening on port ${port}`))

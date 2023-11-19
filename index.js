import express from 'express';
import dotenv from 'dotenv';

import messageRoute from './routes/message.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("<h1>App is listening you....</h1>");
})

app.use('/api/v1/message', messageRoute);     

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});

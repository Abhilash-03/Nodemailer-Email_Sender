import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import messageRoute from './routes/message.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.send("<h1>App is listening you....</h1>");
})

app.use('/api/v1/message', messageRoute);     

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});

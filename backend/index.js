import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv  from "dotenv"

const app = express();

dotenv.config()

app.use(
    express.static(
        path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
    )
);

const PORT = 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
import { PeopleRouter } from "./people/controller/peopleController";
import { Response } from "express";

const express = require('express')
const app = express();
const cors = require('cors');
const port = 3005; // it can stored in .env
const hostname = '127.0.0.1';

app.use(cors());

// Get list
app.get('/', async (req: any, res: Response) => {
  res.json({status: 'server is running'})
});

app.use('/people', PeopleRouter);

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
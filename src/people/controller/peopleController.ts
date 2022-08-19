import { Request, Response } from 'express';
import { getOnePeopleParams } from "../constant/peopleConstant";
import { getPeopleById, getPeopleByPagination } from "../service/peopleService";

// Initializing
const express = require('express')
export const PeopleRouter = express.Router();

// Get list
PeopleRouter.get('/', async (req: any, res: Response) => {
  let page = 1;
  let search = '';
  if (req.query.page) {
    page = parseInt(req.query.page);
    if (isNaN(page)) {
      page = 1;
    }
  }

  if (req.query.search) {
    search = req.query.search;
  }

  const result = await getPeopleByPagination({ page, search });
  res.json(result);
});

// Get one by id
PeopleRouter.get('/:id', async (req: Request<getOnePeopleParams>, res: Response) => {
  const result = await getPeopleById(req.params.id);
  res.json(result);
});

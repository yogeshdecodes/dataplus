// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }

// import { Request, Response } from 'express';

import { API_URL } from '../../lib/api';

export default async ({ body }, res) => {
  const { term, fullTime, location, page } = JSON.parse(body);
  let query = '';
  if (term) {
    query += `&search=${term}`;
  }
  if (fullTime) {
    query += `&full_time=true`;
  }
  if (location) {
    query += `&location=${location.replace(' ', '+')}`;
  }
  if (page) {
    query += `&page=${page}`;
  }
  if (query.length) {
    query = query.substring(1);
  }
  try {
    const data = await fetch(`${API_URL}.json?${query}`);
    const json = await data.json();
    res.status(200).json(json);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
// import { NextFunction, Request, RequestHandler, Response } from 'express';
import * as Time from '../models/time.js';

const getTime = async (req, res, next) => {
  try {
    const time = await Time.getTime();
    res.setHeader(
      'Content-Range',
      `hellotime : 0-${time.length}/${time.length + 1}`
    );
    return res.status(200).json(time);
  } catch (err) {
    next(err);
  }
};

export default { getTime };

import * as Time from '../models/time.js';
// import { ResultSetHeader } from 'mysql2';

const getTime = async (req, res, next) => {
  try {
    const time = await Time.getTime();
    res.setHeader(
      'Content-Range',
      `time : 0-${time.length}/${time.length + 1}`
    );
    return res.status(200).json(time);
  } catch (err) {
    next(err);
  }
};

export default { getTime };

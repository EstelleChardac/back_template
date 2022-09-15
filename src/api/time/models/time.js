import connection from '../../../db-config.js';

// GET TIME
const getTime = async () => {
  let sql = 'SELECT * from hellotime';
  const results = await connection.promise().query(sql);
  return results[0][0];
};

export { getTime };

import connection from '../../../db-config.js';

// GET TIME
const getTime = async () => {
  const sql = 'SELECT CURRENT_TIME from hellotime';
  const results = await connection.promise().query(sql);
  return results[0];
};

export { getTime };

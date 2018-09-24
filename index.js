const request = require('request');

const {
  DB_MAKER_URL,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_ROOT_PASSWORD,
  MAX_RETRY,
  INTERVAL_RETRY
} = process.env;

let maxRetry = MAX_RETRY || 5;
const intervalRetry = INTERVAL_RETRY || 5000;

(function ensureDb() {
  request(
    `${DB_MAKER_URL}/mysql/${DB_HOST}/${DB_ROOT_PASSWORD}/${DB_NAME}/${DB_USER}/${DB_PASSWORD}`,
    function(error, _response, body) {
      if (!error) {
        console.info(
          JSON.stringify({
            status: 'ok',
            data: body
          })
        );
        process.exit(0);
      } else {
        console.error(
          JSON.stringify({
            status: 'error',
            data: error
          })
        );
      }
    }
  );
  if (maxRetry-- > 0) {
    setTimeout(ensureDb, intervalRetry);
  } else {
    process.exit(1);
  }
})();

import microCors from 'micro-cors';

const cors = microCors({
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type'],
});

const withCors = (handler) => cors(async (req, res) => handler(req, res));

export default withCors;

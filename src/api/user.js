import withCors from '../utils/cors';

const handler = async (req, res) => {
  res.status(200).json({ message: 'CORS applied to this API route!' });
};

export default withCors(handler);

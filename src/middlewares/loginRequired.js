import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);

  if (!authorization) {
    return res.status(401).json({
      errors: ['Não autorizado'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userEmail = email;
    req.userId = id;
    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ['Não autorizado'],
    });
  }
};

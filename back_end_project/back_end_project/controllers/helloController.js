const helloService = require('../services/helloService');

exports.sayHello = (req, res) => {
  const name = req.params.name || 'World';
  const message = helloService.getHelloMessage(name);
  res.send({ message });
};

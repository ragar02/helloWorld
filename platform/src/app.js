const http = require('http');
const express = require('express');
app = express();

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log('listening on ' + port);
});

const router = express.Router();
router.get('/api/hello', function (req, res, next) {
  console.log('In Get message call.');
  res.status(200).send({ msg: 'Hello World!' });
});

app.use('/', router);

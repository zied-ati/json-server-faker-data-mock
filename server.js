const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5010;
var db = require('./db.json');

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use(jsonServer.rewriter({
  '/api/transactions': '/transactions'
}));

// server.post('/add/transaction', (req, res) => {
//   if (req.method === 'POST') {
//     let transactionId = req.body['transactionId'];
//     if (transactionId != null && transactionId >= 0) {
//       let result = db.transactions.find(transaction => {
//         return transaction.transactionId == transactionId;
//       })

//       if (result) {
//         let {id, ...transaction} = result;
//         res.status(200).jsonp(transaction);
//       } else {
//         res.status(400).jsonp({
//           error: "Bad transactionId"
//         });
//       }
//     } else {
//       res.status(400).jsonp({
//         error: "No valid transactionId"
//       });
//     }
//   }
// });

server.get('/get/transaction', (req, res) => {
  if (req.method === 'GET') {
    let transactionId = req.query['transactionId'];
    if (transactionId != null && transactionId >= 0) {
      let result = db.transactions.find(transaction => {
        return transaction.transactionId == transactionId;
      })

      if (result) {
        let {id, ...transaction} = result;
        res.status(200).jsonp(transaction);
      } else {
        res.status(400).jsonp({
          error: "Bad transactionId"
        });
      }
    } else {
      res.status(400).jsonp({
        error: "No valid Transaction Id"
      });
    }
  }
});

server.use(router);
server.listen(port);

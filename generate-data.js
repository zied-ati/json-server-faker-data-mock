let faker = require('faker');

function generateData () {
  var transactions = [];
  for (var id = 0; id < 50; id++) {
    // let eartags = faker.random.number({min: 10000, max: 20000});
    let date = faker.date.between("2019-01-01", "2019-07-31").toISOString().split("T")[0];
    let cpId = faker.random.number({min: 276090000000001, max: 276090000000048});
    let bsType = faker.random.number({min: 1, max: 5});
    var transactionTypes = ['buy', 'sell', 'incoming', 'birth', 'death', 'antibiotic'];
    let type = transactionTypes[Math.floor(Math.random() * transactionTypes.length)];
    let eartags = []
    for (var i = 0; i < 10; i++) { 
      let ear = faker.random.number({min: 1200000000, max: 6000000000});
      let eartag = `DE${ear.toString()}`
      eartags.push(eartag)
    }
    transactions.push({
      "id": id,
      "companyId": cpId,
      "businessType": bsType,
      "created_at": date,
      "earTags": eartags,
      "type": type
    });
  }

  return {transactions};
}

module.exports = generateData;
